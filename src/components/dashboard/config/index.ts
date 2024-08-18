import { type PieChartCell } from '@mantine/charts';

export const sourceData: PieChartCell[] = [
  {
    name: 'Coal',
    value: 9197.6,
    color: 'orange.5',
  },
  {
    name: 'Nuclear',
    value: 937,
    color: 'pink.5',
  },
  {
    name: 'Wind',
    value: 79.3,
    color: 'lime.5',
  },
  {
    name: 'Solar',
    value: 3309.3,
    color: 'cyan.5',
  },
  {
    name: 'Others',
    value: 21.2,
    color: 'gray.5',
  },
];

export const currentStatusData = [
  {
    time: '09:00',
    max: 8234,
    current: 6924,
  },
  {
    time: '10:00',
    max: 10534,
    current: 8347,
  },
  {
    time: '11:00',
    max: 11734,
    current: 9663,
  },
  {
    time: '12:00',
    max: 12002,
    current: 10823,
  },
  {
    time: '13:00',
    max: 13523,
    current: 11003,
  },
  {
    time: '14:00',
    max: 12998,
    current: 10983,
  },
];

export const usageData = [
  {
    month: 'Jan.',
    Coal: 9197.6,
    Nuclear: 937,
    Wind: 79.3,
    Solar: 3309.3,
    Others: 21.2,
  },
  {
    month: 'Feb.',
    Coal: 8453.2,
    Nuclear: 873,
    Wind: 63.1,
    Solar: 2854,
    Others: 16.8,
  },
  {
    month: 'Mar.',
    Coal: 8532.7,
    Nuclear: 882,
    Wind: 60.2,
    Solar: 2642,
    Others: 19.1,
  },
  {
    month: 'Apr.',
    Coal: 8234.2,
    Nuclear: 851,
    Wind: 73.4,
    Solar: 1942,
    Others: 12.9,
  },
  {
    month: 'May.',
    Coal: 9023.6,
    Nuclear: 853,
    Wind: 58.4,
    Solar: 2934,
    Others: 17.7,
  },
  {
    month: 'Jun.',
    Coal: 9123.5,
    Nuclear: 933,
    Wind: 68.8,
    Solar: 2858,
    Others: 17.3,
  },
];

export const reportData: { head: Array<string>; body: Array<ReportData> } = {
  head: ['Symbol', 'Position', 'Status', 'Description'],
  body: [
    {
      code: 'TP-01',
      position: 'Shihlin, Taipei',
      status: 'Good',
      description: 'Raining cats and dogs',
    },
    {
      code: 'TP-02',
      position: 'Yangminshan, Taipei',
      status: 'Bad',
      description: 'Heavy rain',
    },
    {
      code: 'TC-03',
      position: 'Western, Taichung',
      status: '-',
      description: 'Under construction',
    },
    {
      code: 'TC-05',
      position: 'Ataabu, Taichung',
      status: 'Good',
      description: '',
    },
    {
      code: 'TN-01',
      position: 'Guantian, Tainan',
      status: 'Warning',
      description: 'Cloudy',
    },
    {
      code: 'KH-02',
      position: 'Sinsing, Kaohsiung',
      status: 'Great',
      description: 'Sunny',
    },
  ],
};
