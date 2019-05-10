import express from 'express';
// import { loggingMiddleware } from '../middleware/logging';
import { users } from '../state';
import { User } from '../models/user';
import { authorization } from '../middleware/auth.middleware';

export const userRouter = express.Router();

userRouter.get('', [authorization(['admin']), (req, res) => {
    res.json(users);
}]);

// userRouter.post('/', [loggingMiddleware, (req, res) => {
//     let message = res.json('Invalid submission.');
//     for (let item of req.body) {
//         if (!item) message;
//         if (typeof(item) === 'object') {
//             for (let bit of item) {
//                 if (!bit) message;
//             }
//         }
//     }
//     users.push(req.body);
//     res.json(req.body);
// }]);

userRouter.post('/', (req, res) => {
    let {body} = req; // destructuring
    let newUser = new User();
    for (let key in newUser) {
        if (!body[key]) {
            res.status(400).send('Please include all user fields');
        } else {
            newUser[key] = body[key]
        }
    }
    users.push(newUser);
    res.json(newUser);
});

// userRouter.get('/id/:id', (req, res) => {
//     let id = req.params.id;
//     for (let user of users) {
//         if (user.id === Number.parseInt(id) ) {
//             res.json(user);
//         }
//     }
//     res.json(`User id ${id} not found`);
// });

userRouter.get('/:id', (req, res) => {
    let id = +req.params.id; // id is string by default, adding the + turns to int
    let user = users.find((u) => u.id === id);
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(400);
    }
});

// lets make a login endpoint
userRouter.post('/login', (req, res) => {
    const {username, password} = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        req.session.user = user;
        // res.send(req.session); //don't send them the session
        res.send('You logged in');
        // the standard is that we send them their user object 
    } else {
        res.sendStatus(401);
    }
});

userRouter.patch('/:id', [authorization(['admin']), (req, res) => {
    let id = +req.params.id;
    let user = users.find((u) => {
        return u.id === id;
    });
    if (user) {
        let {body} = req;
        for (let key in user) {
            if (!body[key]) {
                
            } else {
                user[key] = body[key];
            }
        }
        res.json(user);
    } else {
        res.sendStatus(400);
    }
}]);