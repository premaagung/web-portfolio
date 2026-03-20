import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterProps {
  name?: string;
  tagline?: string;
  links?: FooterLink[];
  socials?: SocialLink[];
  copyrightYear?: number;
}

const defaultLinks: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const defaultSocials: SocialLink[] = [
  {
    platform: "GitHub",
    href: "https://github.com",
    icon: <Github size={20} />,
  },
  {
    platform: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin size={20} />,
  },
  {
    platform: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter size={20} />,
  },
  {
    platform: "Email",
    href: "mailto:hello@example.com",
    icon: <Mail size={20} />,
  },
];

export function Footer({
  name = "Agung Prema's Web Portfolio",
  tagline = "Building digital experiences that matter.",
  links = defaultLinks,
  socials = defaultSocials,
  copyrightYear = new Date().getFullYear(),
}: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
                  aria-label={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {copyrightYear} {name}. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Built with{" "}
              <span className="text-slate-400">Next.js</span> &{" "}
              <span className="text-slate-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}