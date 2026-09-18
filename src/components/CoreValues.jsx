import { Handshake, Leaf, HeartHandshake, Lightbulb, Network, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function CoreValues() {
  const values = [
    {
      icon: <Handshake size={28} />,
      title: 'Commitment',
      description: 'Committed to deliver best multiple skill training to our students.',
    },
    {
      icon: <Leaf size={28} />,
      title: 'Integrity',
      description: 'Be ethical, transparent and honest in all our actions and interactions.',
    },
    {
      icon: <HeartHandshake size={28} />,
      title: 'Respect',
      description: 'Treat our students, teachers, staff, and customers with respect and humanity.',
    },
    {
      icon: <Lightbulb size={28} />,
      title: 'Innovation',
      description: 'Continuous innovation and empowerment in our training methodologies & procedures.',
    },
    {
      icon: <Network size={28} />,
      title: 'Responsibility',
      description: 'Responsible to all our stakeholders - students, industries and our society.',
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Potential',
      description: 'Enable the youth to utilize their full potential and have a successful career.',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
  <div className="max-w-2xl">
    <div className="mb-3 flex items-center gap-2">
      <span className="h-1.5 w-8 rounded-full bg-brand-red" />

      <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
        Our Core Values
      </span>
    </div>

    <SectionHeading
      title="The Principles That Drive Us"
      description="The foundation of Modern Technical Institute is built on values that empower our students, our team, and our community."
    />
  </div>

  <p className="hidden text-xs font-medium text-gray-400 md:block">
    Integrity • Excellence • Empowerment
  </p>
</div>


        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div 
              key={idx} 
              className="group bg-brand-lightGray p-8 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full transition-transform duration-500 group-hover:scale-125 -z-0"></div>
              
              {/* Icon Circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-brand-blue text-brand-blue flex items-center justify-center mb-6 shadow-sm transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue">
                {value.icon}
              </div>
              
              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-brand-blue mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}