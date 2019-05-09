import express from 'express';
import {loggingMiddleware} from '../middleware/logging';
import {artists} from '../state';

export const artistRouter = express.Router();

artistRouter.get('/', (req, res) => {
    res.json(artists);
});

artistRouter.post('/', [loggingMiddleware, (req, res) => {
    // console.log(req.body);
    artists.push(req.body);
    res.json(req.body);
}]);

artistRouter.get('/artistname/:name', (req, res) => {
    let name = req.params.name;
    for (let artist of artists) {
        if (artist.name === name) {
            res.json(artist);
        }
    }
    res.json('Artist not found.');
})

// artistRouter.get('/artistname/:name', (req, res) => {
//     let name = req.params.name;
//     res.json((() => {
//         for (let i = 0; i < artists.length; i++) {
//             if (artists[i].name === name){
//                 return artists[i];
//             }
//         }
//         return 'Artist not found.';
//     })());
// });