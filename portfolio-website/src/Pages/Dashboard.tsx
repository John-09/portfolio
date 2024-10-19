'use client'

import React from 'react'
import { Coffee, Database, Layout, Menu, Server, Smartphone } from 'lucide-react'
import { Button } from "@/components/ui/button"
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
// import supplyChain from "@/assets/suuplyChain.jpeg"
import { Code, Code2,ArrowRight } from 'lucide-react'

// const testimonials = [
//   {
//     image: supplyChain,
//     name: "Chaincare",
//     title: "Secure Health Data Management System",
//   },
//   {
//     // quote:
//     //   "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     image: supplyChain,
//     name: "HyperBase",
//     title: "Secure Platform As A Service Using Blockchain",
//   },
//   {
//     image: supplyChain,
//     name: "SupplyChain Management",
//     title: "A Permissioned Blockchain System for SupplyChain Management",
//   },

// ];

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}


const programming: Feature[] = [
  {
    icon: <Code className="h-6 w-6" />,  // Using Code icon for JavaScript
    title: "JavaScript",
    description: "A versatile programming language used to build interactive websites and applications on the front end."
  },
  {
    icon: <Code2 className="h-6 w-6" />,  // Using Code2 icon for TypeScript
    title: "TypeScript",
    description: "A superset of JavaScript that adds static typing, making your code safer and more maintainable."
  },
  {
    icon: <Coffee className="h-6 w-6" />,  // Using Coffee icon for Java
    title: "Java",
    description: "A powerful, platform-independent programming language used for building large-scale applications."
  },
  
];


const frameworks: Feature[] = [
  {
    icon: <Smartphone className="h-6 w-6" />,  // Using Smartphone icon for React.js
    title: "React.js",
    description: "A popular JavaScript library for building fast, scalable user interfaces, especially for single-page applications."
  },
  {
    icon: <Layout className="h-6 w-6" />,  // Using Layout icon for Angular.js
    title: "Angular.js",
    description: "A comprehensive framework for building dynamic, client-side applications with structured architecture."
  },
  {
    icon: <Server className="h-6 w-6" />,  // Using Server icon for Node.js
    title: "Node.js",
    description: "A runtime environment that allows JavaScript to be used for server-side development, enabling full-stack development."
  }
]

const databases: Feature[] = [
  {
    icon: <Database className="h-6 w-6" />,  // Using Database icon for MySQL
    title: "MySQL",
    description: "A reliable, open-source relational database management system that’s widely used for handling structured data."
  },
  {
    icon: <Database className="h-6 w-6" />,  // Using Database icon for PostgreSQL
    title: "PostgreSQL",
    description: "An advanced, open-source relational database known for its extensibility and support for complex queries."
  }
]



function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-white  rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  )
}


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Portfolio.</div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          <span className="text-gray-400">John Sam Daniel</span>
          <br />
          Software Engineer
        </h1>
      </main>

      {/* <div className="py-16">
        <InfiniteMovingCards
         items={testimonials}
         direction="right"
         speed="slow"
        />
      </div> */}

      <div>
      <Button variant="outline"  className="rounded-full px-10 py-6 bg-black text-gray-100 text-lg">Skills</Button>
      </div>

      <div className='pt-6'>
      <Button variant="outline" className="rounded-full px-6">Programming Languages</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
          {programming.map((programming, index) => (
            <FeatureCard key={index} feature={programming} />
          ))}
        </div>

      <div className='pt-6'>
      <Button variant="outline" className="rounded-full px-6 pt-2">Frameworks/Libraries</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
          {frameworks.map((frameworks, index) => (
            <FeatureCard key={index} feature={frameworks} />
          ))}
        </div>


        <div className='pt-6'>
      <Button variant="outline" className="rounded-full px-6 pt-2">Database</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
          {databases.map((databases, index) => (
            <FeatureCard key={index} feature={databases} />
          ))}
        </div>


        <div className='pt-6'>
          <Button 
            variant="outline" 
            className="rounded-full px-10 py-6 bg-black text-gray-100 text-lg"
          >
            Projects
          </Button>
        </div>

        <div>
          <div className='flex flex-row'>
            <div className="text-2xl font-bold flex justify-start pt-6">CHAINCARE</div>
            <div className="pt-6 flex ml-auto">
              <button className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-black">
                <ArrowRight className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>



    </div>
  )
}


