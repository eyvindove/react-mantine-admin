'use client';

import { Burger, Group, Text } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import AppCurrentUser from '../generic/AppCurrentUser';
import AppColorSchemeToggler from '../generic/AppColorSchemeToggler';
import AppSettings from '../generic/AppSettings';

export default function AdminHeader({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {
  return (
    <Group justify='space-between' h='100%' px='sm'>
      <Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
        <MantineLogo type='mark' color='gray' style={{ height: 28 }} />
        <Text fw={700}>React Mantine Admin</Text>
      </Group>

      <Group gap='xs'>
        <AppCurrentUser />
        <AppColorSchemeToggler />
        <AppSettings />
      </Group>
    </Group>
  );
}
