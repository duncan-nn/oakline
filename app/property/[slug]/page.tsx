// import Features from "@/components/sections/Features";
// import CTAFooter from "@/components/sections/CTAFooter";
import PropertyGallery from "@/components/features/PropertyGallery";
import FAQ from "@/components/sections/FAQ";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import HomeHero from "@/components/sections/HomeHero";
import Inquiry from "@/components/sections/Inquiry";
import PricingDetails from "@/components/sections/PricingDetails";
import PropertyDetails from "@/components/sections/PropertyDetails";
import PropertyHero from "@/components/sections/PropertyHero";
import Testimonials from "@/components/sections/Testimonials";
import { formatPrice } from "@/lib/util";
import { getAllPropertyTypes, getPropertyBySlug } from "@/lib/wordpress/queries";
import WhatsAppWidget from "@/components/common/WhatsAppWidget";
// import Image from "next/image";

export default async function Property({ params, }: {params: Promise<{slug: string}>;}) {
  const slug = (await params).slug;
  const property = await getPropertyBySlug(slug);
  console.log(property);
  const property_types = await getAllPropertyTypes();
  if (!property) { return <div>Property not found</div> }

  const featuredImage = property._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const photo_gallery = [
    ...(featuredImage ? [featuredImage] : []),

    ...(property.meta_box?.property_gallery?.map(
      (image) => image.full_url
    ) || []),
  ];

  return (
    <div className="page">
      <div className="section-no-padding">
        <div className="container-no-padding">
            <PropertyHero
                title={property.title.rendered}
                location={`${property.acf.city}, ${property.acf.state}`}
                price={formatPrice(property.acf.price)}
            />
            <div className="container-04">
              <PropertyGallery
                images={photo_gallery}
              />
            </div>
        </div>
      </div>
      <div className="section-03">
        <div className="container-main">
          <PropertyDetails 
          property={property}
          property_types={property_types} />
        </div>
      </div>
      <div className="section-main">
        <div className="container-main">
          <Inquiry property={property} />
        </div>
      </div>
      <div className="section-main">
        <div className="container-main">
          <PricingDetails property={property}/>
        </div>
      </div>
      <div className="section-main">
        <div className="container-main">
          <FAQ />
        </div>
      </div>
      <WhatsAppWidget 
      propertySlug={property.slug}/>
    </div>
  );
}
