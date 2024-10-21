// import React from 'react'
// import { Icon } from '@iconify/react'
// import { motion } from 'framer-motion'

// const technologies = [
//   { name: 'CSS', icon: 'vscode-icons:file-type-css' },
//   { name: 'JAVASCRIPT', icon: 'logos:javascript' },
//   { name: 'REACTJS', icon: 'logos:react' },
//   { name: 'REACT-ROUTER', icon: 'logos:react-router' },
//   { name: 'TAILWINDCSS', icon: 'logos:tailwindcss-icon' },
//   { name: 'BOOTSTRAP', icon: 'logos:bootstrap' },
//   { name: 'TAILWINDCSS', icon: 'logos:tailwindcss-icon' },
//   { name: 'BOOTSTRAP', icon: 'logos:bootstrap' },
//   { name: 'GIT', icon: 'logos:git-icon' },
//   { name: 'GITHUB', icon: 'logos:github-icon' },
//   { name: 'VS CODE', icon: 'vscode-icons:file-type-vscode' },
//   { name: 'JAVASCRIPT', icon: 'logos:javascript' },
//   { name: 'REACTJS', icon: 'logos:react' },
//   { name: 'REACT-ROUTER', icon: 'logos:react-router' },
//   { name: 'TYPESCRIPT', icon: 'logos:typescript-icon' },
//   { name: 'NODEJS', icon: 'logos:nodejs-icon' },
//   { name: 'EXPRESS', icon: 'logos:express' },
//   { name: 'MONGODB', icon: 'logos:mongodb-icon' },
//   { name: 'POSTGRESQL', icon: 'logos:postgresql' },
//   { name: 'MYSQL', icon: 'logos:mysql' },
//   { name: 'POSTMAN', icon: 'logos:postman-icon' },
// ]

// const TechBadge = ({ tech }: { tech: { name: string; icon: string } }) => (
//   <motion.div
//     className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md"
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//   >
//     <Icon icon={tech.icon} className="mr-2 h-5 w-5" />
//     <span className="text-sm font-semibold">{tech.name}</span>
//   </motion.div>
// )

// export default function AnimatedTechStacks() {
//   const firstHalf = technologies.slice(0, Math.ceil(technologies.length / 2))
//   const secondHalf = technologies.slice(Math.ceil(technologies.length / 2))

//   return (
//     <div className="bg-white p-8 overflow-hidden">
//       <motion.div
//         className="flex mb-4 space-x-4"
//         initial={{ x: '-100%' }}
//         animate={{ x: '100%' }}
//         transition={{
//           x: {
//             repeat: Infinity,
//             repeatType: 'loop',
//             duration: 20,
//             ease: 'linear',
//           },
//         }}
//       >
//         {firstHalf.map((tech, index) => (
//           <TechBadge key={index} tech={tech} />
//         ))}
//       </motion.div>
//       <motion.div
//         className="flex space-x-4"
//         initial={{ x: '100%' }}
//         animate={{ x: '-100%' }}
//         transition={{
//           x: {
//             repeat: Infinity,
//             repeatType: 'loop',
//             duration: 20,
//             ease: 'linear',
//           },
//         }}
//       >
//         {secondHalf.map((tech, index) => (
//           <TechBadge key={index} tech={tech} />
//         ))}
//       </motion.div>
//     </div>
//   )
// }



import React from 'react'
import { Icon } from '@iconify/react'
import { cn } from "@/lib/utils"

const technologies = [
  { name: 'CSS', icon: 'vscode-icons:file-type-css' },
  { name: 'JAVASCRIPT', icon: 'logos:javascript' },
  { name: 'REACTJS', icon: 'logos:react' },
  { name: 'REACT-ROUTER', icon: 'logos:react-router' },
  { name: 'TAILWINDCSS', icon: 'logos:tailwindcss-icon' },
  { name: 'BOOTSTRAP', icon: 'logos:bootstrap' },
  { name: 'TAILWINDCSS', icon: 'logos:tailwindcss-icon' },
  { name: 'BOOTSTRAP', icon: 'logos:bootstrap' },
  { name: 'GIT', icon: 'logos:git-icon' },
  { name: 'GITHUB', icon: 'logos:github-icon' },
  { name: 'VS CODE', icon: 'vscode-icons:file-type-vscode' },
  { name: 'JAVASCRIPT', icon: 'logos:javascript' },
  { name: 'REACTJS', icon: 'logos:react' },
  { name: 'REACT-ROUTER', icon: 'logos:react-router' },
  { name: 'TYPESCRIPT', icon: 'logos:typescript-icon' },
  { name: 'NODEJS', icon: 'logos:nodejs-icon' },
  { name: 'EXPRESS', icon: 'logos:nodejs-icon' },
  { name: 'MONGODB', icon: 'logos:mongodb-icon' },
  { name: 'POSTGRESQL', icon: 'logos:postgresql' },
  { name: 'MYSQL', icon: 'logos:mysql' },
  { name: 'POSTMAN', icon: 'logos:postman-icon' },
]

const TechBadge = ({ tech }: { tech: { name: string; icon: string } }) => (
  <div className="flex items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md">
    <Icon icon={tech.icon} className="mr-2 h-5 w-5" />
    <span className="text-sm font-semibold">{tech.name}</span>
  </div>
)

const InfiniteMovingCards = ({
    items,
    direction,
    speed = "fast",
  }: {
    items: typeof technologies
    direction: "left" | "right"
    speed?: "fast" | "normal" | "slow"
  }) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const scrollerRef = React.useRef<HTMLUListElement>(null)
  
    React.useEffect(() => {
      addAnimation()
    }, [])
  
    const [start, setStart] = React.useState(false)
  
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children)
  
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true)
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem)
          }
        })
  
        getDirection()
        getSpeed()
        setStart(true)
      }
    }
  
    const getDirection = () => {
      if (containerRef.current) {
        if (direction === "left") {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
          )
        } else {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
          )
        }
      }
    }
  
    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s")
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s")
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s")
        }
      }
    }
  
    return (
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            direction === "left" ? "flex-row" : "flex-row-reverse"
          )}
        >

          {items.map((tech, idx) => (
            <li key={idx} className="w-[max-content] flex-shrink-0">
              <TechBadge tech={tech} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
  

export default function Stacks() {
    const firstHalf = technologies.slice(0, Math.ceil(technologies.length / 2))
    const secondHalf = technologies
    const thirdHalf = technologies.slice(Math.ceil(technologies.length / 2))
    console.log('sconf', secondHalf);
    
    

  return (
    <div className="bg-white p-8 overflow-hidden">
      <InfiniteMovingCards
        items={firstHalf}
        direction="left"
        speed="slow"
      />
      <InfiniteMovingCards
        items={secondHalf}
        direction="right"
        speed="slow"
      />
    <InfiniteMovingCards
        items={thirdHalf}
        direction="left"
        speed="slow"
      />
    </div>
  )
}