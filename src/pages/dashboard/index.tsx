import { Section } from '@starboard-ventures/design.ui.section';
import { Echarts } from '@starboard-ventures/design.ui.echarts';
import { User, Home } from '@starboard-ventures/design.ui.icons';

export default () => {
  const option1 = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  };

  const option2 = {
    title: '',
    dataset: [
      {
        source: [
          ['Product', 'Sales', 'Price', 'Year'],
          ['Cake', 123, 32, 2011],
          ['Cereal', 231, 14, 2011],
          ['Tofu', 235, 5, 2011],
          ['Dumpling', 341, 25, 2011],
          ['Biscuit', 122, 29, 2011],
          ['Cake', 143, 30, 2012],
          ['Cereal', 201, 19, 2012],
          ['Tofu', 255, 7, 2012],
          ['Dumpling', 241, 27, 2012],
          ['Biscuit', 102, 34, 2012],
          ['Cake', 153, 28, 2013],
          ['Cereal', 181, 21, 2013],
          ['Tofu', 395, 4, 2013],
          ['Dumpling', 281, 31, 2013],
          ['Biscuit', 92, 39, 2013],
          ['Cake', 223, 29, 2014],
          ['Cereal', 211, 17, 2014],
          ['Tofu', 345, 3, 2014],
          ['Dumpling', 211, 35, 2014],
          ['Biscuit', 72, 24, 2014],
        ],
      },
      {
        transform: {
          type: 'filter',
          config: { dimension: 'Year', value: 2011 },
        },
      },
      {
        transform: {
          type: 'filter',
          config: { dimension: 'Year', value: 2012 },
        },
      },
      {
        transform: {
          type: 'filter',
          config: { dimension: 'Year', value: 2013 },
        },
      },
    ],
    series: [
      {
        type: 'pie',
        radius: 150,
        center: ['50%', '25%'],
        datasetIndex: 1,
      },
      {
        type: 'pie',
        radius: 150,
        center: ['50%', '50%'],
        datasetIndex: 2,
      },
      {
        type: 'pie',
        radius: 150,
        center: ['50%', '75%'],
        datasetIndex: 3,
      },
    ],

    // Optional. Only for responsive layout:
    media: [
      {
        query: { minAspectRatio: 1 },
        option: {
          series: [
            { center: ['25%', '50%'] },
            { center: ['50%', '50%'] },
            { center: ['75%', '50%'] },
          ],
        },
      },
      {
        option: {
          series: [
            { center: ['50%', '25%'] },
            { center: ['50%', '50%'] },
            { center: ['50%', '75%'] },
          ],
        },
      },
    ],
  };

  const option3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    legend: {
      data: ['Evaporation', 'Precipitation', 'Temperature'],
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Precipitation',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value} ml',
        },
      },
      {
        type: 'value',
        name: 'Temperature',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} °C',
        },
      },
    ],
    series: [
      {
        name: 'Evaporation',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value: string) {
            return value + ' ml';
          },
        },
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
      },
      {
        name: 'Precipitation',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value: string) {
            return value + ' ml';
          },
        },
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        name: 'Temperature',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value: string) {
            return value + ' °C';
          },
        },
        data: [
          2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
        ],
      },
    ],
  };

  return (
    <>
      <Section icon={<User />} title={'Bar Title'} sub={'sub tit'}>
        <div style={{ height: 450 }}>
          <Echarts option={option1} />
        </div>
      </Section>
      <div style={{ marginTop: 20 }}>
        <Section icon={<Home />} title={'Pie Title'} sub={'sub tit'}>
          <div style={{ height: 450 }}>
            <Echarts option={option2} />
          </div>
        </Section>
      </div>
      <div style={{ marginTop: 20 }}>
        <Section icon={<Home />} title={'Complex Title'} sub={'sub tit'}>
          <div style={{ height: 550 }}>
            <Echarts option={option3} />
          </div>
        </Section>
      </div>
    </>
  );
};
