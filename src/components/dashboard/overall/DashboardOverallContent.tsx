'use client';

import { Grid } from '@mantine/core';
import { AreaChart, BarChart, PieChart } from '@mantine/charts';
import DashboardOverallCard from './DashboardOverallCard';
import { sourceData, currentStatusData, usageData } from '../config';

export default function DashboardOverallContent() {
  return (
    <>
      <Grid>
        <Grid.Col span={{ base: 6, md: 3 }}>
          <DashboardOverallCard title='Power Sources'>
            <PieChart
              data={sourceData}
              withTooltip
              withLabels
              labelsPosition='outside'
              labelsType='percent'
              size={120}
            />
          </DashboardOverallCard>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3 }}>
          <DashboardOverallCard title='Current Status'>
            <AreaChart
              h={200}
              data={currentStatusData}
              dataKey='time'
              series={[
                { name: 'max', color: 'red.5' },
                { name: 'current', color: 'blue.5' },
              ]}
              curveType='linear'
            />
          </DashboardOverallCard>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <DashboardOverallCard title='Power Usage'>
            <BarChart
              h={200}
              data={usageData}
              dataKey='month'
              series={[
                { name: 'Coal', color: 'orange.5' },
                { name: 'Nuclear', color: 'pink.5' },
                { name: 'Wind', color: 'lime.5' },
                { name: 'Solar', color: 'cyan.5' },
                { name: 'Others', color: '' },
              ]}
              tickLine='y'
            />
          </DashboardOverallCard>
        </Grid.Col>
      </Grid>
    </>
  );
}
