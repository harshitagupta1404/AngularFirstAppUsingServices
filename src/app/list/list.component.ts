import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  // @Input() listChars:any;

  // After routing
  listChars : any;
  activatedRoute : ActivatedRoute;
  charService : CharacterService;
  loadedSide = 'all';

  constructor(activatedRoute:ActivatedRoute, charService : CharacterService){
    this.activatedRoute = activatedRoute;
    this.charService = charService;
  }

  ngOnInit(){
    // this.charService.fetchCharacters();
    this.activatedRoute.params.subscribe(
      (param) => {
        this.listChars = this.charService.getCharacters(param['chosenSide']);
        this.loadedSide = param['chosenSide'];
      }
    );

    this.charService.characterChanged.subscribe(
      () => {
      this.listChars = this.charService.getCharacters(this.loadedSide);
      }
    )
  }
}
