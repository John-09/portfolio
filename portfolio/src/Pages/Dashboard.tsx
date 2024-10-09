import React from 'react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

const portfolioItems = [
  {
    title: "Bringing your brand to life in the digital world",
    subtitle: "UX BRANDING MOBILE APP WEBSITE DESIGN",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Unleash Your Potential and Push Beyond Limits",
    subtitle: "Sportly",
    image: "/placeholder.svg?height=400&width=600"
  },
  // Add more portfolio items as needed
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">showcasy.</div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="rounded-full px-6">Let's Talk</Button>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          <span className="text-gray-400">Showcasy,</span> the ultimate
          <br />
          digital designer portfolio
        </h1>
        <div className="flex justify-center space-x-4">
          <Button className="rounded-full px-8 py-6 text-lg bg-black text-white hover:bg-gray-800">Buy Template</Button>
          <Button variant="outline" className="rounded-full px-8 py-6 text-lg">Explore Pages</Button>
        </div>
      </main>

      {/* <div className="py-16">
        <InfiniteMovingCards
          items={portfolioItems}
          direction="right"
          speed="slow"
        />
      </div> */}
    </div>
  )
}

// InfiniteMovingCards component (simplified version)
// function InfiniteMovingCards({ items, direction = "left", speed = "fast" }) {
//   return (
//     <div className="relative h-[400px] overflow-hidden">
//       <div className="flex gap-4 absolute left-0 top-0 h-full animate-move-infinite">
//         {items.map((item, index) => (
//           <div key={index} className="w-[600px] h-full bg-gray-100 p-8 rounded-lg flex flex-col justify-between">
//             <h2 className="text-3xl font-bold">{item.title}</h2>
//             <p className="text-sm text-gray-600">{item.subtitle}</p>
//             <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded" />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }