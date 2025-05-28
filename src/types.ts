import type { IconType } from "react-icons";

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


 type FilterOption = {
  value: string;
  label: string;
};

 type FilterVariant = "default" | "primary";

 type FilterConfig = {
  key: string;
  label: string;
  icon: IconType;
  options: FilterOption[];
  placeholder: string;
  variant?: FilterVariant; // optional if you want to allow undefined
};

export type { PropertyProps, SearchFilters, FilterConfig };
