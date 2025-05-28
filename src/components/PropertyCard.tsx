import React from "react";
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";

interface PropertyCardProps {
  id?: string;
  status?: string[];
  price: string;
  bedrooms: number;
  bathrooms: number;
  location: string;
  title: string;
  imageUrl: string;
  className?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  status,
  price,
  bedrooms,
  bathrooms,
  location,
  title,
  imageUrl,
  className = "",
}) => {
  return (
    <div
      className={`rounded-2xl shadow hover:shadow-lg overflow-hidden max-w-2xl ${className}`}
    >
      <div className="flex flex-col lg:flex-row justify-center p-6 md:space-x-6 space-y-2">
        <div className="relative lg:w-1/2">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-64 lg:h-full object-cover rounded-2xl"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1570129477492-45c003edd2be";
            }}
          />

          <div className="absolute top-4 right-4 flex gap-2">
            <span className="bg-white/90  text-gray-800 px-3 py-1 rounded-full text-sm font-light">
              {/* {status}   */}
              {status?.join(' | ')}
            </span>
            
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="mb-4">
            <div className="text-3xl lg:text-4xl text-gray-900 mb-1">
              {price}
            </div>
            <div className="text-gray-500">Per Annum</div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-gray-700">
              <IoIosBed size={16} />

              <span className="text-xs">{bedrooms} Bedroom</span>
            </div>
            <div className="flex items-center justify-center text-gray-700">
              <GiBathtub size={16}/>
              <span className="text-xs">{bathrooms} Bathroom</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaLocationDot size={16}/>
              <span className="text-xs">{location}</span>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-lg text-gray-900 leading-tight">{title}</h2>
          </div>

          <button className="bg-blue-500 text-white font-semibold py-4 px-6 rounded-lg flex items-center gap-3 self-start">
            View
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
