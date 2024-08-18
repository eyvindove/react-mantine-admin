import { Card, Center, Stack, Text } from '@mantine/core';

export default function DashboardOverallCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card withBorder h={'100%'}>
      <Stack>
        <Text c='dimmed' fw={500}>
          {title}
        </Text>
        <Center>{children}</Center>
      </Stack>
    </Card>
  );
}
