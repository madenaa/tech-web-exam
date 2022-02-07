import express, { request, response } from 'express';
import {Playlist, Song} from './repository.mjs';

import {
    getRecords, postRecord, deleteRecords, 
    getRecord, putRecord, deleteRecord, patchRecord
} from './service.mjs';

const router = express.Router();

router.route('/playlists')
    .get((request, response) => getRecords(Playlist, request, response)) 
    .post((request, response) => postRecord(Playlist, request, response)) 
    
    .delete((request, response) => deleteRecords(Playlist, request, response));

router.route('/playlists/:id')
    .get((request, response) => getRecord(Playlist, request, response)) 
    .post((request, response) => postRecord(Playlist, request, response)) 
    .delete((request, response) => deleteRecord(Playlist, request, response)) 
    .patch((request, response) => patchRecord(Playlist, request, response)) 
    .put((request, response) => putRecord(Playlist, request, response));

router.route('/songs')
    .get((request, response) => getRecords(Song, request, response)) 
    .post((request, response) => postRecord(Song, request, response)) 
    
    .delete((request, response) => deleteRecords(Song, request, response));
    
router.route('/songs/:id')
    .get((request, response) => getRecord(Song, request, response)) 
    .post((request, response) => postRecord(Song, request, response)) 
    .delete((request, response) => deleteRecord(Song, request, response)) 
    .patch((request, response) => patchRecord(Song, request, response)) 
    .put((request, response) => putRecord(Song, request, response));


export default router;

