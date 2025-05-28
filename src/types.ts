interface PropertyProps {
  id: number;
  price: string;
  bedrooms: number;
  bathrooms: number;
  location: string;
  title: string;
  status: string[];
  image: string;
}

interface SearchFilters {
  [key: string]: string;
}
export type { PropertyProps, SearchFilters };
