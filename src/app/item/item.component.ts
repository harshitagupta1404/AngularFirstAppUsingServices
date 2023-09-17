import { Component, Input } from '@angular/core';
import { CharacterService } from '../characters.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() character:any;
  charService:CharacterService;

  constructor(charService:CharacterService){
    this.charService = charService;
  }

  onAssign(side:string){
    this.charService.onCharUpdate({name:this.character.name,side:side});
  }
}
