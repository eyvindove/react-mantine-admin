import Link from 'next/link';
import { Button, Center, Stack, Space, Text } from '@mantine/core';

export default function NotFoundPage() {
  return (
    <Center h='100dvh'>
      <Stack align='center'>
        <Text fz={60} fw={700}>
          404 Not Found
        </Text>
        <Text>{`Couldn't found resources.`}</Text>
        <Space my={16}></Space>
        <Button component={Link} href='/'>
          Return Home
        </Button>
      </Stack>
    </Center>
  );
}
