import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";

import { ApexAxisChartSeries, ApexChart, ApexStroke, ApexDataLabels, ApexXAxis, ApexGrid, ApexTitleSubtitle, ApexTooltip, ApexPlotOptions, ApexYAxis, ApexFill, ApexMarkers, ApexTheme, ApexNonAxisChartSeries, ApexLegend, ApexResponsive, ApexStates } from "ng-apexcharts";

import { colors } from "app/colors.const";

interface ChartOptions {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  dataLabels?: ApexDataLabels;
  grid?: ApexGrid;
  stroke?: ApexStroke;
  legend?: ApexLegend;
  title?: ApexTitleSubtitle;
  colors?: string[];
  tooltip?: ApexTooltip;
  plotOptions?: ApexPlotOptions;
  yaxis?: ApexYAxis;
  fill?: ApexFill;
  labels?: string[];
  markers: ApexMarkers;
  theme: ApexTheme;
}

@Component({
  selector: "app-course-activity",
  templateUrl: "./course-activity.component.html",
  styleUrls: ["./course-activity.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CourseActivityComponent implements OnInit {
  @ViewChild("apexHeatmapChartRef") apexHeatmapChartRef: any;
  public apexHeatmapChart: Partial<ChartOptions>;
  public isMenuToggled = false;
  constructor() {
    // Apex Heatmap Chart
    this.apexHeatmapChart = {
      series: [
        {
          name: "SUN",
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60,
          }),
        },
        {
          name: "MON",
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60,
          }),
        },
        {
          name: "TUE",
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60,
          }),
        },
        {
          name: "WED",
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60,
          }),
        },
        {
          name: "THU",
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60,
          }),
        },
        {
          name: "FRI",
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60,
          }),
        },
        {
          name: "SAT",
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60,
          }),
        },
      ],
      chart: {
        height: 350,
        type: "heatmap",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        heatmap: {
          enableShades: false,

          colorScale: {
            ranges: [
              {
                from: 0,
                to: 10,
                name: "0-10",
                color: "#b9b3f8",
              },
              {
                from: 11,
                to: 20,
                name: "10-20",
                color: "#aba4f6",
              },
              {
                from: 21,
                to: 30,
                name: "20-30",
                color: "#9d95f5",
              },
              {
                from: 31,
                to: 40,
                name: "30-40",
                color: "#8f85f3",
              },
              {
                from: 41,
                to: 50,
                name: "40-50",
                color: "#8176f2",
              },
              {
                from: 51,
                to: 60,
                name: "50-60",
                color: "#7367f0",
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: "bottom",
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    };
  }

  ngOnInit(): void {}

  // Heatmap data generate
  public generateHeatmapData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }
}
