"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Wrench,
  Zap,
  Snowflake,
  Smartphone,
  Settings,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Courses() {
  const courses = [
    {
      title: "Automobile",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/istockphoto-1162113364-612x612-1.jpg",
      icon: Wrench,
    },
    {
      title: "Electrical",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/istockphoto-1499966321-612x612-1.jpg",
      icon: Zap,
    },
    {
      title: "AC & Refrigeration",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/istockphoto-1437896577-612x612-1.jpg",
      icon: Snowflake,
    },
    {
      title: "Electronics",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/istockphoto-1006169700-612x612-1.jpg",
      icon: Settings,
    },
    {
      title: "Mobile & Smartphone Repairing",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/istockphoto-1006169700-612x612-1.jpg",
      icon: Smartphone,
    },
    {
      title: "Pump Operator cum Mechanic",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/istockphoto-528339701-612x612-1.jpg",
      icon: Settings,
    },
    {
      title: "Turner Fitter",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/istockphoto-1206547992-612x612-1.jpg",
      icon: Wrench,
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const amount = scrollRef.current.clientWidth * 0.8;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-8 rounded-full bg-brand-red" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                Learn & Grow
              </span>
            </div>

            <SectionHeading
              title="Our Courses"
              description="Explore government-approved vocational training programs designed to build practical skills and create better career opportunities."
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous courses"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-brand-blue transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Next courses"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-brand-blue transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>

        {/* Courses */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-5 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <article
                key={index}
                className="group min-w-[280px] snap-start overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl sm:min-w-[320px] lg:min-w-[350px]"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="350px"
                  />

                  <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white/95 text-xs font-bold text-brand-blue shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-brand-red">
                        Vocational Training
                      </p>

                      <h3 className="text-lg font-bold leading-snug text-gray-900">
                        {course.title}
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                      <Icon size={19} />
                    </div>
                  </div>

                  <Link
                    href="#"
                    className="group/link inline-flex items-center gap-2 text-xs font-bold text-brand-blue"
                  >
                    View Course

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 transition-all group-hover/link:bg-brand-blue group-hover/link:text-white">
                      <ArrowUpRight size={13} />
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-7 sm:flex-row">
          <p className="text-xs text-gray-500">
            Practical training designed for real-world skills.
          </p>

          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-xs font-bold text-white transition-all hover:bg-blue-900"
          >
            View All Courses
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
