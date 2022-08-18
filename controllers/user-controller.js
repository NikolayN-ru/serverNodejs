const userService = require('../service/user-service');



class UserController {
    async registration(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true });
            return res.json(userData);
        } catch (e) {
            console.log(e);
            return res.json({ 'user': 'ESTi!' })
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true });
            return res.json(userData);
        } catch (e) {

        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {

        }
    }

    async active(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async getUsers(req, res, next) {
        try {
            res.json(['123', '456'])
        } catch (e) {

        }
    }
}

module.exports = new UserController();