import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        'group bg-secondary-light/5 p-8 rounded-lg',
        'transform hover:-translate-y-2 transition-all duration-300'
      )}
    >
      <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-secondary-light/80">{description}</p>
    </div>
  );
};

export default ServiceCard;