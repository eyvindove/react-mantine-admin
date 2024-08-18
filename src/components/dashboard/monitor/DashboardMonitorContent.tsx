'use client';

import { useEffect, useState } from 'react';
import { Grid } from '@mantine/core';
import {
  IconBolt,
  IconRosetteDiscountCheck,
  IconUniverse,
  IconThumbUp,
} from '@tabler/icons-react';
import DashboardMonitorCard from './DashboardMonitorCard';

const UPDATE_INTERVAL = 3000;

const initialMonitorData: MonitorData[] = [
  {
    id: 'consumption',
    label: 'Power Consumption',
    value: 1039,
    unit: 'Watts',
    icon: <IconBolt size={16} color='gray' />,
    numberFormatter: true,
  },
  {
    id: 'available',
    label: 'Available',
    value: 61,
    unit: '%',
    icon: <IconRosetteDiscountCheck size={16} color='gray' />,
    good: [[90, 100]],
    normal: [[80, 90]],
    bad: [[0, 80]],
  },
  {
    id: 'coverage',
    label: 'Coverage',
    value: 60,
    unit: '%',
    icon: <IconUniverse size={16} color='gray' />,
    good: [[90, 100]],
    normal: [[60, 90]],
    bad: [[0, 60]],
  },
  {
    id: 'rank',
    label: 'Rank',
    value: 4,
    unit: 'stars',
    icon: <IconThumbUp size={16} color='gray' />,
    good: [[4, 5]],
    normal: [[3, 3]],
    bad: [[1, 2]],
  },
];

export default function DashboardMonitorContent() {
  const [data, setData] = useState(initialMonitorData);

  function getRandomInteger(max: number) {
    return Math.floor(Math.random() * max + 1);
  }

  function updateData() {
    setData((prevData) => {
      return [
        { ...prevData[0], value: prevData[0].value + getRandomInteger(100) },
        {
          ...prevData[1],
          value: 50 + getRandomInteger(50),
        },
        {
          ...prevData[2],
          value: 50 + getRandomInteger(50),
        },
        { ...prevData[3], value: getRandomInteger(5) },
      ];
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateData();
    }, UPDATE_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Grid>
      {data.map((data) => (
        <Grid.Col key={data.id} span={{ base: 6, md: 3 }}>
          <DashboardMonitorCard data={data} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
