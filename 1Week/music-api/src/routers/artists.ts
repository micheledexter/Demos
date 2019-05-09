// probaby not to be used...

import express from 'express';
import {artists} from '../state';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(artists);
});

router.get('/name/:name', (req, res) => {
    let name = req.params.name;
    for (let artist of artists) {
        if (artist.name === name) {
            res.json(artist);
        }
    }
    res.json('Artist not found.');
});

router.get('/album/:name', (req, res) => {
    let name = req.params.name;
    for (let artist of artists) {
        for (let album of artist.albums) {
            if (album === name) {
                res.json(album);
            }
        }
    }
    res.json("Album not found");
});

export default router;