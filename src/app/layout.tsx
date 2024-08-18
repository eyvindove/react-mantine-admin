import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/notifications/styles.css';
import '@/styles/globals.css';

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React Mantine Admin',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <ColorSchemeScript defaultColorScheme='auto' />
        <MantineProvider defaultColorScheme='auto'>
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
