import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart: Chart;
  data = "dsfhgdsfjgsdfjsdhf"

  ngOnInit() {
    this.init();
    this.addSerie();
  }


  addSerie() {
    // @ts-ignore
    this.chart.addSeries({
      data: [ 4,7,1,4,5]
    });
  }

  init() {

    let chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      }
    });
    chart.addPoint(4);
    this.chart = chart;
    chart.ref$.subscribe(console.log);
  }
}

