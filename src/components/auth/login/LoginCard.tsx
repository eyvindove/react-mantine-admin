import { Card, Stack, Text } from '@mantine/core';
import LoginForm from './LoginForm';

export default function LoginCard() {
  return (
    <Stack>
      <Card withBorder miw={360} padding='lg'>
        <Stack align='center' gap={0} my='md'>
          <Text c='dimmed' fw={700}>
            React Mantine Admin
          </Text>
          <Text fz='xl' fw={700}>
            Login
          </Text>
        </Stack>

        <LoginForm />
      </Card>
    </Stack>
  );
}
