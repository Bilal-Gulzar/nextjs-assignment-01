import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function AppDevelopment() {
  return (
    <main className="2xl:container 2xl:mx-auto mb-28">
      <div className=" relative mt-9 p-3">
        <h1 className="text-center text-2xl sm:text-4xl font-medium">
          App Development Services
        </h1>
        <div className="flex lg:flex-row lg:gap-0  gap-4 flex-col mt-8">
          <div className="lg:block hidden relative text-black min-w-80 max-w-96 min-h-64 max-h-96 bg-purple-100">
            <Image
              src="/app.png"
              fill
              className=" absolute"
              sizes="100vw"
              alt="web image"
              priority
              quality={100}
            />
          </div>
          <Image
            src="/app.png"
            width={150}
            height={150}
            className="lg:hidden w-full h-auto"
            priority
            alt="web image"
            quality={100}
          />

          <p className="ml-3 sm:ml-8 text-sm font-light">
            At [Your Company Name], we offer comprehensive app development
            services to bring your ideas to life on mobile and web platforms.
            Our experienced team specializes in creating intuitive and
            user-friendly applications that cater to your business needs.
            Whether you’re looking for native, hybrid, or web-based apps, we
            have the expertise to deliver high-quality solutions.
            <br />
            <br />
            We begin by understanding your vision and requirements, ensuring
            that the final product aligns with your goals. Our development
            process emphasizes collaboration, allowing you to stay involved from
            concept to launch. We focus on creating responsive designs that
            provide seamless experiences across various devices and screen
            sizes.
            <br />
            <br />
            Performance is key in app development, and we optimize each
            application for speed and efficiency. Our apps are built with
            scalability in mind, allowing them to grow alongside your business.
            We also prioritize security, implementing robust measures to protect
            user data and ensure a safe environment.
            <br />
            <br />
            User engagement is crucial, and we integrate features that enhance
            interaction and satisfaction. From push notifications to in-app
            purchases, we tailor the user experience to keep your audience
            engaged. Our team also conducts thorough testing to identify and
            resolve any issues before your app goes live.
            <br />
            <br />
            Post-launch support is part of our commitment to you. We offer
            maintenance, updates, and troubleshooting to ensure your app remains
            functional and relevant. Whether you’re a startup or an established
            business, we’re here to turn your app ideas into reality, driving
            growth and success in the digital landscape. Let’s build something
            amazing together!
          </p>
        </div>
      </div>
      <div className="px-5 flex  justify-center gap-5 mt-16">
        <Link href="/">
          <button className="px-5 py-2 bg-black rounded-lg text-white">
            Go Home
          </button>
        </Link>
      </div>
    </main>
  );
}
