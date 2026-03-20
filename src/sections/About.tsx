import { profile, skills, experiences } from "@/data/profile";
import { SkillTabs } from "@/components/SkillTabs";
import { MapPin, Mail, Calendar, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {profile.shortBio}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Bio & Experience */}
          <div className="space-y-10">
            {/* Bio Card */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Background
              </h3>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {profile.about}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin size={16} className="text-blue-600" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail size={16} className="text-blue-600" />
                  {profile.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar size={16} className="text-blue-600" />
                  {experiences.filter(e => e.current).length > 0 ? "Open to opportunities" : "Not available"}
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                Experience
              </h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    {/* Timeline Marker */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    
                    {/* Content Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <h4 className="font-semibold text-slate-900">{exp.role}</h4>
                        {exp.current && (
                          <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-slate-600 mb-2">
                        {exp.company} • {exp.location}
                      </div>
                      <div className="text-xs text-slate-400 mb-3">
                        {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {" "}
                        {exp.current ? 'Present' : exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'N/A'}
                      </div>
                      <ul className="space-y-1">
                        {exp.achievements.slice(0, 2).map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 size={14} className="text-blue-600 mt-0.5 shrink-0" />
                            <span className="line-clamp-2">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Technical Skills
            </h3>
            <SkillTabs skills={skills} />
            
            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-medium text-blue-900 mb-2">
                Currently Learning
              </h4>
              <p className="text-sm text-blue-700">
                Advanced AI/ML integration patterns, Rust for systems programming, 
                and WebAssembly for high-performance web apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}