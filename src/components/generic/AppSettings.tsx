'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ActionIcon, Menu } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconSettings, IconLogout } from '@tabler/icons-react';

export default function AppSettings() {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  function handleLogout() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      notifications.show({
        title: 'Logout is successful.',
        message: 'Hope you come back soon.',
      });
      router.push('/');
    }, 500);
  }

  if (!show) return null;

  return (
    <Menu>
      <Menu.Target>
        <ActionIcon variant='default' loading={isLoading}>
          <IconSettings size={16} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<IconSettings size={16} />}>Settings</Menu.Item>
        <Menu.Item
          leftSection={<IconLogout size={16} />}
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
