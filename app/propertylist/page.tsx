
import HeroSearch from "@/components/sections/HeroSearch";
import PropertyListing from "@/components/sections/PropertyListing";
import { getAllProperties, getAllPropertyTypes } from "@/lib/wordpress/queries";

export default async function PropertyList() {

  const data = await getAllProperties();
  const properties = data.properties;

  const property_types = await getAllPropertyTypes();
  //console.log(types_data);

  return (
    <div className="page">
      <div className="section-no-padding">
        <div className="container-no-padding">
          <HeroSearch />
        </div>
      </div>
      <div className="section-main">
        <div className="container-main">
          <PropertyListing 
          property_types={property_types}
          properties={properties}/>
        </div>
      </div>
    </div>
  );
}
