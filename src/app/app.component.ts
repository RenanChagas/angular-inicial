import { Component } from '@angular/core';

import { Student } from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jad';

  students: Student[] = [
    {name: 'Luke', isJedi: true, temple: 'Corusctant'},
    {name: 'Han Solo', isJedi: false},
    {name: 'Leia', isJedi: false}
  ]

  //luke: Student = {name: 'Luke', isJedi: true, temple: 'Corusctant'}

}
