// factory design pattern
// we are going to write a 'factory' that will build objects/functions
// based on parameters we give it

export function authorization(authRoles: string[]) {
    // the function we return _*is*_ the middleware
    return (req, res, next) => {
        let isAuth: boolean = false;
        // make sure the user is logged in, otherwise user will be undefined
        if (!req.session.user) {
            res.sendStatus(401);
        }
        // make sure user hase at least one role in authRoles
        for (let userRole of req.session.user.roles) {
            if (authRoles.includes(userRole)) {
                isAuth = true;
            }
        }
        if (isAuth) {
            next();
        } else {
            res.sendStatus(403);
        }
    }
}

export function adminAuth(req, res, next) {
    if (req.session.user && req.session.user.roles.includes('admin')) {
        next();
    } else {
        res.sendStatus(403);
    }
}