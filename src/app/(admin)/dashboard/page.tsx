import AdminWrapper from '@/components/admin/AdminWrapper';
import AdminPageWrapper from '@/components/admin/AdminPageWrapper';
import DashboardContent from '@/components/dashboard/DashboardContent';

export default function DashboardPage() {
  return (
    <AdminWrapper>
      <AdminPageWrapper title='Dashboard'>
        <DashboardContent />
      </AdminPageWrapper>
    </AdminWrapper>
  );
}
