export default function () {
  const seo = this.seo
  if (!seo) return {}
  return {
    title: seo.title || '',
    meta: [
      {
        property: 'og:title',
        content: seo.og_title || '',
      },
      {
        hid: `description`,
        name: 'description',
        content: seo.description,
      },
      {
        property: 'og:title',
        content: seo.og_title || '',
      },
      {
        property: 'og:description',
        content: seo.og_description || '',
      },
      {
        property: 'og:image',
        content: seo.og_image || '',
      },
      {
        property: 'twitter:title',
        content: seo.twitter_title || '',
      },
      {
        property: 'twitter:description',
        content: seo.twitter_description || '',
      },
      {
        property: 'twitter:image',
        content: seo.twitter_image || '',
      },
    ],
  }
}
