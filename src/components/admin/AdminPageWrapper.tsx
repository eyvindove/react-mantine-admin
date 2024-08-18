import { Title } from '@mantine/core';

export default function AdminPageWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Title order={4} mb='sm'>
        {title}
      </Title>

      {children}
    </>
  );
}
