"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Project from "../Pages/Projects";
import Footer from "../Pages/Footer";
import Stacks from "../Pages/Stacks";
import Portfolio from "../Pages/Portfolio";

export default function Dashboard() {
  return (
    <div>
      <div className="min-h-screen bg-white text-black">
        <header className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold">Portfolio.</div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>

        <Portfolio />

        <div className="pt-16">
          <Button
            variant="outline"
            className="rounded-full px-10 py-6 bg-black text-gray-100 text-lg"
          >
            SKILLS
          </Button>
        </div>

        <Stacks />

        <div className="pt-10">
          <Button
            variant="outline"
            className="rounded-full px-10 py-6 bg-black text-gray-100 text-lg"
          >
            PROJECTS
          </Button>
        </div>

        <Project />
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
}
