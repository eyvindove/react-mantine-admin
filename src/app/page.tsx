import Link from 'next/link';
import { Button, Flex, Text, Space, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import LandingWrapper from '@/components/landing/LandingWrapper';

export default function AppHomePage() {
  return (
    <LandingWrapper>
      <Flex
        direction='column'
        justify='center'
        align='center'
        gap='md'
        my={120}
      >
        <Title order={1}>React Mantine Admin</Title>
        <Text size='md' c='dimmed'>
          A React Mantine Admin Playground.
        </Text>

        <Space h='md' />

        <Button
          component={Link}
          href='/dashboard'
          rightSection={<IconArrowRight size={16} />}
        >
          Try It
        </Button>
      </Flex>
    </LandingWrapper>
  );
}
