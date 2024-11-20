import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Sign Up
      </h1>
      <div className="flex flex-col justify-center text-center">
        
        <div>
          Sign up for the Bailey's Buds Brigade in order to get exclusive member benefits:
        </div>
        <a style={{fontWeight: 'bold', color: 'purple'}} href="https://docs.google.com/forms/d/e/1FAIpQLSdoFGD9_5-BZxm34frTD3EuQNvN3BC6IK-i4a6W8Zjaq7SCMw/viewform" target="_blank">
           Click here to sign up for the Bailey's Buds Brigade
        </a>
        <div style={{paddingTop:'10vh'}}>
          Reach us by email: info@baileysbuds.com
        </div>
        <div>
          Reach us by phone: (978) 276-9024
        </div>
      </div>
    </main>
  );
}
