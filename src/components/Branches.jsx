import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Headphones,
  Briefcase,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Branches() {
  const branches = ["Latur", "Solapur", "Nanded", "Parbhani"];

  const contactDetails = [
    {
      icon: <MapPin size={20} />,
      title: "Address",
      lines: [
        "39, Panchganga Road, Lingshetti Mangal Karyalay,",
        "Kasturba Market, Solapur - 413002",
      ],
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      lines: ["info@moderntskill.in", "Career@modernskill.in"],
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      lines: ["02382-251493", "9421091262", "9921529402"],
    },
  ];

  const departments = [
    {
      icon: <GraduationCap size={19} />,
      title: "Course Enquiries",
      description:
        "For course enquiries, placement opportunities, or CSR project partnerships, feel free to reach out to us.",
      phone: "02382-251493 / 7038899526",
      accent: "blue",
    },
    {
      icon: <HeartHandshake size={19} />,
      title: "CSR Project Partnerships",
      description:
        "Connect with our team to discuss CSR partnerships and skill development initiatives.",
      phone: "02382-251493 / 8275465060",
      accent: "red",
    },
    {
      icon: <Briefcase size={19} />,
      title: "Placement Opportunities",
      description:
        "For placement opportunities and industry connections, get in touch with our placement team.",
      phone: "02381-251493 / 9921529402",
      accent: "blue",
    },
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
                Contact & Locations
              </span>
            </div>

            <SectionHeading
              title="Connect With Modern Technical Institute"
              description="Find our locations, contact details, and dedicated teams for courses, placements, and CSR partnerships."
            />
          </div>

          <p className="hidden text-xs font-medium text-gray-400 md:block">
            Locations • Support • Opportunities
          </p>
        </div>

        {/* Branches */}
        <div className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
                Our Presence
              </p>

              <h3 className="mt-1 text-lg font-bold text-gray-900">
                Branch Locations
              </h3>
            </div>

            <MapPin
              size={20}
              className="hidden text-brand-blue sm:block"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {branches.map((branch) => (
              <span
                key={branch}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                {branch}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-10 grid gap-5 md:grid-cols-3">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                {item.icon}
              </div>

              <h3 className="mb-3 text-base font-bold text-gray-900">
                {item.title}
              </h3>

              <div className="space-y-1">
                {item.lines.map((line, lineIndex) => (
                  <p
                    key={lineIndex}
                    className="text-xs leading-5 text-gray-500"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Helpline */}
        <div className="mb-10 rounded-2xl bg-brand-blue p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                <Headphones size={21} />
              </div>

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
                  Skill Helpline
                </p>

                <a
                  href="tel:9421091262"
                  className="text-xl font-bold text-white hover:text-blue-100"
                >
                  9421091262
                </a>

                <p className="mt-1 max-w-xl text-xs leading-5 text-blue-100">
                  Course enquiries, placement opportunities, and CSR project
                  partnerships.
                </p>
              </div>
            </div>

            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-brand-blue transition-colors hover:bg-gray-100"
            >
              Contact Us
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Departments */}
        <div className="mb-10">
          <div className="mb-6">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
              Get In Touch
            </p>

            <h3 className="text-xl font-bold text-gray-900">
              Dedicated Support
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {departments.map((dept, index) => {
              const isRed = dept.accent === "red";

              return (
                <div
                  key={index}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={`mb-5 flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                      isRed
                        ? "bg-red-50 text-brand-red group-hover:bg-brand-red group-hover:text-white"
                        : "bg-blue-50 text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
                    }`}
                  >
                    {dept.icon}
                  </div>

                  <h3 className="mb-2 text-base font-bold text-gray-900">
                    {dept.title}
                  </h3>

                  <p className="mb-6 flex-grow text-xs leading-5 text-gray-500">
                    {dept.description}
                  </p>

                  <div className="flex items-center gap-2 border-t border-gray-100 pt-4">
                    <Phone
                      size={13}
                      className={
                        isRed ? "text-brand-red" : "text-brand-blue"
                      }
                    />

                    <a
                      href={`tel:${dept.phone.split(" / ")[0]}`}
                      className="text-xs font-semibold text-gray-600 hover:text-brand-blue"
                    >
                      {dept.phone}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Have a question?
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Our team is ready to help you find the right opportunity.
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-blue-900"
          >
            Contact Now
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
