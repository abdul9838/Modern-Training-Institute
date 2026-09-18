import Link from "next/link";

export default function Hero() {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  ];

  return (
    <section className="relative flex h-[calc(100vh-64px)] min-h-[600px] items-center overflow-hidden">
      {/* Carousel */}
      <style>{`
        @keyframes heroCarousel {
          0%, 27% {
            opacity: 1;
          }
          33%, 94% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .hero-slide {
          animation: heroCarousel 15s infinite ease-in-out;
        }

        .hero-slide:nth-child(1) {
          animation-delay: 0s;
        }

        .hero-slide:nth-child(2) {
          animation-delay: 5s;
        }

        .hero-slide:nth-child(3) {
          animation-delay: 10s;
        }
      `}</style>

      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="hero-slide absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}

        {/* Clean readability overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/50 to-brand-blue/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-1 w-9 rounded-full bg-brand-red" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Vocational Training Institute
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Building Skills,
            <br />
            <span className="text-blue-100">
              Empowering Futures.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base md:text-lg md:leading-7">
            Modern Technical Institute provides practical vocational education
            and skill development training designed to create meaningful
            employment and entrepreneurship opportunities.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-900/20"
            >
              Explore Courses
            </Link>

            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-brand-blue"
            >
              About MTI
            </Link>
          </div>

          {/* Trust Information */}
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6">
            <div>
              <p className="text-sm font-bold text-white">
                Skill Development
              </p>
              <p className="mt-0.5 text-[11px] text-blue-200">
                Practical & Industry Focused
              </p>
            </div>

            <div className="hidden h-8 w-px bg-white/15 sm:block" />

            <div>
              <p className="text-sm font-bold text-white">
                Urban & Rural Reach
              </p>
              <p className="mt-0.5 text-[11px] text-blue-200">
                Training Opportunities
              </p>
            </div>

            <div className="hidden h-8 w-px bg-white/15 sm:block" />

            <div>
              <p className="text-sm font-bold text-white">
                Career Focused
              </p>
              <p className="mt-0.5 text-[11px] text-blue-200">
                Employment & Entrepreneurship
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 sm:flex">
        {backgroundImages.map((_, index) => (
          <span
            key={index}
            className="h-1 w-8 rounded-full bg-white/40"
          />
        ))}
      </div>
    </section>
  );
}
