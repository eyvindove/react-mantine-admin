'use client';

import { Table } from '@mantine/core';
import { reportData } from '../config';

export default function DashboardReportContent() {
  const rows = reportData.body.map((item) => (
    <Table.Tr key={item.code}>
      <Table.Td>{item.code}</Table.Td>
      <Table.Td>{item.position}</Table.Td>
      <Table.Td>{item.status}</Table.Td>
      <Table.Td>{item.description}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          {reportData.head.map((item) => (
            <Table.Th key={item}>{item}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
