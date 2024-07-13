import React from "react";
import { FaSlack, FaGithub, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[100rem] flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
            <img src="/black-logo.svg" alt="Privy" className="h-6" />
            <span className="text-lg font-semibold text-gray-700">Stellock</span>
          </div>
          <p className="mt-2 text-sm text-gray-500">© 2024</p>
          <div className="mt-4 flex space-x-4">
            <FaSlack className="h-6 w-6 text-gray-500 hover:text-gray-700" />
            <FaGithub className="h-6 w-6 text-gray-500 hover:text-gray-700" />
            <FaTwitter className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-0 md:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-gray-700">Product</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:underline">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Vulnerability disclosure
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-700">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Customer love
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-700">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:underline">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  User terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Developer terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
