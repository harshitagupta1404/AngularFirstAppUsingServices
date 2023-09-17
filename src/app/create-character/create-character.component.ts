import { Component } from '@angular/core';
import { CharacterService } from '../characters.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {

  availableSides=[
    {display:'None', value:''},
    {display:'Light', value:'light'},
    {display:'Dark', value:'dark'}
  ]
  // We are doing 1 way binding to give default value. 2 way binding will spoil our functionality
  defaultName = "Name";
  charService:CharacterService;

  constructor(charService:CharacterService){
    this.charService=charService;
  }

  onSubmit(submittedForm:any){
    console.log(submittedForm);
    if(submittedForm.status==='INVALID'){
      return;
    }
    this.charService.addCharacter(submittedForm.value.name,submittedForm.value.side);
  }
}
