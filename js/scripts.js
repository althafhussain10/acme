$(".box-video").on("click",function(){
  $('iframe',this)[0].src;
  $(this).addClass('open');
});

// Statistics Area Chart
           var options = {
          series: [{
          name: 'Products sold',
          data: [31, 40, 28, 51, 42, 109]
        }, {
          name: 'Total views',
          data: [11, 32, 45, 32, 34, 52],
        }],
          chart: {
          type: 'area',
           toolbar: {
              show: false
            },
        },
        colors: ['#B5B3FB', '#B0EAFF'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        };

        var chart = new ApexCharts(document.querySelector("#area-chart"), options);
        chart.render();

        // Sales Distribution Apex Charts
        let optionsNew = {
  series: [44, 55, 41, 60],
  labels: ["France", "Italy", "Japan", "Canada"],
  chart: {
    type: 'donut',
  },
  colors: ['#80E2FF', '#F49FA8', '#FFDF94', '#B5B3FB'],
  dataLabels: {
          enabled: false,
        },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            label: '',
            formatter: () => '230,900 Sales'
          }
        }
      }
    }
  },
legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'bottom',
      horizontalAlign: 'center', 
      floating: false,
      fontSize: '14px',
      fontWeight: 500,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
          colors: undefined,
          useSeriesColors: false
      },
      markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
      },
      itemMargin: {
          horizontal: 5,
          vertical: 0
      },
      onItemClick: {
          toggleDataSeries: true
      },
      onItemHover: {
          highlightDataSeries: true
      },
  }
};

const chartNew = new ApexCharts(document.querySelector("#donut-chart"), optionsNew);
chartNew.render();
