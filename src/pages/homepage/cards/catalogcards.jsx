import {
  BookOpen,
  Code,
  Brain,
  Target,
  TrendingUp,
  Briefcase,
  Paintbrush,
  Camera,
  Music,
  Lightbulb,
  Users,
  Star,
  ShieldCheck,
  Globe
} from "lucide-react";
import * as Icons from "lucide-react";

const icons = {
  BookOpen,
  Code,
  Target,
  Brain,
  TrendingUp,
  Briefcase,
  Paintbrush,
  Camera,
  Music,
  Lightbulb,
  Users,
  Star,
  ShieldCheck,
  Globe
};

// Reusable Icon component
const Icon = ({ name, ...props }) => {
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
};

function CatalogCard({ category, description, icon, index }) {
  // Gradients and corresponding shadow colors
  const gradients = [
    { gradient: "from-purple-600 to-blue-600", shadow: "rgba(147,51,234,0.6)" },
    { gradient: "from-pink-500 to-orange-500", shadow: "rgba(236,72,153,0.6)" },
    { gradient: "from-green-500 to-cyan-500", shadow: "rgba(34,197,94,0.6)" },
    { gradient: "from-yellow-500 to-red-500", shadow: "rgba(234,179,8,0.6)" },
    { gradient: "from-indigo-500 to-purple-700", shadow: "rgba(99,102,241,0.6)" },
    { gradient: "from-teal-400 to-blue-500", shadow: "rgba(45,212,191,0.6)" },
  ];

  const { gradient, shadow } = gradients[index % gradients.length];

  return (
    <div className="flex flex-col text-white">
      <div
        className={`max-w-sm p-8 bg-[#10131F] rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105`}
        style={{
          boxShadow: `0 0 25px 3px transparent`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 25px 5px ${shadow}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 25px 3px transparent`;
        }}
      >
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-16 h-16 mb-4 text-lg font-bold text-white rounded-xl shadow-md bg-gradient-to-b ${gradient}`}
          style={{ boxShadow: `0 0 15px 2px ${shadow}` }}
        >
          <Icon name={icon} size={28} />
        </div>

        {/* Category */}
        <h2
          className={`text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}
        >
          {category}
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base">{description}</p>
      </div>
    </div>
  );
}

export default CatalogCard;
