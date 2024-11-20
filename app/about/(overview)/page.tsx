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
        About
      </h1>
      <div className="flex flex-col justify-center">
      <img src="https://storage.googleapis.com/images420/baileysSocialEquityDesc.webp" />
      <div style={{fontSize:'2vw',fontFamily:'Alfa Slab One',
      paddingTop:'20px',paddingBottom:'20px'}}>
        If you or your immediate family suffered or are suffering persecution
        from the war on drugs and you are looking to enter the legal cannabis
        industry in MA, we highly recommend that you look into the 
        <a href="https://masscannabiscontrol.com/equity-programs/" target="_blank">
           Cannabis Control Commission's Social Equity Program
        </a>
      </div>
      <div style={{fontSize:'2vw',fontFamily:'Alfa Slab One'}}>
        If you are already a Social Equity Program Participant with the CCC
        and you are interested in getting a tour of the Bailey's Buds facility
        and learning more about Cannabis Licensing and Cultivation in MA, then
        please send an email to info@baileysbuds.com. We are here as a resource
        to you, to help craft cannabis and social equity flourish!
      </div>
      <img src="https://storage.googleapis.com/images420/winteryDam.webp" />
      <div style={{width:'100%',fontSize:'2vw',fontFamily:'Alfa Slab One'}}>
        We bought a dilapidated mill & took it down to the studs to create a state of the art weed factory.
      </div>
      <div style={{width:'100%',fontSize:'2vw',fontFamily:'Alfa Slab One'}}>
        Built in 1900, it replaced a previous mill on the site that burned down.  With top notch sprinkler systems installed, that won’t happen again, but the mill will soon be facilitating a different kind of burning.
      </div>
      <div style={{width:'100%',fontSize:'2vw',fontFamily:'Alfa Slab One'}}>
        Overlooking scenic Beaver Brook in Dracut, Massachusetts there’s no better place to grow!
      </div>
      </div>
    </main>
  );
}
