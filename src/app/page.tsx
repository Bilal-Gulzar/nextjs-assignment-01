import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[100vh] bg-[#f5f5f5] flex justify-center flex-col gap-10 items-center">
      <Link href="/">
        <h1 className="text-3xl font-medium underline tracking-wider">
          Home Page{" "}
        </h1>
      </Link>

      <div className="w-[92%] sm:w-[380px] shadow-md flex flex-col justify-center px-5 gap-10  relative bg-white h-[300px] rounded-lg">
        <Link href="/about">
          <div className="bg-black w-full rounded-lg text-white py-3 tracking-wider text-lg flex justify-center items-center">
            About
          </div>
        </Link>

        <Link href="/contact">
          <div className="bg-black w-full text-white rounded-lg py-3 tracking-wider flex justify-center items-center">
            contact
          </div>
        </Link>

        <Link href="/service">
          <div className="bg-black w-full text-white py-3 rounded-lg flex tracking-wider justify-center items-center">
            service
          </div>
        </Link>
      </div>
    </div>
  );
}
