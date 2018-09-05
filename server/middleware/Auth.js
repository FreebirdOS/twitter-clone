var UserModel = require('../model/user')

const GetLoginedUser = async (req, res, next) => {
  let token = req.headers['x-auth']

  try {
    let user = await UserModel.findByToken(token)
    req.user = user
    req.token || (req.token = {})
    req.token.auth = token

    next()
  } catch (e) {
    // do nothing
    next()
  }
}

module.exports = {
  GetLoginedUser
}
