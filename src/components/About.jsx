import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";
import VisionMission from "./VisionMission";

export default function About() {
  return (
    <section className="min-h-screen py-10">
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">

        {/* About */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Content */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              About Us
            </p>

            <h1 className="text-4xl font-black leading-[1.05] text-brand-blue sm:text-5xl lg:text-[52px]">
              MODERN
              <br />
              <span className="text-brand-red">TECHNICAL</span>
              <br />
              INSTITUTE
            </h1>

            <div className="mt-5 h-1 w-12 rounded-full bg-brand-blue" />

            <p className="mt-5 text-sm font-semibold leading-6 text-gray-500">
              Initiated By —{" "}
              <span className="text-gray-800">
                MAHALAXMI BAHUUDESHIY SANSTA, Solapur
              </span>
            </p>

            <div className="mt-5 max-w-xl space-y-4 text-sm leading-6 text-gray-600">
              <p>
                MTI is a vocational training institute in Solapur,
                Maharashtra, working across various technical fields to
                provide practical and career-focused education.
              </p>

              <p>
                Modern Technical Institute has established skill development
                and vocational training centers in urban and rural areas,
                offering government-approved courses and training in various
                technical trades.
              </p>
            </div>

            <Link
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
            >
              Explore More
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[320px] overflow-hidden rounded-2xl border border-gray-200 shadow-lg sm:h-[380px] lg:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
                alt="Modern Technical Institute Training"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Simple information card */}
            <div className="absolute bottom-5 left-5 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <p className="text-xs font-bold text-brand-blue">
                    Govt. Approved
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Registered Institute
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-5 top-5 flex items-center gap-2 rounded-xl bg-brand-blue px-4 py-3 text-white shadow-lg">
              <GraduationCap size={19} />
              <span className="text-xs font-semibold">
                Skill Development
              </span>
            </div>
          </div>
        </div>

        {/* Vision / Mission */}
        <div className="mt-8">
          <VisionMission />
        </div>

      </div>
    </section>
  );
}
