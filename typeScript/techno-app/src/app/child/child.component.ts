import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Output() childData = new EventEmitter();

  @Input() dataFromParent = "";
  ngOnInit() {
    this.childData.emit('this is data from child');
  }

}
