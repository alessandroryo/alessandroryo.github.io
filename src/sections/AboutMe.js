import React, { useState } from "react";
import { ComputerDesktopIcon, CircleStackIcon, CommandLineIcon, AcademicCapIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Studying at HZ University",
    description: "I’m learning a lot about technology here and it’s preparing me for my future.",
    icon: AcademicCapIcon,
  },
  {
    name: "Love for Programming",
    description: "I enjoy writing code and making things work through it.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Exploring Data",
    description: "I've started learning about data science and machine learning. It’s like finding patterns and stories in numbers.",
    icon: CircleStackIcon,
  },
  {
    name: "Always Up for a Challenge",
    description: "I believe challenges are opportunities to learn and grow.",
    icon: CommandLineIcon,
  },
];

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("Language");

  return (
    <>
      <section id="aboutme" className="z-30 min-h-screen py-24 overflow-hidden bg-black sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
              <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
                <div className="flex items-center justify-start gap-2">
                  <div className="w-20 h-px border border-green-500"></div>
                  <h3 className="text-xs font-medium tracking-widest text-green-500 uppercase border-green-500">ABOUT ME</h3>
                </div>
                <p className="mt-2 text-6xl font-black tracking-wide text-white font-dm">My Tech Adventure.</p>
                <p className="mt-6 text-base font-light leading-8 text-gray-200">
                  I'm a third-year student from Indonesia, studying Information and Communication Technology at HZ University in Middelburg. I love programming and am now starting to explore data science and machine learning. I'm always
                  excited to learn something new and take on new challenges.
                </p>
                <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-white lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-white">
                        <feature.icon className="absolute w-5 h-5 text-green-500 left-1 top-1" />
                        <code className="px-1 font-light tracking-wider text-green-500 text-md">{feature.name}:</code>
                      </dt>{" "}
                      <dd className="inline text-gray-200">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <div className="relative px-6 pt-8 overflow-hidden bg-green-700 isolate sm:mx-auto sm:max-w-2xl sm:rounded-xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                <div className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-15deg] bg-green-100 opacity-20 ring-1 ring-inset ring-white" />
                <div className="max-w-2xl mx-auto sm:mx-0 sm:max-w-none">
                  <div className="w-screen overflow-hidden bg-gray-900 rounded-tl-xl ring-1 ring-white/10">
                    <div className="flex h-8 bg-gray-800/40 ring-1 ring-white/5">
                      <div className="flex -mb-px text-sm font-medium leading-6 text-gray-400">
                        <p
                          className={`block px-4 py-2 cursor-pointer ${activeTab === "Language" ? "text-white border-b border-r border-b-white/20 border-r-white/10 bg-white/5" : "border-r border-gray-600/10"}`}
                          onClick={() => setActiveTab("Language")}
                        >
                          Language.jsx ⚛️
                        </p>
                        <p
                          className={`px-4 py-2 cursor-pointer ${activeTab === "SoftSkills" ? "text-white border-b border-r border-b-white/20 border-r-white/10 bg-white/5" : "border-r border-gray-600/10"}`}
                          onClick={() => setActiveTab("SoftSkills")}
                        >
                          SoftSkills.jsx ⚛️
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pt-6 h-[600px] overflow-y-auto">
                      <pre className="text-sm leading-6 text-gray-300" style={{ tabSize: 2 }}>
                        <code
                          dangerouslySetInnerHTML={{
                            __html:
                              activeTab === "Language"
                                ? `import <span class="text-[#7dd3fc]">React</span> from <span class="text-emerald-300">'react'</span>;

<span class="text-blue-400">export default function Language() </span> {
    return (
      &lt;&gt;
        &lt;<span class="text-blue-400">h1</span>&gt;Language Skill 🌏 &lt;/<span class="text-blue-400">h1</span>&gt;
        &lt;<span class="text-blue-400">div</span>&gt;
            &lt;<span class="text-blue-400">ul</span> className="<span class="text-emerald-300">1st</span>" &gt;
                &lt;<span class="text-blue-400">li</span>&gt;Bahasa Indonesia 🇮🇩 &lt;/<span class="text-blue-400">li</span>&gt;
            &lt;/<span class="text-blue-400">ul</span>&gt;
            &lt;<span class="text-blue-400">ul</span> className="<span class="text-emerald-300">2nd</span>"&gt;
                &lt;<span class="text-blue-400">li</span>&gt;English 🇬🇧 &lt;/<span class="text-blue-400">li</span>&gt;
            &lt;/<span class="text-blue-400">ul</span>&gt;
            &lt;<span class="text-blue-400">ul</span> className="<span class="text-emerald-300">3rd</span>" &gt;
                &lt;<span class="text-blue-400">li</span>&gt;Dutch 🇳🇱 &lt;/<span class="text-blue-400">li</span>&gt;
            &lt;/<span class="text-blue-400">ul</span>&gt;
        &lt;/<span class="text-blue-400">div</span>&gt;
      &lt;/&gt;
    );
}`
                                : `import <span class="text-[#7dd3fc]">React</span> from <span class="text-emerald-300">'react'</span>;

<span class="text-blue-400">export default function SoftSkills() </span> {
    return (
      &lt;&gt;
        &lt;<span class="text-blue-400">h1</span>&gt;Soft Skills 🧠 &lt;/<span class="text-blue-400">h1</span>&gt;
        &lt;<span class="text-blue-400">div</span>&gt;
            &lt;<span class="text-blue-400">ul</span> className="<span class="text-emerald-300">skills-list</span>" &gt;
                &lt;<span class="text-blue-400">li</span>&gt;Problem-solving 🧩 &lt;/<span class="text-blue-400">li</span>&gt;
                &lt;<span class="text-blue-400">li</span>&gt;Leadership 👑 &lt;/<span class="text-blue-400">li</span>&gt;
                &lt;<span class="text-blue-400">li</span>&gt;Teamwork 🤝 &lt;/<span class="text-blue-400">li</span>&gt;
                &lt;<span class="text-blue-400">li</span>&gt;Communication 📢 &lt;/<span class="text-blue-400">li</span>&gt;
                &lt;<span class="text-blue-400">li</span>&gt;Creative thinking 💡 &lt;/<span class="text-blue-400">li</span>&gt;
                &lt;<span class="text-blue-400">li</span>&gt;Capable of working under pressure 🌡️ &lt;/<span class="text-blue-400">li</span>&gt;
                &lt;<span class="text-blue-400">li</span>&gt;Fast learner 🚀 &lt;/<span class="text-blue-400">li</span>&gt;
                &lt;<span class="text-blue-400">li</span>&gt;Conscientious 📘 &lt;/<span class="text-blue-400">li</span>&gt;
                &lt;<span class="text-blue-400">li</span>&gt;Persevere 🏋️ &lt;/<span class="text-blue-400">li</span>&gt;
            &lt;/<span class="text-blue-400">ul</span>&gt;
        &lt;/<span class="text-blue-400">div</span>&gt;
      &lt;/&gt;
    );
}`,
                          }}
                        />
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
