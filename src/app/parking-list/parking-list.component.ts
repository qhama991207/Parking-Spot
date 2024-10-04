import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parking-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parking-list.component.html',
  styleUrl: './parking-list.component.css'
})
export class ParkingListComponent {
Spaces=[
  {name:'space1',Selected:false},
  {name:'space2',Selected:false},
  {name:'space3',Selected:false},
  {name:'space4',Selected:false},
  {name:'space5',Selected:false},
  {name:'space6',Selected:false},
  {name:'space7',Selected:false},
  {name:'space8',Selected:false},
  {name:'space9',Selected:false},
  {name:'space10',Selected:false},
  {name:'space11',Selected:false},
  {name:'space12',Selected:false},
  {name:'space13',Selected:false},
  {name:'space14',Selected:false},
  {name:'space15',Selected:false},
  {name:'space16',Selected:false},
  {name:'space17',Selected:false},
  {name:'space18',Selected:false},
  {name:'space19',Selected:false},
  {name:'space20',Selected:false}
]
}
