const passwordMiddleware = (req, res, next) => {
    const { password } = req.query;
    if (!password) {
        return res.send("No password");
    }
    if (password !== 'carros123') {
        return res.send("Incorrect password");
    }
    next();
}

module.exports = { passwordMiddleware };