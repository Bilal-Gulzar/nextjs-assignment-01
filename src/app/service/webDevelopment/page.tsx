import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function WebDevelopment() {
  return (
    <main className="2xl:container 2xl:mx-auto mb-28">
      <div className=" relative mt-9 p-3">
        <h1 className="text-center text-2xl sm:text-4xl font-medium">
          Web Development Services
        </h1>
        <div className="flex lg:flex-row lg:gap-0  gap-4 flex-col mt-8">
          <div className="lg:block hidden relative text-black min-w-80 max-w-96 min-h-64 max-h-96 bg-purple-100">
            <Image
              src="/web.png"
              fill
              className=" absolute"
              sizes="100vw"
              alt="web image"
              priority
              quality={100}
            />
          </div>
          <Image
            src="/web.png"
            width={150}
            height={150}
            className="lg:hidden w-full h-auto"
            priority
            alt="web image"
            quality={100}
          />

          <p className="ml-3 sm:ml-8 text-sm font-light">
            At [Your Company Name], we specialize in creating dynamic and
            engaging websites that drive results. Our web development services
            encompass a wide range of solutions tailored to meet your unique
            business needs. We utilize the latest technologies and frameworks to
            ensure your site is both functional and aesthetically pleasing.
            <br />
            <br />
            Our team of skilled developers is experienced in front-end and
            back-end development, ensuring seamless user experiences. We focus
            on responsive design, so your website looks great on all devices,
            from desktops to smartphones. With a user-centric approach, we
            prioritize usability and accessibility, making it easy for your
            visitors to navigate your site.
            <br />
            <br />
            We also emphasize performance optimization, ensuring fast load times
            and smooth interactions. Our websites are built with SEO best
            practices in mind, helping you rank higher in search engine results
            and attract more organic traffic. We offer eCommerce solutions,
            allowing you to sell products online efficiently and securely.
            <br />
            <br />
            Our commitment to ongoing support means you’re never alone after
            your site goes live. We provide regular updates, maintenance, and
            security checks to keep your website running smoothly. Whether you
            need a simple landing page or a complex web application, we have the
            expertise to bring your vision to life.
            <br />
            <br />
            Partner with us for a customized web development solution that
            aligns with your goals and enhances your online presence. Let’s
            transform your ideas into a powerful digital experience!
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

export default WebDevelopment