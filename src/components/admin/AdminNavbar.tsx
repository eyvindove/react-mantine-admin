import { Fragment } from 'react';
import { NavLink, Divider } from '@mantine/core';
import {
  IconGps,
  IconDashboard,
  IconLockAccess,
  IconTable,
  IconForms,
} from '@tabler/icons-react';

const navbarOptions: NavbarItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    leftSection: <IconDashboard size='16' />,
  },
  {
    label: 'Table',
    href: '/table',
    disabled: true,
    leftSection: <IconTable size='16' />,
  },
  {
    label: 'Form',
    href: '/form',
    disabled: true,
    leftSection: <IconForms size='16' />,
  },
  {
    label: 'Auth',
    href: '/',
    leftSection: <IconLockAccess size='16' />,
    children: [
      {
        label: 'Register',
        href: '/register',
        disabled: true,
      },
      {
        label: 'Login',
        href: '/login',
      },
    ],
  },
  {
    label: 'Landing Page',
    href: '/',
    leftSection: <IconGps size='16' />,
  },
];

export default function AdminNavbar() {
  return (
    <>
      {navbarOptions.map((option) => (
        <Fragment key={option.label}>
          <NavLink
            label={option.label}
            href={option.href}
            disabled={option.disabled}
            leftSection={option.leftSection}
            childrenOffset={28}
            defaultOpened
          >
            {option.children &&
              option.children.map((subOption) => (
                <NavLink
                  key={subOption.label}
                  label={subOption.label}
                  href={subOption.href}
                  disabled={option.disabled || subOption.disabled}
                />
              ))}
          </NavLink>
          <Divider my='xs' />
        </Fragment>
      ))}
    </>
  );
}
