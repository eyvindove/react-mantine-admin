'use client';

import { AppShell } from '@mantine/core';
import LandingHeader from './LandingHeader';

export default function LandingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell header={{ height: 48 }}>
      <AppShell.Header>
        <LandingHeader />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
