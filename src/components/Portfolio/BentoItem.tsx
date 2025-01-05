import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface BentoItemProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
  rowSpan?: number;
  colSpan?: number;
  link?: string;
  gradient?: string;
}

const BentoItem = ({
  title,
  description,
  image,
  className,
  link,
  gradient,
}: BentoItemProps) => {
  return (
    <div
      className={cn(
        'group relative overflow-hidden bg-white/5 hover:bg-white/10',
        'transition-all duration-300 ease-in-out',
        className
      )}
    >
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className={cn(
            'absolute inset-0 bg-gradient-to-b',
            gradient || 'from-transparent to-black/60'
          )} />
        </div>
      )}

      <div className="relative z-10 h-full p-6 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          {link && (
            <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
          )}
        </div>
        <p className="text-sm text-white/80">{description}</p>
      </div>

      {link && (
        <a
          href={link}
          className="absolute inset-0 z-20"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title}`}
        />
      )}
    </div>
  );
};

export default BentoItem;