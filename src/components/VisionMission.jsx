import { Target, Eye, CheckCircle2, Award } from "lucide-react";

export default function VisionMission() {
  const badges = ["80G Certified", "12AA", "CSR-1", "NGO-Darpan"];

  return (
    <div className="w-full">

      {/* Vision & Mission */}
      <div className="grid gap-5 md:grid-cols-2">

        {/* Vision */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-md">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
              <Eye size={23} strokeWidth={2} />
            </div>

            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                Our Vision
              </p>

              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Empowering Through Skills
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                To provide sustainable livelihood to unemployed youth and
                women through vocational education and skill development.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-red-200 hover:shadow-md">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-brand-red">
              <Target size={23} strokeWidth={2} />
            </div>

            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red">
                Our Mission
              </p>

              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Practical Education for All
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                To provide skill training and hands-on practical education
                to students across urban and rural areas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance */}
      <div className="mt-5 rounded-2xl bg-brand-blue px-6 py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
              <Award size={21} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-white">
                Trusted & Compliant Organization
              </h3>

              <p className="mt-1 text-xs text-blue-100">
                Registered under the Society Registration Act, 1860
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white"
              >
                <CheckCircle2 size={12} />
                {badge}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
