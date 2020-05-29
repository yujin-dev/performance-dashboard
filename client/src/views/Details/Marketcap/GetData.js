import React, { Component, lazy, Suspense } from 'react';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const Widget03 = lazy(() => import('../../Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')


// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['2020/05/01', '2020/05/02', '2020/05/03','2020/05/04','2020/05/05','2020/05/06','2020/05/07','2020/05/08','2020/05/09','2020/05/10','2020/05/11','2020/05/12','2020/05/13','2020/05/14','2020/05/15','2020/05/16','2020/05/17','2020/05/18','2020/05/19','2020/05/20','2020/05/21','2020/05/22','2020/05/23','2020/05/24', 
],
  datasets: [
    {
      label: '총자산 대비',
      backgroundColor:'transparent',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      pointRadius: 2,
      borderWidth: 3,
      data: data1,
    },
    {
      label: '투자금 대비',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      pointRadius: 2,
      borderWidth: 3,
      data: data2,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
    position: "bottom"
  },
  scales: {
    xAxes: [
      {
        ticks: {
          padding: 10,
          labelOffset: 10,
          callback(value, index) {
             if (index % 2 == 0) return '';
             return value;
          },
        },
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};


export {
    mainChart, mainChartOpts, 
}