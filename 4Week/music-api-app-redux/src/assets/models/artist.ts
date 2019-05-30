// a model representing a musical artist
export class Artist{
    name: string;
    numberOfMembers: number;
    genre: string;
    albums: string[];
    constructor(name: string, numberOfMembers: number, genre: string, albums: string[]) {
        this.name = name;
        this.numberOfMembers = numberOfMembers;
        this.genre = genre;
        this.albums = albums;
    }
}