import Image from "next/image";
import Link from "next/link";

const icons = {
  graduation: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12.5V16c3.5 2.5 8.5 2.5 12 0v-3.5" />
      <path d="M22 10v6" />
    </svg>
  ),

  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M13.5 22v-8h2.75l.4-3h-3.15V9.08c0-.87.24-1.46 1.5-1.46h1.78V4.94c-.31-.04-1.38-.14-2.62-.14-2.59 0-4.36 1.58-4.36 4.48V11H7v3h2.8v8h3.7Z" />
    </svg>
  ),

  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.37l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.82h1.73L8.2 4.08H6.34L17.8 19.82Z" />
    </svg>
  ),

  instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-[18px] h-[18px]"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),

  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M5.2 3.2A2.2 2.2 0 1 1 5.2 7.6a2.2 2.2 0 0 1 0-4.4ZM3.3 8.9h3.8V21H3.3V8.9Zm6.2 0H13v1.65h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.69 2.6 4.69 5.98V21h-3.8v-5.75c0-1.37-.03-3.13-1.91-3.13-1.91 0-2.2 1.49-2.2 3.03V21H9.5V8.9Z" />
    </svg>
  ),

  mail: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[18px] h-[18px]"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),

  phone: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[18px] h-[18px]"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 5.18 2 2 0 0 1 4.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 10.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),

  location: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[18px] h-[18px]"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "Career", href: "#" },
    { name: "Courses", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const socialLinks = [
    { icon: icons.facebook, href: "#", label: "Facebook" },
    { icon: icons.twitter, href: "#", label: "Twitter" },
    { icon: icons.instagram, href: "#", label: "Instagram" },
    { icon: icons.linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="#">
              <Image
                src="/images/logo.webp"
                alt="Modern Training Institute"
                width={100}
                height={100}
                className="h-auto w-24 object-contain"
                priority
              />
            </Link>

            <p className="text-blue-200 text-sm leading-relaxed mb-6">
             MTI is Vocational Training Institute Solapur & Latur, Maharashtra, which is initiated by Mahalaxmi Multipurpose Society Solapur. MTI is Govt. Recognized  Institute working with variable verticals in technical fields.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-brand-red shrink-0 mt-0.5">
                  {icons.location}
                </span>

                <span className="text-blue-200 text-sm">
                  39, Panchganga Road, Lingshetti Mangal Karyalay, Kasturba
                  Market, Solapur - 413002
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-brand-red shrink-0">{icons.phone}</span>

                <span className="text-blue-200 text-sm">
                  <a href="tel:+919421091262">+91 9421091262</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-red shrink-0">{icons.phone}</span>

                <span className="text-blue-200 text-sm">
                  02382-251493
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-brand-red shrink-0">{icons.mail}</span>

                <span className="text-blue-200 text-sm">
                  <a href="mailto:info@modernskill.in">info@modernskill.in</a>
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>

            <p className="text-blue-200 text-sm mb-4">
              Subscribe to get the latest updates and tips.
            </p>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-blue-200 focus:outline-none focus:border-brand-red"
              />

              <button
                type="submit"
                className="bg-brand-red hover:bg-red-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-xs">
            © 2026 Modern Training Institute. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-blue-200 hover:text-white text-xs transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-blue-200 hover:text-white text-xs transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
