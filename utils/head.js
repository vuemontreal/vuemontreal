export default function () {
  const seo = this.$nuxtI18nSeo()
  return {
    htmlAttrs: seo.htmlAttrs,
    title: this.title || '',
    link: seo.link,
    meta: [
      ...seo.meta,
      {
        property: 'og:title',
        content: this.title || '',
      },
      {
        hid: `description`,
        name: 'description',
        content: this.description,
      },
      {
        property: 'og:title',
        content: this.title || '',
      },
      {
        property: 'og:description',
        content: this.description || '',
      },
      {
        property: 'og:image',
        content: (this.image && this.image.filename) || '/vue-logo-transparent',
      },
      {
        property: 'twitter:title',
        content: this.titlte || '',
      },
      {
        property: 'twitter:description',
        content: this.description || '',
      },
      {
        property: 'twitter:image',
        content: (this.image && this.image.filename) || '/vue-logo-transparent',
      },
    ],
  }
}
