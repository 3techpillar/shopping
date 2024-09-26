import React from "react";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[20vh] sm:h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/term.webp')" }}
      ></div>

      {/* Terms and Conditions Content */}
      <div className="bg-white py-2 sm:py-10">
        <div className="max-w-4xl mx-auto p-2 sm:p-8 bg-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">
            Terms and Conditions
          </h2>
          <p className="mb-6">
            Welcome to our ecommerce website. By accessing and using this
            website, you agree to be bound by the following terms and
            conditions.
          </p>

          <h3 className="text-lg sm:text-2xl font-semibold mb-4">
            Use of the Site
          </h3>
          <p className="mb-4">
            You may use the Site for personal and non-commercial purposes only.
            You agree not to use the Site for any illegal or unauthorized
            purpose.
          </p>

          <h3 className="text-lg sm:text-2xl font-semibold mb-4">Accounts</h3>
          <p className="mb-4">
            When you create an account with us, you must provide us with
            information that is accurate, complete, and current at all times.
            Failure to do so constitutes a breach of the Terms, which may result
            in immediate termination of your account on our Service.
          </p>

          <h3 className="text-lg sm:text-2xl font-semibold mb-4">Purchases</h3>
          <p className="mb-4">
            If you wish to purchase any product or service made available
            through the Site, you may be asked to supply certain information
            relevant to your purchase including, without limitation, your credit
            card number, the expiration date of your credit card, your billing
            address, and your shipping information.
          </p>

          <h3 className="text-lg sm:text-2xl font-semibold mb-4">Content</h3>
          <p className="mb-4">
            Our Service allows you to post, link, store, share, and otherwise
            make available certain information, text, graphics, videos, or other
            material. You are responsible for the Content that you post to the
            Service, including its legality, reliability, and appropriateness.
          </p>

          <h3 className="text-lg sm:text-2xl font-semibold mb-4">
            Termination
          </h3>
          <p className="mb-4">
            We may terminate or suspend your account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if you breach the Terms.
          </p>

          <h3 className="text-lg sm:text-2xl font-semibold mb-4">
            Changes to Terms
          </h3>
          <p className="mb-6">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will try to
            provide at least 30 days notice prior to any new terms taking
            effect.
          </p>

          <p className="mb-4">
            Contact us for more information:
            <br />
            Email:{" "}
            <a
              href="mailto:terms@ecommerce.com"
              className="text-blue-500 underline text-xs"
            >
              chotiwalepurecamphormarket@gmail .com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
