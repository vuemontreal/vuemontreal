export default function myModule() {
  this.nuxt.hook('modules:done', (moduleContainer) => {
    // This will be called when all modules finished loading
  })

  this.nuxt.hook('render:before', (renderer) => {
    // Called after the renderer was created
  })

  this.nuxt.hook('build:compile', async ({ name, compiler }) => {
    // Called before the compiler (default: webpack) starts
  })

  this.nuxt.hook('generate:before', async (generator) => {
    // This will be called before Nuxt generates your pages
  })

  this.nuxt.hook('ready', () => {
    console.log(this.nuxt)
  })
}
