import { Card, Stack, Text } from '@mantine/core';

export default function DashboardCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <Stack>
        <Text>{title}</Text>
        {children}
      </Stack>
    </Card>
  );
}
