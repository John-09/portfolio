import chaincare from "@/assets/chaincare page.jpeg";
import hyperbase from "@/assets/hyperbase.png";
import Tripxing from "@/assets/Tripxing.png";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <div>
      <div>
        <div className="flex flex-row">
          <div className="text-2xl font-bold flex justify-start pt-6">
            CHAINCARE
          </div>
          <div className="pt-6 flex ml-auto">
            <button className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-black">
              <ArrowRight
                className="w-6 h-6 text-black"
                onClick={() =>
                  window.open("https://github.com/John-09/Chaincare")
                }
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
                <img
                  src={chaincare}
                  alt="Chaincare"
                  className="w-50 h-50 pt-3 object-cover rounded-lg cursor-pointer"
                  onClick={() =>
                    window.open("https://github.com/John-09/Chaincare")
                  }
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
              A blockchain-based healthcare management system built on
              Hyperledger Fabric, designed to securely handle patient data. The
              system ensures confidentiality through Private Data Collections
              and provides seamless interaction with front-end applications via
              RESTful APIs. It enhances interoperability by integrating with
              external APIs, enabling connections with service providers like
              insurance companies and medical scanners.
            </span>
            <span className="block mt-4 text-sm leading-[1.6] text-gray-900 font-bold text-right px-6">
              Hyperledger Fabric - Node.js - Docker - Bash - React
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-row">
          <div className="text-2xl font-bold flex justify-start pt-12">
            HYPERBASE
          </div>
          <div className="pt-6 flex ml-auto">
            <button className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-black">
              <ArrowRight
                className="w-6 h-6 text-black"
                onClick={() => window.open("")}
              />
            </button>
          </div>
        </div>

        {/* Flex container that switches to column on smaller screens */}
        <div className="flex flex-col md:flex-row pt-10">
          {/* Text content */}
          <div className="md:pt-20 md:w-1/2">
            <span className="flex flex-col gap-1 text-center font-bold">
              SECURED PLATFORM AS A SERVICE USING BLOCKCHAIN
            </span>
            <span className="block mt-4 text-sm leading-[1.6] text-gray-900 font-normal px-6">
              HyperBase offers a platform built on top of Hyperledger Fabric
              that enables customers to create blockchain networks and deploy
              their applications on these networks. The platform is designed to
              simplify the process of creating and managing blockchain networks
              by automating the setup and configuration of the underlying
              infrastructure. Hyperbase also enables users to deploy smart
              contracts on the blockchain network.
            </span>
            <span className="block mt-4 text-sm leading-[1.6] text-gray-900 font-bold text-right px-6">
              Hyperledger Fabric - Node.js - Docker - Bash - Flutter
            </span>
          </div>

          {/* Image */}
          <div
            className="w-full md:w-[450px] max-w-full relative rounded-2xl border border-b-4 flex-shrink-0 px-8 py-6 mt-6 md:mt-0 md:ml-10"
            style={{
              background: "linear-gradient(180deg, #f8f8f8, #e5e5e5)",
            }}
          >
            <blockquote>
              <div className="relative z-20 mt-6 flex flex-col items-center justify-center h-full">
                <img
                  src={hyperbase}
                  alt="Chaincare"
                  className="w-50 h-50 pt-3 object-cover rounded-lg cursor-pointer"
                  onClick={() => window.open("")}
                />
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-row">
          <div className="text-2xl font-bold flex justify-start pt-6">
            Tripxing
          </div>
          <div className="pt-6 flex ml-auto">
            <button className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-black">
              <ArrowRight
                className="w-6 h-6 text-black"
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
              Developed the backend infrastructure for a mobile application that
              offers users detailed hotel information, inquiry handling, and
              subscription services. The backend was built using Node.js for
              efficient server-side operations, Prisma for data modeling and
              interaction with a PostgreSQL database. This setup enables the app
              to manage and retrieve hotel details, process customer inquiries,
              and handle subscription plans seamlessly. The use of Prisma
              ensures a highly maintainable and scalable data layer, with clear
              schema definitions and optimized queries for better performance.
              Built the Tripxing Admin web application using React, allowing
              administrators to manage hotel content, track customer inquiries,
              and oversee subscription services. The admin panel provides an
              intuitive interface for modifying hotel details, viewing customer
              interactions, and managing backend operations.
            </span>
            <span className="block mt-4 text-sm leading-[1.6] text-gray-900 font-bold text-right px-6">
              Node.js, React.js, Prisma, PostgresSQL, Flutter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
