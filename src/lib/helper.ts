import type { PropertyProps } from "../types";

export const filterByPriceRange = (
  properties: PropertyProps[],
  priceRange: string
) => {
  if (priceRange === "all") return properties;

  const ranges = {
    "0-1m": { min: 0, max: 1000000 },
    "1m-2m": { min: 1000000, max: 2000000 },
    "2m-3m": { min: 2000000, max: 3000000 },
    "3m-5m": { min: 3000000, max: 5000000 },
    "5m+": { min: 5000000, max: Infinity },
  };

  const range = ranges[priceRange as keyof typeof ranges];
  if (!range) return properties;

  return properties.filter((property) => {
    // Extract numeric value from price string (₦2,500,000 -> 2500000)
    const priceValue = parseInt(property.price.replace(/[₦,]/g, ""));
    return priceValue >= range.min && priceValue < range.max;
  });
};


export const defaultValues = {
  propertyType: "all",
  location: "all",
  priceRange: "all",
};