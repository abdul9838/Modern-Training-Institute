import About from '@/components/About';
import Branches from '@/components/Branches';
import CoreValues from '@/components/CoreValues';
import Courses from '@/components/Courses';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import WhatWeDo from '@/components/WhatWeDo';

export default function Page() {
  return (
    <main className="bg-white [&>*:nth-child(even)]:bg-brand-lightGray [&>*:nth-child(odd)]:bg-white">
      <Hero />
      <About />
      <Courses />
      <Partners />
      <CoreValues />
      <Team />
      <Testimonials />
      <WhatWeDo />
      <Branches />
    </main>
  );
}