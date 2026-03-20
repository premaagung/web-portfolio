"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skill } from "@/types";
import { 
  Brain, Database, MessageSquare, Zap, Code, FileCode, 
  Palette, Container, GitBranch, Cloud, Terminal, Table, 
  BarChart, Wrench, Layout, Box, Layers, Smartphone 
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={18} />,
  Database: <Database size={18} />,
  MessageSquare: <MessageSquare size={18} />,
  Zap: <Zap size={18} />,
  Code: <Code size={18} />,
  FileCode: <FileCode size={18} />,
  Palette: <Palette size={18} />,
  Container: <Container size={18} />,
  GitBranch: <GitBranch size={18} />,
  Cloud: <Cloud size={18} />,
  Terminal: <Terminal size={18} />,
  Table: <Table size={18} />,
  BarChart: <BarChart size={18} />,
  Wrench: <Wrench size={18} />,
  Layout: <Layout size={18} />,
  Box: <Box size={18} />,
  Layers: <Layers size={18} />,
  Smartphone: <Smartphone size={18} />,
};

interface SkillTabsProps {
  skills: Skill[];
}

export function SkillTabs({ skills }: SkillTabsProps) {
  const [activeCategory, setActiveCategory] = useState(skills[0]?.category || "");

  const activeSkills = skills.find((s) => s.category === activeCategory)?.items || [];

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <button
            key={skill.category}
            onClick={() => setActiveCategory(skill.category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === skill.category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {skill.category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {activeSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="p-2 bg-blue-50 text-blue-600 rounded-md">
                {iconMap[skill.icon || "Code"] || <Code size={18} />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-slate-900">{skill.name}</h4>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded ${
                      skill.level === "Expert"
                        ? "bg-green-100 text-green-700"
                        : skill.level === "Advanced"
                        ? "bg-blue-100 text-blue-700"
                        : skill.level === "Intermediate"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        skill.level === "Expert"
                          ? "bg-green-500 w-full"
                          : skill.level === "Advanced"
                          ? "bg-blue-500 w-[80%]"
                          : skill.level === "Intermediate"
                          ? "bg-amber-500 w-[60%]"
                          : "bg-slate-400 w-[40%]"
                      }`}
                    />
                  </div>
                  <span>{skill.yearsOfExperience}y</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}