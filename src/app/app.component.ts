import { Component, OnInit } from '@angular/core';
import { CharacterService } from './characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FirstAppUsingServices';
  charService:CharacterService;

  constructor(charService:CharacterService){
    this.charService = charService;
  }

  ngOnInit(): void {
    this.charService.fetchCharacters();
  }
}
