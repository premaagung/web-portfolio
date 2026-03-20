import { profile } from "@/data/profile";
import { Mail, MapPin, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
  website: ExternalLink,
};

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200 group"
              >
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-0.5">Email</p>
                  <p className="font-medium text-slate-900 group-hover:text-blue-700 transition-colors">
                    {profile.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-transparent">
                <div className="p-3 bg-slate-200 text-slate-600 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-0.5">Location</p>
                  <p className="font-medium text-slate-900">{profile.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-transparent">
                <div className={`p-3 rounded-lg ${
                  profile.availability === "available" 
                    ? "bg-green-100 text-green-600" 
                    : profile.availability === "open-to-offers"
                    ? "bg-amber-100 text-amber-600"
                    : "bg-red-100 text-red-600"
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    profile.availability === "available" 
                      ? "bg-green-500 animate-pulse" 
                      : profile.availability === "open-to-offers"
                      ? "bg-amber-500"
                      : "bg-red-500"
                  }`} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-0.5">Availability</p>
                  <p className="font-medium text-slate-900">
                    {profile.availability === "available" 
                      ? "Open for new opportunities" 
                      : profile.availability === "open-to-offers"
                      ? "Open to offers"
                      : "Currently unavailable"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Connect Card */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Connect Online
            </h3>
            
            <div className="space-y-3">
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.platform] || ExternalLink;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 text-slate-600 rounded-md group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="font-medium text-slate-900">
                        {social.label}
                      </span>
                    </div>
                    <ExternalLink 
                      size={16} 
                      className="text-slate-400 group-hover:text-blue-600 transition-colors" 
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-sm text-slate-600 mb-4">
                Prefer to schedule a meeting? Pick a time that works for you.
              </p>
              <a
                href={`mailto:${profile.email}?subject=Meeting Request&body=Hi, I'd like to schedule a meeting to discuss...`}
                className="block w-full py-3 px-4 bg-slate-900 text-white text-center rounded-lg font-medium hover:bg-slate-800 transition-colors duration-200"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>

        {/* Response Time Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            I typically respond within 24-48 hours. For urgent inquiries, 
            please mention "URGENT" in the subject line.
          </p>
        </div>
      </div>
    </section>
  );
}