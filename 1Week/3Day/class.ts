import {IWrestling} from './interface';

export default class Wreslter implements IWrestling{
    introMusic:string;
    catchPhrase:string;
    yearsPerforming:number;
    finisher():string{
        return 'Stone Cold Stunnin';
    }
    constructor(introMusic:string, catchPhrase:string, yearsPerforming:number) {
        this.introMusic = introMusic;
        this.catchPhrase = catchPhrase;
        this.yearsPerforming = yearsPerforming;
    }
}

export let steveAustin = new Wreslter('glass Break', 'and that\'s the bottom line', 20);

console.log(steveAustin.finisher());