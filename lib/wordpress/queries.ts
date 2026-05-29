import { Location, Property, PropertyType } from "@/lib/types";

const baseUrl = process.env.WORDPRESS_URL;

export async function getLocations(): Promise<Location[]> {
    const response = await fetch(`${baseUrl}/wp-json/wp/v2/locations`);
    const data = await response.json();
    return data;
}

export async function getAllProperties(): Promise<{properties: Property[], totalPages: number }> {
    const response = await fetch(`${baseUrl}/wp-json/wp/v2/properties?_embed`);
    // const response = await fetch(
    //     `${baseUrl}/wp-json/wp/v2/properties?_embed`,
    //     {
    //         headers: {
    //         Authorization:
    //             "Basic " +
    //             Buffer.from(
    //             `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
    //             ).toString("base64"),
    //         },
    //         cache: "no-store",
    //     }
    // );


    const properties = await response.json();
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') ?? '1');
    return { properties, totalPages };
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/properties?slug=${slug}`);
  const property = await response.json();
  return property[0];
}

export async function getAllPropertyTypes(): Promise<PropertyType[]> {
    const response = await fetch(`${baseUrl}/wp-json/wp/v2/property_types`);
    const data = await response.json();
    return data;
}