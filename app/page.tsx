// import Features from "@/components/sections/Features";
// import CTAFooter from "@/components/sections/CTAFooter";
import WhatsAppChat from "@/components/common/WhatsAppWidget";
import FAQ from "@/components/sections/FAQ";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import HomeHero from "@/components/sections/HomeHero";
import Testimonials from "@/components/sections/Testimonials";
// import Image from "next/image";
import { getAllProperties, getAllPropertyTypes } from "@/lib/wordpress/queries";


export default async function Home() {

  const data = await getAllProperties();
  const properties = data.properties;

  const property_types = await getAllPropertyTypes();

  return (
    <div className="page">
      <div className="section-no-padding">
        <div className="container-no-padding">
          <HomeHero />
        </div>
      </div>
      <div className="section-main">
        <div className="container-main">
          <FeaturedProperties 
          property_types={property_types}
          properties={properties}/>
        </div>
      </div>
      <div className="section-main">
        <div className="container-main">
          <Testimonials />
        </div>
      </div>
      <div className="section-main">
        <div className="container-main">
          <FAQ />
        </div>
      </div>
    </div>
  );
}
