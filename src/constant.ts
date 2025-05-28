import { CiDollar } from "react-icons/ci";
import { LuChurch } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import type { FilterConfig } from "./types";

export const propertySearchFilters: FilterConfig[] = [
  {
    key: "propertyType",
    label: "Property Type",
    icon: LuChurch,
    options: [
      { value: "all", label: "All Types" },
      { value: "house", label: "House" },
      { value: "flat", label: "Flat" },
      { value: "duplex", label: "Duplex" },
      { value: "apartment", label: "Apartment" },
      { value: "terrace", label: "Terrace" },
      { value: "for-rent", label: "For Rent" },
      { value: "penthouse", label: "Penthouse" },
      { value: "shortlet", label: "Shortlet" },
      { value: "mansion", label: "Mansion" },
    ],
    placeholder: "Select property type",
    variant: "default",
  },
  {
    key: "location",
    label: "Location",
    icon: IoLocationSharp,
    options: [
      { value: "all", label: "All Locations" },
      { value: "lekki", label: "Lekki, Lagos" },
      { value: "ikeja", label: "Ikeja, Lagos" },
      { value: "banana", label: "Banana Island, Lagos" },
      { value: "lokogoma", label: "Lokogoma, Abuja" },
      { value: "Osapa", label: "Osapa, Lekki" },
      { value: "gwarinpa", label: "Gwarinpa, Abuja" },
      { value: "laderin", label: "Laderin" },
      { value: "lagos", label: "Lagos" },
      { value: "abuja", label: "Abuja" },
    ],
    placeholder: "Select location",
    variant: "default",
  },
  {
    key: "priceRange",
    label: "Price Range",
    icon: CiDollar,
    // variant: "primary" as const,
    options: [
      { value: "all", label: "All Prices" },
      { value: "0-1m", label: "₦0 - ₦1M" },
      { value: "1m-2m", label: "₦1M - ₦2M" },
      { value: "2m-3m", label: "₦2M - ₦3M" },
      { value: "3m-5m", label: "₦3M - ₦5M" },
      { value: "5m+", label: "₦5M+" },
    ],
    placeholder: "Select price range",
    variant: "primary",
  },
];
