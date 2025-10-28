import {
  BookOpen,
  Code,
  Brain,
  TrendingUp,
  Briefcase,
  Paintbrush,
  Camera,
  Music,
} from 'lucide-react';

const icons = {
  BookOpen,
  Code,
  Brain,
  TrendingUp,
  Briefcase,
  Paintbrush,
  Camera,
  Music,
};

const Icon = ({ name, ...props }) => {
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
};

const CategoryCard = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-5 bg-[#2c1f4a] rounded-xl w-28 md:w-32 text-center hover:border-2 hover:border-purple-600 transition-all duration-300 hover:bg-[#352657] hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
      {/* Icon background circle */}
      <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#4a3a6b] rounded-full mb-2">
        <Icon name={icon} className="w-6 h-6 md:w-7 md:h-7 text-purple-300" />
      </div>
      
      {/* Text Content */}
      <h3 className="text-white font-semibold text-sm md:text-base mb-0 truncate">{name}</h3>
    </div>
  );
};

export default CategoryCard;
