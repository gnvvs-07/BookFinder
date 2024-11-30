import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 w-3/4 shadow-lg m-3 rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Privacy Policy
      </h1>
      <p className="text-gray-600 mb-4">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
        Information We Collect
      </h2>
      <p className="text-gray-600 mb-4">
        We collect information that you provide to us directly, such as when
        you create an account or contact us for support. This may include your
        name, email address, and other contact details.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
        How We Use Your Information
      </h2>
      <p className="text-gray-600 mb-4">
        We use your information to provide and improve our services, communicate
        with you, and comply with legal obligations.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
        Sharing of Information
      </h2>
      <p className="text-gray-600">
        We do not share your personal information with third parties except as
        required by law or with your explicit consent.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
