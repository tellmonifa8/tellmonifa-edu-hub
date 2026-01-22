'use client';

import { useEffect, useState } from 'react';

import Icon from '@comp/ui/AppIcon';

interface SearchFiltersProps {
  onSearchChange: (query: string) => void;
  onTypeFilter: (type: string) => void;
  onCategoryFilter: (category: string) => void;
  onAudienceFilter: (audience: string) => void;
  activeFilters: {
    type: string;
    category: string;
    audience: string;
  };
}

const SearchFilters = ({
  onSearchChange,
  onTypeFilter,
  onCategoryFilter,
  onAudienceFilter,
  activeFilters,
}: SearchFiltersProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <div className="h-12 bg-muted rounded-md animate-pulse" />
      </div>
    );
  }

  const resourceTypes = ['All Types', 'PDF', 'Worksheet', 'Guide'];
  const categories = [
    'All Categories',
    'Academic Stress',
    'Anxiety Management',
    'Exam Preparation',
    'Crisis Support',
  ];
  const audiences = [
    'All Audiences',
    'Secondary Students',
    'University Students',
    'Parents & Guardians',
    'Educators',
  ];

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearchChange('');
  };

  const activeFilterCount = [
    activeFilters.type !== 'All Types',
    activeFilters.category !== 'All Categories',
    activeFilters.audience !== 'All Audiences',
  ].filter(Boolean).length;

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Icon
            name="MagnifyingGlassIcon"
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInput}
            placeholder="Search resources by title or description..."
            className="w-full pl-12 pr-12 py-3 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            aria-label="Search resources"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth focus-ring rounded-sm"
              aria-label="Clear search"
            >
              <Icon
                name="XMarkIcon"
                size={20}
              />
            </button>
          )}
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-md font-medium transition-smooth hover-lift press-effect focus-ring min-h-[48px]"
          aria-expanded={showFilters}
          aria-controls="filter-panel"
        >
          <Icon
            name="FunnelIcon"
            size={20}
          />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="inline-flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      <div
        id="filter-panel"
        className={`
          grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 transition-smooth
          ${showFilters ? 'block' : 'hidden lg:grid'}
        `}
      >
        <div>
          <label
            htmlFor="type-filter"
            className="block caption font-medium text-foreground mb-2"
          >
            Resource Type
          </label>
          <select
            id="type-filter"
            value={activeFilters.type}
            onChange={(e) => onTypeFilter(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
          >
            {resourceTypes.map((type) => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="category-filter"
            className="block caption font-medium text-foreground mb-2"
          >
            Topic Area
          </label>
          <select
            id="category-filter"
            value={activeFilters.category}
            onChange={(e) => onCategoryFilter(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="audience-filter"
            className="block caption font-medium text-foreground mb-2"
          >
            Target Audience
          </label>
          <select
            id="audience-filter"
            value={activeFilters.audience}
            onChange={(e) => onAudienceFilter(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
          >
            {audiences.map((audience) => (
              <option
                key={audience}
                value={audience}
              >
                {audience}
              </option>
            ))}
          </select>
        </div>
      </div>

      {activeFilterCount > 0 && (
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
          <span className="caption text-muted-foreground">Active filters:</span>
          <div className="flex flex-wrap gap-2">
            {activeFilters.type !== 'All Types' && (
              <button
                onClick={() => onTypeFilter('All Types')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-md caption font-medium transition-smooth hover:bg-primary/20 focus-ring"
              >
                <span>{activeFilters.type}</span>
                <Icon
                  name="XMarkIcon"
                  size={14}
                />
              </button>
            )}
            {activeFilters.category !== 'All Categories' && (
              <button
                onClick={() => onCategoryFilter('All Categories')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-md caption font-medium transition-smooth hover:bg-primary/20 focus-ring"
              >
                <span>{activeFilters.category}</span>
                <Icon
                  name="XMarkIcon"
                  size={14}
                />
              </button>
            )}
            {activeFilters.audience !== 'All Audiences' && (
              <button
                onClick={() => onAudienceFilter('All Audiences')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-md caption font-medium transition-smooth hover:bg-primary/20 focus-ring"
              >
                <span>{activeFilters.audience}</span>
                <Icon
                  name="XMarkIcon"
                  size={14}
                />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
