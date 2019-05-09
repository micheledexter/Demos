import {Artist} from './artist';

export class User {
    username: string;
    password: string;
    favoriteArtist: Artist;
    id: number;
    constructor(username: string = '', password: string = '', favA: Artist = null, id?: number) {
        this.username = username;
        this.password = password;
        this.favoriteArtist = favA;
        this.id = id || -1;
    }
}