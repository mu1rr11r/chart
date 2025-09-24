import { Component } from '@angular/core';
import { ChartModule, Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']   // ✅
})
export class ChartComponent {
  // Line chart
  lineChart = new Chart({
    chart: { type: 'line' },
    title: { text: 'Line Chart' },
    series: [{ type: 'line', name: 'Line', data: [1, 2, 3, 4, 5] }]
  });

  // Spline chart
  splineChart = new Chart({
    chart: { type: 'spline' },
    title: { text: 'Spline Chart' },
    series: [{ type: 'spline', name: 'Spline', data: [1, 3, 2, 4, 6, 3, 5] }]
  });

  // Area chart
  areaChart = new Chart({
    chart: { type: 'area' },
    title: { text: 'Area Chart' },
    series: [{ type: 'area', name: 'Area', data: [1, 2, 3, 6, 8, 5, 7] }]
  });

  // Column chart
  columnChart = new Chart({
    chart: { type: 'column' },
    title: { text: 'Column Chart' },
    series: [{ type: 'column', name: 'Column', data: [5, 3, 4, 7, 2] }]
  });

  // Bar chart
  barChart = new Chart({
    chart: { type: 'bar' },
    title: { text: 'Bar Chart' },
    series: [{ type: 'bar', name: 'Bar', data: [2, 3, 5, 7, 6] }]
  });

  // Pie chart
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

  // Scatter chart
  scatterChart = new Chart({
    chart: { type: 'scatter' },
    title: { text: 'Scatter Chart' },
    series: [{
      type: 'scatter',
      name: 'Points',
      data: [[1, 2], [3, 5], [4, 4], [7, 8], [5, 6]]
    }]
  });
}
