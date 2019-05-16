import {Artist} from './artist';

export class User {
    username: string;
    password: string;
    favoriteArtist: Artist | null;
    id: number;
    roles: string[]
    constructor(username: string = '', password: string = '', favA: Artist = null, id?: number, roles?: string[] ) {
        this.username = username;
        this.password = password;
        this.favoriteArtist = favA;
        this.id = id || -1;
        this.roles = [];
    }
}