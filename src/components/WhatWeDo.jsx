import SectionHeading from "./SectionHeading";
import {
  Briefcase,
  Wrench,
  Stethoscope,
  HeartHandshake,
  Lightbulb,
  Factory,
  Phone,
} from "lucide-react";

export default function WhatWeDo() {
  const programs = [
    {
      icon: <HeartHandshake size={19} />,
      title: "CSR-led Skill Development Programs",
      description:
        "MTI undertakes and implements placement-linked skill development training projects as per partner requirements under CSR initiatives, focusing on education, employment, and livelihood enhancement for underprivileged youth and women.",
      phone: "9421091262",
    },
    {
      icon: <Lightbulb size={19} />,
      title: "Entrepreneurship Development Programs",
      description:
        "Candidates interested in starting their own businesses can receive practical entrepreneurship training through MTI's Entrepreneurship Development Program.",
      phone: "9421091262",
    },
    {
      icon: <Factory size={19} />,
      title: "Technical Training Solutions for Industry",
      description:
        "MTI offers customized industry-focused training to improve workforce competency and productivity, including training need analysis, content development, delivery, and certification.",
      phone: "9421091262",
    },
  ];

  const domainTags = [
    "Electronics",
    "Electrical",
    "Smart Phone",
    "Telecom",
    "Automotive",
    "AC / Ref",
    "Fashion Design",
    "Mechanical",
    "IT",
    "Healthcare",
    "Apparel",
    "Beauty & Wellness",
    "Lab Technician",
    "OT Technician",
    "Nursing Assistant",
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-8 rounded-full bg-brand-red" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                What We Do
              </span>
            </div>

            <SectionHeading
              title="Building Skills for Better Opportunities"
              description="Modern Technical Institute delivers vocational education, practical skill training, entrepreneurship programs, and industry-focused solutions across urban and rural communities."
            />
          </div>

          <p className="hidden text-xs font-medium text-gray-400 md:block">
            Skills • Training • Employment
          </p>
        </div>

        {/* Main Training Section */}
        <div className="mb-10 grid overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Content */}
          <div className="p-7 md:p-10">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white">
                <Briefcase size={20} />
              </div>

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-brand-red">
                  Core Program
                </p>

                <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                  Vocational Education & Skill Training
                </h3>
              </div>
            </div>

            <p className="mb-7 text-sm leading-6 text-gray-600 md:text-base">
              MTI has established skill development and vocational training
              centers in urban and rural areas, providing government-approved
              training across technical, healthcare, and service-oriented
              domains.
            </p>

            {/* Domains */}
            <div className="mb-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                Training Domains
              </p>

              <div className="flex flex-wrap gap-2">
                {domainTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-gray-600 transition-colors hover:border-brand-blue hover:text-brand-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-brand-red">
                  <Wrench size={16} />
                </div>

                <div>
                  <h4 className="mb-1 text-xs font-bold text-gray-900">
                    Technical Trades
                  </h4>

                  <p className="text-[11px] leading-5 text-gray-500">
                    Practical training across modern technical fields.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-brand-red">
                  <Stethoscope size={16} />
                </div>

                <div>
                  <h4 className="mb-1 text-xs font-bold text-gray-900">
                    Healthcare Programs
                  </h4>

                  <p className="text-[11px] leading-5 text-gray-500">
                    Training for healthcare and assistant-level roles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex min-h-[320px] items-center justify-center border-t border-gray-200 bg-white p-8 lg:border-l lg:border-t-0">
            <img
              src="https://modernskill.in/wp-content/uploads/2025/01/rb_24586.png"
              alt="Vocational training at Modern Technical Institute"
              className="h-auto max-h-[350px] w-full max-w-md object-contain"
            />
          </div>
        </div>

        {/* Programs Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
              Our Services
            </p>

            <h3 className="text-xl font-bold text-gray-900">
              Specialized Training Programs
            </h3>
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <article
              key={index}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                {program.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-base font-bold leading-snug text-gray-900">
                {program.title}
              </h3>

              {/* Description */}
              <p className="mb-6 flex-grow text-sm leading-6 text-gray-600">
                {program.description}
              </p>

              {/* Phone */}
              <div className="flex items-center gap-2 border-t border-gray-100 pt-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-brand-red">
                  <Phone size={13} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                    Skill Helpline
                  </p>

                  <a
                    href={`tel:${program.phone}`}
                    className="text-xs font-bold text-brand-blue hover:text-brand-red"
                  >
                    {program.phone}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
