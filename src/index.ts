import express from 'express';
import './db';

const app = express();

const PORT = process.env.PORT || 8989;

app.listen(PORT, () => {
    console.log('Port is listening at port ->', + PORT)
});

// The plan and features //
// * Upload audio files
// * listen to single audio
// * add to favourites
// * create playlist
// * remove playlist (public - private)
// * remove audios
// * more...

