import React from "react";
import Image from "next/image";
// import featureOne from ""

const FeatureSection: React.FC = () => {
  return (
    <div className="bg-white px-4 py-48 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-base tracking-wide text-black/60">
          Estimated setup time: 9 Minutes
        </h2>
        <h1 className="mt-8 font-jakarta text-5xl text-gray-900">
          Just a few lines of code.
        </h1>
        <p className="mt-8 text-center text-xl leading-6 text-black">
          We make the hard things easy, so you can focus on your product. Spin
          up embedded wallets and beautiful authentication flows for all users.
          Scale your product across all devices, wallets, and browsers in
          minutes.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
          >
            Get Started
          </a>
          <a
            href="#"
            className="ml-4 rounded-md border border-transparent bg-gray-100 px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-200"
          >
            View Docs
          </a>
        </div>
      </div>
      <div className="mt-32 flex justify-center">
        <div className="grid grid-cols-1 gap-72 md:grid-cols-2">
          <div className="flex w-80 items-center">
            <div className="flex-shrink-0">
              <Image
                className="h-12 w-12"
                src="auth_icon.png"
                alt="Auth for all"
              />
            </div>
            <div className="ml-4">
              <h4 className="text-xl font-medium leading-6 text-black">
                Auth for all
              </h4>
              <p className="mt-2 text-base leading-6 text-black">
                Progressively onboard every potential user with just one
                library.
              </p>
            </div>
          </div>
          <div className="flex w-80 items-center">
            <div className="flex-shrink-0">
              <Image
                className="h-12 w-12"
                src="connectors_icon.png"
                alt="Reliable connectors"
              />
            </div>
            <div className="ml-4">
              <h4 className="text-xl font-medium leading-6 text-black">
                Reliable connectors
              </h4>
              <p className="mt-2 text-base leading-6 text-black">
                Allow users to link as many external wallets as they would like.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
