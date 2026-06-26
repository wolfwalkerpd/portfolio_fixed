const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import FooterContact from "@/components/portfolio/FooterContact";

const HERO_IMAGE = "https://media.db.com/images/public/6a3ec4e1af6cd3f2d62abadd/ab9a4172f_generated_30020aee.png";
const PROJECTS_IMAGE = "https://media.db.com/images/public/6a3ec4e1af6cd3f2d62abadd/0bdca18ea_generated_f1a6f423.png";
const portraitImage = "/img2.png";

export default function Home() {
  return (
    <main className="bg-obsidian min-h-screen">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} portraitImage={portraitImage} />
      <SkillsSection />
      <ProjectsSection projectImage={PROJECTS_IMAGE} />
      <FooterContact />
    </main>
  );
}