import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {
  constructor() { }
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Product A' },
    { data: [120, 455, 100, 340], label: 'Product B' },
    { data: [45, 67, 800, 500], label: 'Product C' }
  ];

  chartLabels = [2017, 2018,2019, 2020];

  ngOnInit() {
  }
}
