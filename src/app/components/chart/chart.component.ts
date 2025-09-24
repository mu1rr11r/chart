import { Component } from '@angular/core';
import { ChartModule, Chart } from 'angular-highcharts';
import { chart } from 'highcharts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  lineChart =new Chart({
    chart:{type:'line'},
    title:{text:'line'},
    series:[{type:'line',name:'line',data:[1,2,3,4,5,6,7,8,9,10]}]
  })
  splineChart = new Chart({
    chart: { type: 'spline' },
    title: { text: 'Spline Chart' },
    series: [{ type: 'spline', name: 'Spline', data: [1, 3, 2, 4, 6, 3, 5] }]
  });

  areaChart = new Chart({
    chart: { type: 'area' },
    title: { text: 'Area Chart' },
    series: [{ type: 'area', name: 'Area', data: [1, 2, 3, 6, 8, 5, 7] }]
  });


  columnChart = new Chart({
    chart: { type: 'column' },
    title: { text: 'Column Chart' },
    series: [{ type: 'column', name: 'Column', data: [5, 3, 4, 7, 2] }]
  });

  barChart = new Chart({
    chart: { type: 'bar' },
    title: { text: 'Bar Chart' },
    series: [{ type: 'bar', name: 'Bar', data: [2, 3, 5, 7, 6] }]
  });

  pieChart = new Chart({
    chart: { type: 'pie' },
    title: { text: 'Pie Chart' },
    series: [{
      type: 'pie',
      name: 'Share',
      data: [
        { name: 'A', y: 40 },
        { name: 'B', y: 30 },
        { name: 'C', y: 20 },
        { name: 'D', y: 10 }
      ]
    }]
  });

  scatterChart = new Chart({
    chart: { type: 'scatter' },
    title: { text: 'Scatter Chart' },
    series: [{
      type: 'scatter',
      name: 'Points',
      data: [[1, 2], [3, 5], [4, 4], [7, 8], [5, 6]]
    }]
  });

doughnutChart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Doughnut Chart Example'
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y}'
        }
      }
    },
    series: [
      {
        type: 'pie',
        name: 'Share',
        data: [
          { name: 'Apples', y: 40 },
          { name: 'Bananas', y: 30 },
          { name: 'Oranges', y: 20 },
          { name: 'Grapes', y: 10 }
        ]
      }
    ]
  });

  radarChart = new Chart({
    chart:{
      polar: true,
      type: 'line'
    },
    title: {
      text: 'Radar Chart Example'
    },
    pane: {
      size: '80%'
    },
    xAxis: {
      categories: ['Speed', 'Strength', 'Agility', 'Endurance', 'Flexibility'],
      tickmarkPlacement: 'on',
      lineWidth: 0
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0
    },
    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y}</b><br/>'
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      layout: 'vertical'
    },
    series: [
      {
        type: 'line',
        name: 'Player A',
        data: [80, 90, 70, 85, 65],
        pointPlacement: 'on'
      },
      {
        type: 'line',
        name: 'Player B',
        data: [65, 75, 85, 60, 80],
        pointPlacement: 'on'
      }
    ]
  });

}
