export default function () {
  return {
    title: this.title || '',
    meta: [
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
