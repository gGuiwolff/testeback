exports.requireLoggedOutUser = (req, res, next) => {
    if (req.session.userId) {
        console.log('[VODE ESTA ATUTENTICADO]')
        return res.redirect("/");
    }
    next();
};
exports.requireLoggedInUser = (req, res, next) => {
    if (!req.session.userId) {
        console.log('[NAO ATUTENTICADO]')
        return res.redirect("/welcome");
    }
    next();
};
/*exports.casualUser = (req, res, next) => {
    if (req.session === null) {
        return res.redirect("/teste");
    }
    next();
};*/
