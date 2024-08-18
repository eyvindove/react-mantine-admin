'use client';

import { useEffect, useState } from 'react';
import {
  useMantineColorScheme,
  useComputedColorScheme,
  ActionIcon,
} from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export default function AppColorSchemeToggler() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <ActionIcon
      variant='default'
      onClick={() =>
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
      }
    >
      {computedColorScheme === 'light' && <IconSun size={16} />}
      {computedColorScheme === 'dark' && <IconMoon size={16} />}
    </ActionIcon>
  );
}
