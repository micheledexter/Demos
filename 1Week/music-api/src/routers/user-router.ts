import express from 'express';
import { loggingMiddleware } from '../middleware/logging';
import { users } from '../state';

export const userRouter = express.Router();

userRouter.get('', (req, res) => {
    res.json(users);
});

userRouter.post('/', [loggingMiddleware, (req, res) => {
    users.push(req.body);
    res.json(req.body);
}]);

userRouter.get('/id/:id', (req, res) => {
    let id = req.params.id;
    for (let user of users) {
        if (user.id === Number.parseInt(id) ) {
            res.json(user);
        }
    }
    res.json(`User id ${id} not found`);
});