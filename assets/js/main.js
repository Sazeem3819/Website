/* ============================================================
   TSSCO — cinematic scroll site
   Lenis (smooth scroll) + GSAP ScrollTrigger choreography
   ============================================================ */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gsap.registerPlugin(ScrollTrigger);

  /* ----------------------------------------------------------
     Smooth scroll (Lenis) synced with ScrollTrigger
     ---------------------------------------------------------- */
  var lenis = null;
  if (!prefersReducedMotion) {
    lenis = new Lenis({
      duration: 1.15,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  // Anchor links scroll smoothly, offset for the fixed nav on section heads
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: 0, duration: 1.6 });
      } else {
        target.scrollIntoView();
      }
    });
  });

  /* ----------------------------------------------------------
     Preloader
     ---------------------------------------------------------- */
  var preloader = document.getElementById("preloader");
  document.body.style.overflow = "hidden";
  function dismissPreloader() {
    if (!preloader || preloader.classList.contains("is-done")) return;
    preloader.classList.add("is-done");
    document.body.style.overflow = "";
  }
  window.addEventListener("load", function () { setTimeout(dismissPreloader, 350); });
  setTimeout(dismissPreloader, 2600); // hard cap so slow assets never trap the user

  /* ----------------------------------------------------------
     Media frames: poster image + optional lazy autoplay video.
     The poster shows immediately (Ken Burns for life); if the
     video file exists it fades in over the poster. If either
     asset is missing, the layered gradient beneath still reads
     as intentional art direction.
     ---------------------------------------------------------- */
  document.querySelectorAll("[data-media]").forEach(function (frame) {
    var posterSrc = frame.getAttribute("data-poster");
    var videoSrc = frame.getAttribute("data-video");
    var videoRemote = frame.getAttribute("data-video-remote");

    if (posterSrc) {
      var img = new Image();
      img.alt = "";
      img.decoding = "async";
      img.addEventListener("load", function () { img.classList.add("is-loaded"); });
      img.src = posterSrc;
      frame.appendChild(img);
    }

    if (!videoSrc && !videoRemote) return;

    var loaded = false;
    var video = null;

    function loadVideo() {
      if (loaded) return;
      loaded = true;
      video = document.createElement("video");
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("muted", "");
      video.preload = "auto";
      video.addEventListener("error", function () {
        // Local file missing: fall back to the remote copy once, then
        // drop the element so the poster remains.
        if (videoRemote && video.src.indexOf(videoRemote) === -1) {
          video.src = videoRemote;
          var p = video.play();
          if (p && p.catch) p.catch(function () {});
          return;
        }
        if (video.parentNode) video.parentNode.removeChild(video);
        video = null;
      }, true);
      video.addEventListener("playing", function () {
        video.classList.add("is-playing");
      });
      video.src = videoSrc || videoRemote;
      frame.insertBefore(video, frame.firstChild);
      var p = video.play();
      if (p && p.catch) p.catch(function () { /* autoplay blocked: poster remains */ });
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          loadVideo();
          if (video && video.paused) {
            var p = video.play();
            if (p && p.catch) p.catch(function () {});
          }
        } else if (video && !video.paused) {
          video.pause();
        }
      });
    }, { rootMargin: "35% 0px" });
    io.observe(frame);
  });

  /* ----------------------------------------------------------
     Split text into masked lines for cinematic reveals
     ---------------------------------------------------------- */
  function splitLines(el) {
    var text = el.textContent.replace(/\s+/g, " ").trim();
    var words = text.split(" ");
    el.textContent = "";
    var spans = words.map(function (w) {
      var s = document.createElement("span");
      s.textContent = w + " ";
      s.style.display = "inline-block";
      el.appendChild(s);
      return s;
    });
    // group words into visual lines by their rendered offset
    var lines = [];
    var currentTop = null;
    spans.forEach(function (s) {
      if (s.offsetTop !== currentTop) {
        currentTop = s.offsetTop;
        lines.push([]);
      }
      lines[lines.length - 1].push(s.textContent);
    });
    el.textContent = "";
    var inners = [];
    lines.forEach(function (lineWords) {
      var line = document.createElement("span");
      line.className = "line";
      var inner = document.createElement("span");
      inner.className = "line-inner";
      inner.textContent = lineWords.join("");
      line.appendChild(inner);
      el.appendChild(line);
      inners.push(inner);
    });
    return inners;
  }

  if (!prefersReducedMotion) {
    // Headline line reveals
    document.querySelectorAll("[data-split]").forEach(function (el) {
      var inners = splitLines(el);
      gsap.set(inners, { yPercent: 110 });
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: function () {
          gsap.to(inners, {
            yPercent: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.09
          });
        }
      });
    });

    // Soft rise-and-fade reveals
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      var delay = parseFloat(el.getAttribute("data-reveal-delay") || "0");
      gsap.set(el, { autoAlpha: 0, y: 36 });
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: function () {
          gsap.to(el, { autoAlpha: 1, y: 0, duration: 1.1, ease: "power3.out", delay: delay });
        }
      });
    });

    // Manifesto: words light up as you scrub through
    document.querySelectorAll("[data-words]").forEach(function (el) {
      var text = el.textContent.replace(/\s+/g, " ").trim();
      el.textContent = "";
      var words = text.split(" ").map(function (w) {
        var s = document.createElement("span");
        s.className = "w";
        s.textContent = w;
        el.appendChild(s);
        el.appendChild(document.createTextNode(" "));
        return s;
      });
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        end: "bottom 45%",
        scrub: true,
        onUpdate: function (self) {
          var lit = Math.floor(self.progress * words.length);
          words.forEach(function (w, i) {
            w.classList.toggle("is-lit", i <= lit);
          });
        }
      });
    });

    /* --------------------------------------------------------
       Hero: media parallax + content drift on exit
       -------------------------------------------------------- */
    var hero = document.querySelector(".hero");
    if (hero) {
      gsap.to(hero.querySelector("[data-parallax-media]"), {
        yPercent: 18,
        scale: 1.06,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true }
      });
      gsap.to(hero.querySelector(".hero__content"), {
        autoAlpha: 0,
        y: -60,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "60% top", scrub: true }
      });
    }

    /* --------------------------------------------------------
       Solutions deck: each sticky panel is covered by the next;
       the outgoing panel recedes (scale + dim) as it happens.
       -------------------------------------------------------- */
    var panels = gsap.utils.toArray("[data-panel]");
    panels.forEach(function (panel, i) {
      var next = panels[i + 1];
      if (!next) return;
      var media = panel.querySelector(".panel__media");
      var content = panel.querySelector(".panel__content");
      gsap.timeline({
        scrollTrigger: {
          trigger: next,
          start: "top bottom",
          end: "top top",
          scrub: true
        }
      })
        .to(media, { scale: 0.94, filter: "brightness(0.45)", ease: "none" }, 0)
        .to(content, { autoAlpha: 0, y: -50, ease: "none" }, 0);
    });

    // Panel media arrives with a subtle zoom-settle
    panels.forEach(function (panel) {
      var frame = panel.querySelector(".media-frame");
      gsap.fromTo(frame, { scale: 1.12 }, {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: panel,
          start: "top bottom",
          end: "top top",
          scrub: true
        }
      });
    });
  } else {
    // Reduced motion: everything simply visible
    document.querySelectorAll("[data-words]").forEach(function (el) {
      el.querySelectorAll(".w").forEach(function (w) { w.classList.add("is-lit"); });
    });
  }

  /* ----------------------------------------------------------
     Marquee: duplicate track content once for a seamless -50% loop
     ---------------------------------------------------------- */
  document.querySelectorAll("[data-marquee] .marquee__track").forEach(function (track) {
    track.innerHTML += track.innerHTML;
  });

  /* ----------------------------------------------------------
     Nav: solid after leaving the hero, hides on scroll down
     ---------------------------------------------------------- */
  var nav = document.getElementById("nav");
  var lastY = 0;
  function onScrollY(y) {
    nav.classList.toggle("is-solid", y > 60);
    if (y > lastY && y > 500) {
      nav.classList.add("is-hidden");
    } else {
      nav.classList.remove("is-hidden");
    }
    lastY = y;
  }
  if (lenis) {
    lenis.on("scroll", function (e) { onScrollY(e.scroll); });
  } else {
    window.addEventListener("scroll", function () { onScrollY(window.scrollY); }, { passive: true });
  }
})();
