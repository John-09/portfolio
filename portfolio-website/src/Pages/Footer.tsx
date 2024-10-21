import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa"

export default function Footer() {
    return (
      <footer className="bg-black text-white py-12 px-4 md:px-6 lg:px-8 w-full">
        {/* Full width */}
        <div className="w-full">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">CONTACT ME</h2>
          </div>
  
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
            {/* Social Media Links */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <div
                className="flex flex-row justify-center cursor-pointer"
                onClick={() =>
                  window.open("https://www.instagram.com/john_sd_/")
                }
              >
                <FaInstagram size={24} />
                <span className="px-2">Instagram</span>
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <div
                className="flex flex-row justify-center cursor-pointer"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/johnsamp/")
                }
              >
                <FaLinkedin size={24} />
                <span className="px-2">LinkedIn</span>
              </div>
            </a>
            <a className="text-gray-400 hover:text-white flex items-center justify-center">
              <div className="flex flex-row">
                <FaWhatsapp size={24} />
                <span className="px-2">9361296676</span>
              </div>
            </a>
            <a className="text-gray-400 hover:text-white flex items-center justify-center cursor-pointer">
              <FaEnvelope size={24} />
              <span className="ml-2">johnsd2709@gmail.com</span>
            </a>
          </div>
  
          <div className="w-full md:w-1/2 mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-400 text-center">
              Stay connected w/ me.
            </h3>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-gray-800 rounded-r-none focus:ring-0 focus:border-gray-700 w-full"
              />
              <Button
                type="submit"
                variant="outline"
                className="rounded-l-none border-l-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    );
  }
