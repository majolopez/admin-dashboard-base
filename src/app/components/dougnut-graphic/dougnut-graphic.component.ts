import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dougnut-graphic',
  templateUrl: './dougnut-graphic.component.html',
  styles: [
  ]
})
export class DougnutGraphicComponent implements OnInit {

  @Input() chartLabels: Label[] = [];
  @Input() chartData: MultiDataSet = [];
  @Input() chartType: string = '';
  @Input() chartTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
