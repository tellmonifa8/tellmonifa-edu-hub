import Icon from '@comp/ui/AppIcon';

interface EmptyStateProps {
  onClearFilters: () => void;
}

const EmptyState = ({ onClearFilters }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
        <Icon
          name="MagnifyingGlassIcon"
          size={40}
          className="text-muted-foreground"
        />
      </div>

      <h3 className="text-xl font-heading font-semibold text-foreground mb-3 text-center">
        No Guides Found
      </h3>

      <p className="text-muted-foreground text-center mb-6 max-w-md">
        We couldn't find any guides matching your current filters. Try adjusting
        your search criteria or clearing all filters.
      </p>

      <button
        onClick={onClearFilters}
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-smooth hover-lift press-effect focus-ring"
      >
        <Icon
          name="ArrowPathIcon"
          size={20}
        />
        Clear All Filters
      </button>
    </div>
  );
};

export default EmptyState;
