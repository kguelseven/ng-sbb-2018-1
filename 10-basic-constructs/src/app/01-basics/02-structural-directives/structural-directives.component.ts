import {Component} from '@angular/core';

@Component({
  selector: 'aw-structural-directives>',
  templateUrl: './structural-directives.component.html',
})
export class StructuralDirectivesComponent {

  characters: Array<ICharacter> = [
    {
      firstName: 'Katniss',
      lastName: 'Everdeen',
      district: 12,
      emotion: Emotion.InLove
    },
    {
      firstName: 'Peeta',
      lastName: 'Mellark',
      district: 12,
      emotion: Emotion.InLove
    },
    {
      firstName: 'Johanna',
      lastName: 'Mason',
      district: 7,
      emotion: Emotion.Angry
    },
    {
      firstName: 'Finnick',
      lastName: 'Odair',
      district: 4,
      emotion: Emotion.Sad
    }
  ];

  showDistrict = true;

  Emotion = Emotion; // needed to get a reference to the Enum values in the template


  // // DEMONSTRATE TRACK-BY
  // reload() {
  //   this.characters = this.getCharacters();
  // }
  //
  // private getCharacters() {
  //   return [
  //     {
  //       firstName: 'Katniss',
  //       lastName: 'Everdeen',
  //       district: 12,
  //       emotion: Emotion.InLove
  //     },
  //     {
  //       firstName: 'Peeta',
  //       lastName: 'Mellark',
  //       district: 12,
  //       emotion: Emotion.InLove
  //     },
  //     {
  //       firstName: 'Johanna',
  //       lastName: 'Mason',
  //       district: 7,
  //       emotion: Emotion.Angry
  //     },
  //     {
  //       firstName: new Date().toTimeString(),
  //       lastName: 'Odair',
  //       district: 4,
  //       emotion: Emotion.Sad
  //     }
  //   ];
  // }
  //
  // trackByFirstName(index: number, character: ICharacter) {
  //   return character.firstName;
  // }

}


export interface ICharacter {
  firstName: string;
  lastName: string;
  district: number;
  emotion: Emotion;
}

enum Emotion {
  InLove,
  Angry,
  Sad,
}


@Component({
  selector: 'aw-test-directive>',
  template: '<div></div>',
})
export class TestComponent {
  constructor() {
    console.log('created');
  }
}
