import { Sidebar } from "@/components/sidebar";
import { SocialIcons } from "@/components/social-icons";
import { ResumeButton } from "@/components/resume-button";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Portfolio } from "@/components/portfolio";
import { Experience } from "@/components/experience";
import { ElevatorPitch } from "@/components/elevator-pitch";
import { Contact } from "@/components/contact";
import { DotPattern } from "@/components/dot-pattern";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Full-width header above sidebar */}
      <header className="w-full bg-black border-b border-zinc-800 fixed top-0 left-0 right-0 z-30">
        <div className="flex justify-between items-center py-4 px-6">
          <div className="text-3xl font-bold">
            <Avatar className="w-10 h-10 md:w-12 md:h-12 bg-slate-400">
              <AvatarImage
                className="size-full"
                src="/logo.png"
                alt="personal photo"
              />
              <AvatarFallback className="leading-1 flex size-full items-center justify-center bg-white text-[18px] font-bold text-[#4338ca]">
                E.
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-center space-x-4">
            <SocialIcons />
            <ResumeButton />
          </div>
        </div>
      </header>

      <div className="flex min-h-screen pt-20">
        {" "}
        {/* Add padding-top to account for fixed header */}
        <Sidebar />
        <main className="flex-1 relative overflow-hidden ml-16 md:ml-20">
          <DotPattern />
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="py-12 space-y-16 md:space-y-32">
              <Hero />
              <About />
              <Portfolio />
              <Experience />
              <ElevatorPitch />
              <Contact />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
