"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Direct SVG icons
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

const TelegramIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M21.9 3.4 2.6 10.8c-1.3.5-1.3 1.2-.2 1.5l4.9 1.5 1.9 5.8c.2.6.1.8.8.8.5 0 .7-.2 1-.4l2.4-2.3 5 3.7c.9.5 1.5.3 1.7-.8l3.3-15.6c.3-1.3-.5-1.9-1.5-1.5ZM8.1 13.5l10.8-6.8c.5-.3 1-.1.6.2l-8.8 7.9-.3 3.1-1.5-4.4-3.4-1.1c-.8-.2-.8-.6.1-.9l2.5-.9Z" />
  </svg>
);

const WhatsappIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.5 3.5A11.9 11.9 0 0 0 12.05 0C5.45 0 .08 5.37.08 11.97c0 2.11.55 4.17 1.59 5.98L0 24l6.19-1.62a11.9 11.9 0 0 0 5.86 1.53h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.24-6.2-3.53-8.44ZM12.06 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.67.96.98-3.58-.23-.37a9.87 9.87 0 0 1-1.51-5.26c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.12 1.03 6.99 2.89a9.82 9.82 0 0 1 2.9 7c0 5.46-4.45 9.9-9.95 9.9Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.3 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
  </svg>
);

export default function Testimonials() {
  const testimonials = [
    {
      name: "Gaurav Gopalkar",
      role: "Diploma in AC / Refrigeration",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-07-at-12.39.51-PM.jpeg",
      rating: 5,
      icon: <FacebookIcon size={16} />,
      text: "I have completed my Diploma in AC/Refrigeration from MTI. The course gave me valuable practical knowledge. After completing the course, I started my own business in Latur and now earn a good daily income. Thank you MTI for helping me build my career.",
    },
    {
      name: "Irfan Shaikh",
      role: "Mobile Repairing",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-07-at-12.39.51-PM.jpeg",
      rating: 0,
      icon: <TelegramIcon size={16} />,
      text: "I completed the Mobile Repairing course from MTI. Since the course focuses strongly on practical training, I was able to start my own mobile repairing shop soon after completing it. I am very satisfied with the course and grateful to MTI.",
    },
    {
      name: "Suchita Pawar",
      role: "Financial Accounting",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-07-at-12.39.51-PM.jpeg",
      rating: 0,
      icon: <WhatsappIcon size={16} />,
      text: "I successfully completed the Financial Accounting course at MTI. I was also placed through MTI's placement support. I am thankful to MTI for giving me this opportunity and helping me take the next step in my career.",
    },
    {
      name: "Prachi Kamble",
      role: "Financial Accounting",
      image:
        "https://modernskill.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-07-at-12.39.51-PM.jpeg",
      rating: 0,
      icon: <TwitterIcon size={16} />,
      text: "I successfully completed the Financial Accounting course at MTI. The training and placement support helped me move forward professionally. I am thankful to MTI for providing valuable learning and career opportunities.",
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
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-8 rounded-full bg-brand-red" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                Student Experiences
              </span>
            </div>

            <SectionHeading
              title="What Our Students Say"
              description="Hear directly from students about their training experience, practical learning, and career opportunities at Modern Technical Institute."
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-brand-blue transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-brand-blue transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-5 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="group flex min-w-[290px] snap-start flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl sm:min-w-[380px] md:min-w-[480px] lg:min-w-[540px]"
            >
              {/* Student */}
              <div className="mb-5 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 shrink-0 rounded-xl object-cover object-top ring-1 ring-gray-200"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-base font-bold text-gray-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 text-xs font-semibold text-brand-red">
                    {testimonial.role}
                  </p>

                  {testimonial.rating > 0 && (
                    <div className="mt-2 flex gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          fill={
                            i < testimonial.rating
                              ? "currentColor"
                              : "none"
                          }
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                  {testimonial.icon}
                </div>
              </div>

              {/* Quote */}
              <div className="border-t border-gray-100 pt-5">
                <p className="text-sm leading-6 text-gray-600">
                  “{testimonial.text}”
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Student Feedback
                </span>

                <span className="text-xs font-semibold text-brand-blue">
                  MTI
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
