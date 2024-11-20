import VisitorSideNav from '@/app/ui/visitor-dashboard/VisitorSideNav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baileys Buds',
};

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/*<div className="w-full flex-none md:w-64">
        <VisitorSideNav />
      </div>*/}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
