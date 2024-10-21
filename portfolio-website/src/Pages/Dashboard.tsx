'use client'

// import React from 'react'
// import { Coffee, Database, Layout, Server, Smartphone } from 'lucide-react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
// import supplyChain from "@/assets/suuplyChain.jpeg"
import chaincare from "@/assets/chaincare page.jpeg"
import hyperbase from "@/assets/hyperbase.png"
import Tripxing from '@/assets/Tripxing.png'
import {ArrowRight } from 'lucide-react'
import Footer from '../Pages/Footer'
import Stacks from '../Pages/Stacks'
import Portfolio from '../Pages/Portfolio'

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

// interface Feature {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }


// const programming: Feature[] = [
//   {
//     icon: <Code className="h-6 w-6" />,  // Using Code icon for JavaScript
//     title: "JavaScript",
//     description: "A versatile programming language used to build interactive websites and applications on the front end."
//   },
//   {
//     icon: <Code2 className="h-6 w-6" />,  // Using Code2 icon for TypeScript
//     title: "TypeScript",
//     description: "A superset of JavaScript that adds static typing, making your code safer and more maintainable."
//   },
//   {
//     icon: <Coffee className="h-6 w-6" />,  // Using Coffee icon for Java
//     title: "Java",
//     description: "A powerful, platform-independent programming language used for building large-scale applications."
//   },
  
// ];


// const frameworks: Feature[] = [
//   {
//     icon: <Smartphone className="h-6 w-6" />,  // Using Smartphone icon for React.js
//     title: "React.js",
//     description: "A popular JavaScript library for building fast, scalable user interfaces, especially for single-page applications."
//   },
//   {
//     icon: <Layout className="h-6 w-6" />,  // Using Layout icon for Angular.js
//     title: "Angular.js",
//     description: "A comprehensive framework for building dynamic, client-side applications with structured architecture."
//   },
//   {
//     icon: <Server className="h-6 w-6" />,  // Using Server icon for Node.js
//     title: "Node.js",
//     description: "A runtime environment that allows JavaScript to be used for server-side development, enabling full-stack development."
//   }
// ]

// const databases: Feature[] = [
//   {
//     icon: <Database className="h-6 w-6" />,  // Using Database icon for MySQL
//     title: "MySQL",
//     description: "A reliable, open-source relational database management system that’s widely used for handling structured data."
//   },
//   {
//     icon: <Database className="h-6 w-6" />,  // Using Database icon for PostgreSQL
//     title: "PostgreSQL",
//     description: "An advanced, open-source relational database known for its extensibility and support for complex queries."
//   }
// ]



// function FeatureCard({ feature }: { feature: Feature }) {
//   return (
//     <div className="bg-white  rounded-lg p-6 shadow-sm border border-gray-100">
//       <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//         {feature.icon}
//       </div>
//       <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//       <p className="text-gray-600">{feature.description}</p>
//     </div>
//   )
// }


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

      {/* <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          <span className="text-gray-400">Hi, i am John Sam,</span>
          <br />
          Software Engineer
        </h1>
      </main> */}

      <Portfolio/>

      {/* <div className="py-16">
        <InfiniteMovingCards
         items={testimonials}
         direction="right"
         speed="slow"
        />
      </div> */}
      <div className='pt-16'>
      <Button variant="outline"  className="rounded-full px-10 py-6 bg-black text-gray-100 text-lg">SKILLS</Button>
      </div>


      <Stacks/>


      {/* <div className='pt-6'>
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
        </div> */}


        <div className='pt-10'>
          <Button 
            variant="outline" 
            className="rounded-full px-10 py-6 bg-black text-gray-100 text-lg"
          >
            PROJECTS
          </Button>
        </div>

        <div>
  <div className="flex flex-row">
    <div className="text-2xl font-bold flex justify-start pt-6">CHAINCARE</div>
    <div className="pt-6 flex ml-auto">
      <button className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-black">
        <ArrowRight className="w-6 h-6 text-black"
          onClick={() => window.open("https://github.com/John-09/Chaincare")}
        />
      </button>
    </div>
  </div>

  {/* Flex container that switches to column on smaller screens */}
  <div className="flex flex-col md:flex-row pt-10">

    {/* Image */}
    <div
      className="w-full md:w-[450px] max-w-full relative rounded-2xl border border-b-4 flex-shrink-0 px-8 py-6 mt-6 md:mt-0 md:mr-10"
      style={{
        background: "linear-gradient(180deg, #f8f8f8, #e5e5e5)",
      }}
    >
      <blockquote>
        <div className="relative z-20 mt-6 flex flex-col items-center justify-center h-full">
          <img src={chaincare} alt="Chaincare" className="w-50 h-50 pt-3 object-cover rounded-lg cursor-pointer"
            onClick={() => window.open("https://github.com/John-09/Chaincare")}
          />
        </div>
      </blockquote>
    </div>

    {/* Text content */}
    <div className="flex flex-col md:pt-20 md:w-1/2">
      <span className="flex flex-col gap-1 text-center font-bold">
        HEALTH CARE IN BLOCKCHAIN
      </span>
      <span className="block mt-4 text-sm leading-[1.6] text-gray-900 font-normal px-6">
        A blockchain-based healthcare management system built on Hyperledger Fabric, designed to securely handle patient data. The system ensures confidentiality through Private Data Collections and provides seamless interaction with front-end applications via RESTful APIs. It enhances interoperability by integrating with external APIs, enabling connections with service providers like insurance companies and medical scanners.
      </span>
      <span className="block mt-4 text-sm leading-[1.6] text-gray-900 font-bold text-right px-6">
        Hyperledger Fabric - Node.js - Docker - Bash - React
      </span>
    </div>

  </div>
</div>



        <div>
  <div className='flex flex-row'>
    <div className="text-2xl font-bold flex justify-start pt-12">HYPERBASE</div>
    <div className="pt-6 flex ml-auto">
      <button className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-black">
        <ArrowRight className="w-6 h-6 text-black"
          onClick={() => window.open("")}
        />
      </button>
    </div>
  </div>

  {/* Flex container that switches to column on smaller screens */}
  <div className='flex flex-col md:flex-row pt-10'>

    {/* Text content */}
    <div className='md:pt-20 md:w-1/2'>
      <span className="flex flex-col gap-1 text-center font-bold">
        SECURED PLATFORM AS A SERVICE USING BLOCKCHAIN
      </span>
      <span className="block mt-4 text-sm leading-[1.6] text-gray-900 font-normal px-6">
        HyperBase offers a platform built on top of Hyperledger Fabric that enables customers to create blockchain networks and deploy their applications on these networks. The platform is designed to simplify the process of creating and managing blockchain networks by automating the setup and configuration of the underlying infrastructure. Hyperbase also enables users to deploy smart contracts on the blockchain network.
      </span>
      <span className="block mt-4 text-sm leading-[1.6] text-gray-900 font-bold text-right px-6">
        Hyperledger Fabric - Node.js - Docker - Bash - Flutter
      </span>
    </div>

    {/* Image */}
    <div className="w-full md:w-[450px] max-w-full relative rounded-2xl border border-b-4 flex-shrink-0 px-8 py-6 mt-6 md:mt-0 md:ml-10"
      style={{
        background: "linear-gradient(180deg, #f8f8f8, #e5e5e5)",
      }}
    >
      <blockquote>
        <div className="relative z-20 mt-6 flex flex-col items-center justify-center h-full">
          <img src={hyperbase} alt="Chaincare" className="w-50 h-50 pt-3 object-cover rounded-lg cursor-pointer"
            onClick={() => window.open("")}
          />
        </div>
      </blockquote>
    </div>

  </div>
</div>



<div>
  <div className="flex flex-row">
    <div className="text-2xl font-bold flex justify-start pt-6">Tripxing</div>
    <div className="pt-6 flex ml-auto">
      <button className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-black">
        <ArrowRight className="w-6 h-6 text-black"
          onClick={() => window.open("")}
        />
      </button>
    </div>
  </div>

  {/* Flex container that switches to column on smaller screens */}
  <div className="flex flex-col md:flex-row pt-10 justify-center items-center md:items-start">

    {/* Image */}
    <div
      className="w-full md:w-[300px] max-w-full relative rounded-2xl border border-b-4 flex-shrink-0 px-4 py-6 mt-6 md:mt-0 md:mr-10"
      style={{
        background: "linear-gradient(180deg, #f8f8f8, #e5e5e5)",
      }}
    >
      <blockquote>
        <div className="relative z-20 mt-6 flex flex-col items-center justify-center h-full">
          <img
            src={Tripxing}
            width={200}
            height={200}
            alt="Chaincare"
            className="pt-3 object-cover rounded-lg cursor-pointer"
            onClick={() => window.open("")}
          />
        </div>
      </blockquote>
    </div>

    {/* Text content */}
    <div className="flex flex-col md:pt-20 md:w-1/2">
      <span className="flex flex-col gap-1 text-center font-bold">
        TRIPXING
      </span>
      <span className="block mt-4 text-sm leading-[1.6] text-gray-900 font-normal px-6">
      Developed the backend infrastructure for a mobile application that offers users detailed hotel information, inquiry handling, and subscription services. The backend was built using Node.js for efficient server-side operations, Prisma for data modeling and interaction with a PostgreSQL database. This setup enables the app to manage and retrieve hotel details, process customer inquiries, and handle subscription plans seamlessly. The use of Prisma ensures a highly maintainable and scalable data layer, with clear schema definitions and optimized queries for better performance. Built the Tripxing Admin web application using React, allowing administrators to manage hotel content, track customer inquiries, and oversee subscription services. The admin panel provides an intuitive interface for modifying hotel details, viewing customer interactions, and managing backend operations.
      </span>
      <span className="block mt-4 text-sm leading-[1.6] text-gray-900 font-bold text-right px-6">
      Node.js, React.js, Prisma, PostgresSQL, Flutter
      </span>
    </div>

  </div>
</div>


</div>
<div className='pt-10'>
<Footer/>
</div>
</div>
  
    
  )
}


