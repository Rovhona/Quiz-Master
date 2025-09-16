import { categories } from '@/data/questions';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CategorySelectorProps {
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
  className?: string;
}

export const CategorySelector = ({ 
  selectedCategory, 
  onCategorySelect, 
  className 
}: CategorySelectorProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-lg font-semibold text-foreground">Choose Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Card
            key={category.id}
            className={cn(
              "cursor-pointer transition-all duration-200 hover:scale-105",
              selectedCategory === category.id 
                ? "bg-gradient-primary shadow-glow ring-2 ring-primary" 
                : "hover:bg-muted/80 hover:shadow-lg"
            )}
            onClick={() => onCategorySelect(category.id)}
          >
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">{category.icon}</div>
              <h4 className={cn(
                "font-medium text-sm mb-1",
                selectedCategory === category.id 
                  ? "text-primary-foreground" 
                  : "text-foreground"
              )}>
                {category.name}
              </h4>
              <p className={cn(
                "text-xs",
                selectedCategory === category.id 
                  ? "text-primary-foreground/80" 
                  : "text-muted-foreground"
              )}>
                {category.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};