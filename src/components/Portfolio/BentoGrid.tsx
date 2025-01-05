import BentoItem from './BentoItem';
import { bentoItems } from './bentoData';

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {bentoItems.map((item, index) => (
        <BentoItem
          key={index}
          {...item}
          className={`rounded-2xl p-4 transition-all duration-300 ${item.className}`}
        />
      ))}
    </div>
  );
};

export default BentoGrid;