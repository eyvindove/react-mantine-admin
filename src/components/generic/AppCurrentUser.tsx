import { Avatar, Divider, Group, Text } from '@mantine/core';

export default function AppCurrentUser() {
  return (
    <Group gap='xs'>
      <Avatar size='sm' />
      <Text c='dimmed' size='xs'>
        user.name@mail.com
      </Text>
      <Divider orientation='vertical' />
    </Group>
  );
}
