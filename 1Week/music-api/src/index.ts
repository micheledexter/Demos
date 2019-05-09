import express from 'express';
import {artists} from './state';

const app = express();

// use hits every http method
// if we don't give a path, it will hit every path
// if it sends a response, we will never be able to do anything else
// app.use((req, res) => {
//     res.json('We have an api, woopee!!');
// });

// 'next' is an optional parameter that allows us to move past the
// current part
app.use((req, res, next) => {
    console.log(`request was made with the url ${req.url} and http method ${req.method}`)
    // this is required for 'next'
    next();
});

app.get('/', (req, res) => {
    res.json('Try making a request to /artists');
});

app.get('/artists', (req, res) => {
    res.json(artists);
});

app.get('/artists/artistname/:name', (req, res) => {
    let name = req.params.name;
    res.json((() => {
        for (let i = 0; i < artists.length; i++) {
            if (artists[i].name === name){
                return artists[i];
            }
        }
        return 'Artist not found.';
    })());
});

app.listen(3000, () => {
    console.log('App has started...');
});