const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async (ctx) => {
  const user = ctx.request.body
  if (user.username === 'haw' && user.password === '000') {
    ctx.session.user = {
      username: 'haw'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'haw'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
