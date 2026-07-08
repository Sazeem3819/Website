// Single source of truth for company contact details.
export const CONTACT = {
  email: 'info@tssco.org',
  phoneDisplay: '+966 53 554 3016',
  phoneHref: 'tel:+966535543016',
  whatsappHref: 'https://wa.me/966535543016',
  addressLines: ['Jameel Square, 9th Floor', '2091 Prince Mohammed Bin Abdulaziz St', 'Al Andalus, Jeddah 23326'],
  addressShort: 'Jeddah · Kingdom of Saudi Arabia',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'Jameel Square, 2091 Prince Mohammed Bin Abdulaziz St, Al Andalus, Jeddah 23326, Saudi Arabia'
    ),
}
