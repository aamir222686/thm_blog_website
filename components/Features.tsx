import { Code, Rocket, Brain } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'No-Code Creation',
    description: 'Build complex AI agents without writing a single line of code',
  },
  {
    icon: Rocket,
    title: 'Instant Deployment',
    description: 'Deploy your bots across multiple platforms with one click',
  },
  {
    icon: Brain,
    title: 'Advanced Intelligence',
    description: 'Powered by state-of-the-art language models and learning algorithms',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#5200ff]/30 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#5200ff]/10 group-hover:bg-[#5200ff]/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-[#5200ff]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#5200ff] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}