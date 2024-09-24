import React from "react";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/privacy.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-white">
            Protecting your personal information is our priority.
          </p>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="bg-white py-10">
        <div className="max-w-4xl mx-auto p-8 bg-white">
          <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
          <p className="mb-6">
            This Privacy Policy explains how we collect, use, and disclose your
            personal information when you visit or make a purchase from our
            ecommerce website.
          </p>
          <h3 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h3>
          <p className="mb-4">
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that
            you view, what websites or search terms referred you to the Site,
            and information about how you interact with the Site.
          </p>
          <h3 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h3>
          <p className="mb-4">
            We use the Order Information that we collect generally to fulfill
            any orders placed through the Site (including processing your
            payment information, arranging for shipping, and providing you with
            invoices and/or order confirmations). Additionally, we use this
            Order Information to:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Communicate with you;</li>
            <li>Screen our orders for potential risk or fraud; and</li>
            <li>
              When in line with the preferences you have shared with us, provide
              you with information or advertising relating to our products or
              services.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4">
            Sharing Your Information
          </h3>
          <p className="mb-4">
            We share your Personal Information with third parties to help us use
            your Personal Information, as described above. For example, we use
            Shopify to power our online store—you can read more about how We
            also use Google Analytics to help us understand how our customers
            use the Site—you can read more about how Google uses your Personal.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Your Rights</h3>
          <p className="mb-4">
            If you are a European resident, you have the right to access
            personal information we hold about you and to ask that your personal
            information be corrected, updated, or deleted. If you would like to
            exercise this right, please contact us through the contact
            information below.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Changes</h3>
          <p className="mb-6">
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal, or regulatory reasons.
          </p>
          <p className="mb-4">
            Contact us for more information:
            <br />
            Email:{" "}
            <a
              href="mailto:privacy@ecommerce.com"
              className="text-blue-500 underline"
            >
              info.example@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
