import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
export default function ContactPage() {
  return (
    <div>
      <main>
        <div className="-mt-9  xl:mt-14  pb-36 ">
          <div className="bg-gray-100 shadow-lg mx-0.5 xl:w-[1100px] xl:mx-auto ">
            <div className=" pt-24">
              <h1 className="font-sans font-bold text-center text-3xl">
                Lets talk about everything!
              </h1>
            </div>
            <div className=" mt-2">
              <Image
                src="/smm.png"
                width={190}
                height={190}
                alt="accountsmm"
                className="mx-auto rounded-full"
              />
            </div>
            <div>
              <h2 className="font-sans text-center font-semibold text-2xl ">
                Feel free to ask us anything!{" "}
              </h2>
            </div>
            <div className="mt-5">
              <p className="font-sans text-center break-words px-10 font-sm ">
                If you have any questions regarding your order, feel free to
                send email, call or Whatsapp us on our support number
              </p>
            </div>
            <div className="w-full grid grid-cols-2 gap-4 mt-11 pb-28 ">
              <div className="break-words text-balance">
                <h3 className="font-sans px-4 font-bold text-center ">
                  Corporate Address
                </h3>
                <p className="font-sans text-md px-4  text-center ">
                  ASMM Solutions
                </p>
                <p className="font-sans text-md px-4  text-center ">
                  {" "}
                  Korangi 5-1/2 Near zaman town
                </p>
                <p className="font-sans text-md px-4  text-center ">
                  sindh,karachi
                </p>
              </div>
              <div className="break-words text-balance">
                <h3 className="font-sans font-bold px-4  text-center ">
                  Customer Support
                </h3>
                <p className="font-sans text-md px-3  text-center ">
                  Call/Whatsapp:{" "}
                  <Link
                    href="https://api.whatsapp.com/send/?phone=7078073838&text=Hi%2C+I+need+to+enquire+about+products+on+CodesWear&type=phone_number&app_absent=0"
                    target="_main"
                  >
                    <span className="underline text-blue-600 cursor-pointer dark:text-[#59a3fa]">
                      +92 349 2050 746
                    </span>
                  </Link>
                </p>
                <p className="font-sans text-md px-3   text-center ">
                  Email: bilalgul415@gmail.com
                </p>
                <p className="font-sans text-md px-3  text-center ">
                  Morning: 9AM - 6PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 flex  xl:w-[1100px] xl:mx-auto   justify-end gap-5 mb-56">
          <Link href="/">
            <button className="px-5 py-2 bg-black rounded-lg text-white">
              Go Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
