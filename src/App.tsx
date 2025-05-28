import { useEffect, useState } from "react";
import "./App.css";
import PropertyCard from "./components/PropertyCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import PropertyToggle from "./components/Toggle";
import { propertySearchFilters } from "./constant";
import Footer from "./components/Footer";
import axios from "axios";

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

function App() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [propertyType, setPropertyType] = useState("buy");
  console.log(propertyType, "--propertyType");

  interface SearchFilters {
    [key: string]: string;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/contents/home.json");

        setProperties(response.data);
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
    // Handle search logic here
  };

  const defaultValues = {
    propertyType: "house",
    location: "laderin",
    priceRange: "250k-350k",
  };
  return (
    <>
      <Navbar />
      <div className="px-48 space-y-12">
        <PropertyToggle
          defaultValue="buy"
          onChange={(value) => {
            setPropertyType(value);
            console.log("Selected:", value);
          }}
        />

        <SearchBar
          filters={propertySearchFilters}
          defaultValues={defaultValues}
          onSearch={handleSearch}
          searchButtonText="Search"
          showDividers={true}
        />

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 ">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              status={property.status.map((s) => s)}
              price={property.price}
              priceUnit="Per Annum"
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              location={property.location}
              title={property.title}
              imageUrl={property.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
