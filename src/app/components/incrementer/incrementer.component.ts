import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: ['']
})

export class IncrementerComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() title: string  = 'Title';
  @Input() progress: number = 50;

  @Output() valueChange: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {  }

  onChangeValue( value: number ){
    if (this.progress >= 100 && value > 0){
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && value < 0 ){
      return;
    }
    this.progress = this.progress + value;
    this.valueChange.emit(this.progress);
  }

  onChange(newValue: number){
    if (newValue >= 100){
      this.progress = 100;
    }else if ( newValue <= 0){
      this.progress = 0;
    }

    this.txtProgress.nativeElement.value = this.progress;
    this.progress = newValue;
    this.valueChange.emit(this.progress);
    this.txtProgress.nativeElement.focus();
  }

}
