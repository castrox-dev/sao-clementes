import { Hero } from "@/components/sections/hero";
import { History } from "@/components/sections/history";
import { NextCarnival } from "@/components/sections/next-carnival";
import { Store } from "@/components/sections/store";
import { Events } from "@/components/sections/events";
import { Membership } from "@/components/sections/membership";

import { News } from "@/components/sections/news";
import { Sponsors } from "@/components/sections/sponsors";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <History />
      <NextCarnival />
      <Store />
      <Events />
      <Membership />
      <News />
      <Sponsors />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
