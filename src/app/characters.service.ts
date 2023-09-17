import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import {Subject} from "rxjs";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CharacterService {
    private characters = [
        { name: 'Harshita', side: 'light' },
        { name: 'Monal', side: 'light' },
        { name: 'Saksham', side: 'dark' },
        { name: 'Sanjay', side: 'dark' }
    ]
    logService: LogService;
    // void as we do not want to pass any payload with the event
    characterChanged = new Subject<void>();
    httpClient:HttpClient;

    constructor(logService: LogService, httpClient:HttpClient) {
        this.logService = logService;
        this.httpClient = httpClient;
    }

    fetchCharacters(){
        this.httpClient.get('https://swapi.dev/api/people/')
        .subscribe(
            (response : any) => {
                // console.log(response);
                const extractedChars = response.results;
                // console.log(extractedChars);
                const chars = extractedChars.map( 
                    (char : any) => {
                        return {name:char.name, side:''}
                    })
                console.log(chars);
                this.characters = chars;
                this.characterChanged.next();
            }
        )
    }

    getCharacters(chosenList: string) {
        if (chosenList === 'all')
            return this.characters.slice();
        return this.characters.filter((char) => { return char.side === chosenList });
    }

    onCharUpdate(charInfo: any) {
        const pos = this.characters.findIndex((char) => char.name === charInfo.name);
        this.characters[pos].side = charInfo.side;
        // this.logService.writeLog('Changed side of '+charInfo.name+' to '+charInfo.side);
        this.logService.writeLog(`Changed side of ${charInfo.name} to ${charInfo.side}`);
        // we won't pass any value to next as type is void
        this.characterChanged.next();
    }

    addCharacter(name: string, side: string) {
        const pos = this.characters.findIndex(char => { return char.name === name });
        console.log(pos);
        if (pos === -1) {
            const newChar = { name: name, side: side };
            this.characters.push(newChar);
        }
    }
}