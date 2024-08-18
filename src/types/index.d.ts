import type { NavLinkProps } from '@mantine/core';

declare global {
  export interface NavbarItem extends NavLinkProps {
    label: string;
    href: string;
    children?: NavbarItem[];
  }

  export type MonitorDataRange = 'good' | 'normal' | 'bad';

  export interface MonitorData {
    id: string;
    label: string;
    value: number;
    unit?: string;
    icon?: React.ReactNode;
    numberFormatter?: boolean;
    good?: Array<[number, number]>;
    normal?: Array<[number, number]>;
    bad?: Array<[number, number]>;
  }

  export interface ReportData {
    code: string;
    position: string;
    status: string;
    description: string;
  }
}

export {};
