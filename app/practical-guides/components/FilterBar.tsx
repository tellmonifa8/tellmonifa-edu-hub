'use client';

import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  selectedCategory: string;
  selectedDuration: string;
  selectedDifficulty: string;
  onCategoryChange: (category: string) => void;
  onDurationChange: (duration: string) => void;
  onDifficultyChange: (difficulty: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const FilterBar = ({
  selectedCategory,
  selectedDuration,
  selectedDifficulty,
  onCategoryChange,
  onDurationChange,
  onDifficultyChange,
  onClearFilters,
  hasActiveFilters,
}: FilterBarProps) => {
  const categories = [
    'All Topics',
    'Stress Management',
    'Anxiety Relief',
    'Study Skills',
    'Sleep & Rest',
    'Social Connection',
    'Self-Care',
  ];

  const durations = [
    'Any Duration',
    'Under 5 min',
    '5-15 min',
    '15-30 min',
    '30+ min',
  ];

  const difficulties = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-heading font-semibold text-foreground flex items-center gap-2">
          <Icon
            name="FunnelIcon"
            size={20}
            className="text-primary"
          />
          Filter Guides
        </h2>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth focus-ring rounded-md px-2 -mx-2"
          >
            <Icon
              name="XMarkIcon"
              size={16}
            />
            Clear All
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="category-filter"
            className="caption text-muted-foreground mb-2 block"
          >
            Topic Area
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
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
            htmlFor="duration-filter"
            className="caption text-muted-foreground mb-2 block"
          >
            Time Commitment
          </label>
          <select
            id="duration-filter"
            value={selectedDuration}
            onChange={(e) => onDurationChange(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
          >
            {durations.map((duration) => (
              <option
                key={duration}
                value={duration}
              >
                {duration}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="difficulty-filter"
            className="caption text-muted-foreground mb-2 block"
          >
            Difficulty Level
          </label>
          <select
            id="difficulty-filter"
            value={selectedDifficulty}
            onChange={(e) => onDifficultyChange(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
          >
            {difficulties.map((difficulty) => (
              <option
                key={difficulty}
                value={difficulty}
              >
                {difficulty}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
