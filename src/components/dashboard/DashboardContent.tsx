import { Stack } from '@mantine/core';
import DashboardMonitorContent from './monitor/DashboardMonitorContent';
import DashboardOverallContent from './overall/DashboardOverallContent';
import DashboardReportContent from './report/DashboardReportContent';
import DashboardCard from './DashboardCard';

export default function DashboardContent() {
  return (
    <Stack>
      <DashboardCard title='Monitor'>
        <DashboardMonitorContent />
      </DashboardCard>
      <DashboardCard title='Overall'>
        <DashboardOverallContent />
      </DashboardCard>
      <DashboardCard title='Report'>
        <DashboardReportContent />
      </DashboardCard>
    </Stack>
  );
}
