'use client';

import { useMemo } from 'react';
import { Badge, Card, Group, NumberFormatter, Text } from '@mantine/core';

export default function DashboardMonitorCard({ data }: { data: MonitorData }) {
  function calculateRange(key: MonitorDataRange) {
    if (!data[key]) return false;

    return data[key].find((item) => {
      if (item[0] === null || item[1] === null) return false;

      return item[0] <= data.value && item[1] >= data.value;
    });
  }

  const isGood = useMemo(() => calculateRange('good'), [data]);
  const isNormal = useMemo(() => calculateRange('normal'), [data]);
  const isBad = useMemo(() => calculateRange('bad'), [data]);

  return (
    <Card
      withBorder
      h={'100%'}
      style={{
        borderBottomWidth: 5,
        borderBottomStyle: 'solid',
        borderBottomColor: isGood
          ? 'green'
          : isNormal
            ? 'gray'
            : isBad
              ? 'red'
              : 'gray',
      }}
    >
      <Group justify='space-between'>
        <Group gap='xs'>
          {data.icon}

          <Text c='dimmed' fw={500}>
            {data.label}
          </Text>
        </Group>

        {isGood ? (
          <Badge color='green'>Good</Badge>
        ) : isNormal ? (
          <Badge color='gray'>Normal</Badge>
        ) : isBad ? (
          <Badge color='red'>Bad</Badge>
        ) : null}
      </Group>

      <Group pos='relative' justify='center' align='baseline'>
        <Text
          fz={36}
          fw={700}
          c={isGood ? 'green' : isNormal ? '' : isBad ? 'red' : ''}
        >
          {data.numberFormatter ? (
            <NumberFormatter value={data.value} thousandSeparator />
          ) : (
            data.value
          )}
        </Text>
      </Group>

      <Group justify='center'>
        <Text c='dimmed' fz='sm'>
          {data.unit}
        </Text>
      </Group>
    </Card>
  );
}
