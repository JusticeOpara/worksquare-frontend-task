import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

// Types and Interfaces
interface FilterOption {
  value: string;
  label: string;
}

interface FilterConfig {
  key: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  options: FilterOption[];
  placeholder?: string;
  variant?: "default" | "primary";
}

interface SearchFilters {
  [key: string]: string;
}

interface SearchBarProps {
  filters: FilterConfig[];
  defaultValues?: SearchFilters;
  onSearch: (filters: SearchFilters) => void;
  searchButtonText?: string;
  className?: string;
  showDividers?: boolean;
}

// Dropdown Component
const FilterDropdown: React.FC<{
  filter: FilterConfig;
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ filter, value, onChange, isOpen, onToggle }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const selectedOption = filter.options.find(
    (option) => option.value === value
  );
  const IconComponent = filter.icon;
  const isPrimary = filter.variant === "primary";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className={`flex items-center gap-3 rounded-xl px-4 py-3 min-w-[200px] transition-all duration-200 ${
          isPrimary
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "hover:bg-gray-50"
        }`}
      >
        <div
          className={`rounded-lg p-2 ${
            isPrimary ? "bg-white bg-opacity-20" : "bg-blue-500 bg-opacity-20"
          }`}
        >
          <IconComponent
            size={20}
            className={isPrimary ? "text-white" : "text-blue-600"}
          />
        </div>
        <div className="text-left flex-1">
          <div
            className={`font-light text-base ${
              isPrimary ? "text-white" : "text-gray-900"
            }`}
          >
            {filter.label}
          </div>
          
          <div
            className={`text-sm truncate ${
              isPrimary ? "text-blue-100" : "text-gray-500"
            }`}
          >
            {selectedOption?.label || filter.placeholder || "Select..."}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 bg-white rounded-xl shadow-lg border z-20 min-w-full max-h-60 overflow-y-auto">
          {filter.options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                onToggle();
              }}
              className={`block w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                value === option.value
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Search Bar Component
const SearchBar: React.FC<SearchBarProps> = ({
  filters,
  defaultValues = {},
  onSearch,
  searchButtonText = "Search",
  showDividers = true,
}) => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>(() => {
    const initialFilters: SearchFilters = {};
    filters.forEach((filter) => {
      initialFilters[filter.key] =
        defaultValues[filter.key] || filter.options[0]?.value || "";
    });
    return initialFilters;
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleFilterChange = (key: string, value: string) => {
    setSearchFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const handleSearch = () => {
    onSearch(searchFilters);
    setOpenDropdown(null);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 bg-white rounded-2xl border border-gray-300 p-2 w-full">
      
      {filters.map((filter, index) => (
        <React.Fragment key={filter.key}>
          <FilterDropdown
            filter={filter}
            value={searchFilters[filter.key]}
            onChange={(value) => handleFilterChange(filter.key, value)}
            isOpen={openDropdown === filter.key}
            onToggle={() => toggleDropdown(filter.key)}
          />
          {showDividers && index < filters.length - 1 && (
            <div className="hidden md:block w-px h-12 bg-gray-500" />
          )}
        </React.Fragment>
      ))}

      <button
        onClick={handleSearch}
        className="flex items-center gap-2 bg-blue-500 text-white rounded-xl px-6 py-3 font-semibold hover:bg-blue-600 transition-colors ml-auto min-w-[120px] justify-center"
      >
        <span>{searchButtonText}</span>
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
