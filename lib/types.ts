export type Location = {
  id: number;
  count: number;
  slug: string;
  name: string;
}
export type PropertyType = {
    id: number;
    count: number;
    name: string;
    slug: string;
}

type AdditionalFee = [string, string, string];
type MonthlyCost = [string, string, string];

export type Property = {
    id: number;
    title: {
    rendered: string;
    };
    slug: string;
    date: string;
    modified: string;
    acf: {
      price: number;
      bedrooms: number;
      bathrooms: number;
      size: string;
      title_document: string;
      address: string;
      city: string;
      state: string;
    }
    content: {
    rendered: string;
    };
    excerpt: {
    rendered: string;
    }
    featured_media: number;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
        source_url: string;
        alt_text?: string;
        }>
    };
    property_types: number[];
    locations: number[];
    property_status: number[];
    property_purpose: number[];
    meta_box: {
        amenities: string[];
        additional_fees: AdditionalFee[];
        monthly_cost: MonthlyCost[];
        property_gallery: [
            {
                full_url: string;
            }
        ];
    }
}

export type WordPressPost = {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;

  _embedded?: {
    "wp:featuredmedia"?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details?: {
        width: number;
        height: number;
        sizes?: {
          thumbnail?: {
            source_url: string;
            width: number;
            height: number;
          };
          medium?: {
            source_url: string;
            width: number;
            height: number;
          };
          large?: {
            source_url: string;
            width: number;
            height: number;
          };
          full?: {
            source_url: string;
            width: number;
            height: number;
          };
        };
      };
    }>;
  };
};