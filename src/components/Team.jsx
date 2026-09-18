import SectionHeading from "./SectionHeading";

const FacebookIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.55.45-1 1-1z" />
  </svg>
);

const TwitterIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const YoutubeIcon = ({ size = 17 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.498 6.186a2.996 2.996 0 0 0-2.11-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.388.566A2.996 2.996 0 0 0 .502 6.186C0 8.073 0 12 0 12s0 3.927.502 5.814a2.996 2.996 0 0 0 2.11 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.388-.566a2.996 2.996 0 0 0 2.11-2.12C24 15.927 24 12 24 12s0-3.927-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
  </svg>
);

const ArrowUpRightIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export default function Team() {
  const teamMembers = [
    {
      name: "Sunil Kumar Rameshrao",
      role: "Founder & Director",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/sunil.jpg",
      description:
        "Sunil Kumar Rameshrao Isad has been heading administration in MTI. He is a Post graduate of Amravati University and holds a Advance Training Institute Technology from Mumbai. He has 22+ years of experience in Automation technology, vocational education, and skill development. He has also worked on various skill development projects and brings extensive grassroots to managerial operational experience.",
    },
    {
      name: "Vijaya S Shekar",
      role: "Managing Director",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/vijya.jpg",
      description:
        "She is a member of Shivaji Shikshan Sansta, Amravati, and actively participates in social work. She is a postgraduate from Amravati University and has completed a healthcare diploma. With 10+ years of experience in social work and skill development projects, she focuses on empowering rural women and strengthening the MTI workforce.",
    },
    {
      name: "Mahaveer Rupnawar",
      role: "Co-Director",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/mahaveer.jpg",
      description:
        "Mahaveer Bajrang Rupnawar heads operations at MTI. He holds an IT qualification in Computer Technology and is a postgraduate from Solapur University. With 10+ years of experience in industrial and technical education, he has worked on various skill development projects and brings strong managerial and operational experience.",
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
                Leadership
              </span>
            </div>

            <SectionHeading
              title="Our Expert Team"
              description="Meet the dedicated leaders behind Modern Technical Institute, committed to skill development and meaningful career opportunities."
            />
          </div>  

          <p className="hidden text-xs font-medium text-gray-400 md:block">
            Leadership • Experience • Vision
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-[340px] overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Role Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-lg bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-brand-red shadow-md">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-brand-blue">
                    {member.role}
                  </p>
                </div>

                <p className="mb-6 text-sm leading-6 text-gray-600">
                  {member.description}
                </p>

                {/* Social */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Connect
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      aria-label={`${member.name} Facebook`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                    >
                      <FacebookIcon size={15} />
                    </a>

                    <a
                      href="#"
                      aria-label={`${member.name} Twitter`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                    >
                      <TwitterIcon size={14} />
                    </a>

                    <a
                      href="#"
                      aria-label={`${member.name} YouTube`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all hover:border-brand-red hover:bg-brand-red hover:text-white"
                    >
                      <YoutubeIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
