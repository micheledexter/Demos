import express from 'express';
import { loggingMiddleware } from './middleware/logging.middleware';
import bodyParser from 'body-parser';
import { artistRouter } from './routers/artist.router';
import { userRouter } from './routers/user.router';
import { sessionMiddleware } from './middleware/session.middleware';
import { corsFilter } from './middleware/corse-filter.middleware';

const app = express();

// use hits every http method
// if we don't give a path, it will hit every path
// if it sends a response, we will never be able to do anything else
// app.use((req, res) => {
//     res.json('We have an api, woopee!!');
// });

// 'next' is an optional parameter that allows us to move past the
// current part
app.use(corsFilter);
app.use(loggingMiddleware);
app.use(bodyParser.json());
app.use(sessionMiddleware);

// a piece of middleware
// will take json attached to http body
// and turn it into a real js object for us to use

app.get('/', (req, res) => {
    res.json('Try making a request to /artists');
});

app.use('/artists', artistRouter);
app.use('/users', userRouter);

app.listen(5000, () => {
    console.log('App has started...');
});