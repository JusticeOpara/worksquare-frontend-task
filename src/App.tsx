import { useEffect, useState } from "react";
import PropertyCard from "./components/PropertyCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import PropertyToggle from "./components/Toggle";
import { propertySearchFilters } from "./constant";
import Footer from "./components/Footer";
import axios from "axios";
import LoadingSpinner from "./components/LoadingSpinner";
import type { PropertyProps, SearchFilters } from "./types";
import { defaultValues, filterByPriceRange } from "./lib/helper";
import "./App.css";

function App() {
  const [allProperties, setAllProperties] = useState<PropertyProps[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/content/listings.json");

        setAllProperties(response.data);
        setFilteredProperties(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleSearch = (filters: SearchFilters) => {
    console.log("Searching with filters:", filters);

    let filtered = [...allProperties];

    // Filter by location if specified
    if (filters.location && filters.location !== "all") {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by property type if specified
    if (filters.propertyType && filters.propertyType !== "all") {
      filtered = filtered.filter((property) =>
        property.status.some(
          (status) =>
            status.toLowerCase() === filters.propertyType.toLowerCase()
        )
      );
    }

    // Filter by price range if specified
    if (filters.priceRange && filters.priceRange !== "all") {
      filtered = filterByPriceRange(filtered, filters.priceRange);
    }

    setFilteredProperties(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="lg:px-52 space-y-12 p-4 my-14">
        <PropertyToggle defaultValue="buy" />

        <SearchBar
          filters={propertySearchFilters}
          defaultValues={defaultValues}
          onSearch={handleSearch}
          searchButtonText="Search"
          showDividers={true}
        />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {filteredProperties.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-500 text-lg mb-2">
                  No properties found
                </div>
                <p className="text-gray-400">
                  Try adjusting your search filters
                </p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-4">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    status={property.status.map((s) => s)}
                    price={property.price}
    
                    bedrooms={property.bedrooms}
                    bathrooms={property.bathrooms}
                    location={property.location}
                    title={property.title}
                    imageUrl={property.image}
                  />
                ))}
              </div>
            )}
          </>
        )}
        
      </div>

      <Footer />
    </>
  );
}

export default App;
