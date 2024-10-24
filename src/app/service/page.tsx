import React from 'react'
import Link from 'next/link';

export default function ServicePage() {
  return (
    <main className="pt-5 pb-40 overflow-hidden">
      <div className="bg-gray-300">
        <h1 className="text-2xl py-9 px-4 md:py-1 text-center font-medium">
          Web and App Development Services
        </h1>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="px-5 flex  justify-between gap-5 mt-16">
          <Link href="/service/webDevelopment">
            <button className="px-5 py-2 bg-black rounded-lg text-white">
              Web Development
            </button>
          </Link>

          <Link href="/service/appDevelopment">
            <button className="px-5 py-2 bg-black rounded-lg text-white">
              APP Development
            </button>
          </Link>
        </div>
       
        <p className="px-5 sm:px-10  text-black font-light text-sm text-balance mt-9 text-center">
          At [Your Company Name], we provide comprehensive web and app
          development services designed to elevate your online presence and
          engage your audience. Our expert team combines creativity and
          technical expertise to deliver tailored solutions that meet your
          unique business needs. In web development, we focus on creating
          responsive, user-friendly websites that not only look stunning but
          also function seamlessly across all devices. Our approach includes
          meticulous planning, design, and coding, ensuring that your site is
          optimized for performance and search engine visibility. For app
          development, we specialize in building innovative applications that
          enhance user engagement and streamline business operations. Whether
          you need a native, hybrid, or web app, we utilize the latest
          technologies to create scalable and secure solutions. Both services
          emphasize a user-centric design, ensuring a smooth experience that
          keeps visitors returning. We prioritize performance optimization and
          security, implementing best practices to safeguard your data and
          enhance load times. Collaboration is key in our process. We work
          closely with you from initial consultation to final launch,
          incorporating your feedback every step of the way. Our commitment
          doesn’t end at launch; we provide ongoing support, maintenance, and
          updates to keep your web and app solutions running efficiently.
          <br />
          <br />
          <br />
          AccountsMM is your go-to destination for purchasing fully verified
          accounts from major global platforms like Alibaba, Amazon, Payoneer,
          and many more. We are committed to offering secure, ready-to-use
          accounts that meet the diverse needs of businesses, entrepreneurs, and
          freelancers. Whether you're looking to expand your online presence or
          streamline international transactions, our verified accounts help you
          get started instantly and confidently. At AccountsMM, we prioritize
          security and authenticity, ensuring each account is 100% legitimate
          and reliable. Our straightforward buying process allows you to acquire
          accounts with ease, backed by exceptional customer support and timely
          delivery. We aim to empower businesses by providing the tools they
          need to succeed in a competitive digital landscape. Trust AccountsMM
          to be your partner in scaling your online operations with verified
          accounts from trusted platforms. <br />
          <br />
          <br />
          By choosing us, you’ll benefit from a cohesive strategy that aligns
          your web and app development efforts, driving growth and enhancing
          your brand’s digital footprint. Let’s work together to transform your
          ideas into powerful online experiences! You said:
        </p>
      </div>
    </main>
  );
}
