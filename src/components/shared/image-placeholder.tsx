import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ImagePlaceholder({
  icon: Icon,
  label,
  className,
}: {
  icon?: LucideIcon;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-secondary',
        className
      )}
    >
      {Icon && <Icon className="size-10 text-foreground/40" strokeWidth={1.5} />}
    </div>
  );
}
