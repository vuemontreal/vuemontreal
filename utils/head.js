export default function () {
  const seo = this.seo
  if (!seo) return {}
  return {
    title: seo.title || '',
    meta: [
      {
        property: 'og:title',
        content: seo.title || '',
      },
      {
        hid: `description`,
        name: 'description',
        content: seo.description,
      },
      {
        property: 'og:title',
        content: seo.title || '',
      },
      {
        property: 'og:description',
        content: seo.description || '',
      },
      {
        property: 'og:image',
        content: seo.og_image || '',
      },
      {
        property: 'twitter:title',
        content: seo.titlte || '',
      },
      {
        property: 'twitter:description',
        content: seo.description || '',
      },
      {
        property: 'twitter:image',
        content: seo.og_image || '',
      },
    ],
  }
}
