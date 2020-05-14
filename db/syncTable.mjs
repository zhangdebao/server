import User from './model/user.mjs'
export default async function initDB () {
    await User.sync({
        // force: true
    })
}