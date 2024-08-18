'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Stack,
  TextInput,
} from '@mantine/core';
import { useForm, isEmail, hasLength } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface FormValues {
  email: string;
  password: string;
  termForPrivacy: boolean;
}

export default function LoginForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
      termForPrivacy: false,
    },
    validate: {
      email: isEmail('Invalid email'),
      password: hasLength({ min: 8 }, 'Must be at least 8 characters'),
      termForPrivacy: (value) =>
        value === true ? null : 'Please agree the privacy',
    },
  });

  function handleSubmit(values: FormValues) {
    console.log('-- submit values', values);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      notifications.show({
        title: 'Login is successful.',
        message: 'Hope you enjoy the time.',
      });
      router.push('/dashboard');
    }, 500);
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          withAsterisk
          label='Email'
          placeholder='your@email.com'
          disabled={isLoading}
          key={form.key('email')}
          {...form.getInputProps('email')}
        />

        <PasswordInput
          withAsterisk
          label='Password'
          placeholder='********'
          disabled={isLoading}
          key={form.key('password')}
          {...form.getInputProps('password')}
        />

        <Checkbox
          label='Agree privacy'
          key={form.key('termsOfService')}
          disabled={isLoading}
          {...form.getInputProps('termForPrivacy', { type: 'checkbox' })}
        />

        <Group justify='flex-end' mt='md'>
          <Button type='submit' loading={isLoading}>
            Submit
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
