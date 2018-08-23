const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.headers['Content-Tpye'] = 'text/html'

  const context = { url: ctx.path, user: ctx.session.user }

  try {
    await renderer.renderToString(context).then((html) => {
      if (context.router.currentRoute.fullPath !== ctx.path) {
        return ctx.redirect(context.router.currentRoute.fullPath)
      }
      const {
        title
      } = context.meta.inject()

      const appString = ejs.render(template, {
        html,
        style: context.renderStyles(),
        scripts: context.renderScripts(),
        title: title.text(),
        initialState: context.renderState()
      })
      ctx.body = appString
    }).catch(err => {
      console.error(err)
    })

   
  } catch (err) {
    console.log('render error', err)
    throw err
  }
}
