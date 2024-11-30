import React from "react";

const TermsAndServices = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 w-3/4 shadow-lg rounded-md m-3">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Terms and Services
      </h1>
      <p className="text-gray-600 mb-4">
        Welcome to our website. By accessing or using our service, you agree to
        be bound by these terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
        Use of Service
      </h2>
      <p className="text-gray-600 mb-4">
        You agree to use our services responsibly and in compliance with all
        applicable laws. You must not misuse our services or use them for
        illegal purposes.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
        Account Responsibilities
      </h2>
      <p className="text-gray-600 mb-4">
        You are responsible for maintaining the confidentiality of your account
        information and for all activities that occur under your account.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
        Termination
      </h2>
      <p className="text-gray-600">
        We may suspend or terminate your access to our services at our
        discretion, without prior notice, for conduct that violates these terms
        or is harmful to other users of our services.
      </p>
    </div>
  );
};

export default TermsAndServices;
