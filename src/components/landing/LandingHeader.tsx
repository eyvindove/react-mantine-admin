'use client';

import { Group, Text } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

export default function LandingHeader() {
  return (
    <Group h='100%' px='sm'>
      <MantineLogo type='mark' color='gray' style={{ height: 28 }} />
      <Text fw={700}>React Mantine Admin</Text>
    </Group>
  );
}
