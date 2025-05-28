import { CiDollar } from "react-icons/ci";
import { LuChurch } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
export const propertySearchFilters = [
  {
    key: "propertyType",
    label: "Property Type",
    icon: LuChurch,
    options: [
      { value: "house", label: "House" },
      { value: "apartment", label: "Apartment" },
      { value: "condo", label: "Condo" },
      { value: "townhouse", label: "Townhouse" },
      { value: "villa", label: "Villa" },
    ],
  },
  {
    key: "location",
    label: "Location",
    icon: IoLocationSharp,
    options: [
      { value: "laderin", label: "Laderin, Abeokuta" },
      { value: "ibara", label: "Ibara, Abeokuta" },
      { value: "oke-ilewo", label: "Oke-Ilewo, Abeokuta" },
      { value: "isale-igbein", label: "Isale-Igbein, Abeokuta" },
      { value: "lekki", label: "Lekki, Lagos" },
      { value: "victoria-island", label: "Victoria Island, Lagos" },
    ],
  },
  {
    key: "priceRange",
    label: "Price Range",
    icon: CiDollar,
    // variant: "primary" as const,
    options: [
      { value: "100k-200k", label: "₦ 100,000 - ₦ 200,000" },
      { value: "250k-350k", label: "₦ 250,000 - ₦ 350,000" },
      { value: "400k-500k", label: "₦ 400,000 - ₦ 500,000" },
      { value: "600k+", label: "₦ 600,000+" },
      { value: "1m+", label: "₦ 1,000,000+" },
    ],
  },
];


