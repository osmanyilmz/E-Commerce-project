import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import LocationCard from "../components/ContactPage/LocationCard";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-6 text-center mt-20 mb-5">
      <h1 className="text-3xl font-extrabold text-[#252B42] mb-4 leading-snug">
        Get answers <br className="block lg:hidden" /> to all your{" "}
        <br className="block lg:hidden" /> questions.
      </h1>

      <p className="text-[#737373] text-base mb-6 max-w-xs leading-relaxed lg:max-w-md">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics:
      </p>

      <button className="bg-[#23A6F0] text-white font-bold px-8 py-3 rounded-md text-sm tracking-wide mb-10 hover:bg-[#1d91d8] transition">
        CONTACT OUR COMPANY
      </button>

      <div className="flex space-x-6 text-[#BDBDBD]">
        <Twitter className="w-8 h-8 cursor-pointer hover:text-[#23A6F0] transition" />
        <Facebook className="w-8 h-8  cursor-pointer hover:text-[#23A6F0] transition" />
        <Instagram className="w-8 h-8  cursor-pointer hover:text-[#23A6F0] transition" />
        <Linkedin className="w-8 h-8  cursor-pointer hover:text-[#23A6F0] transition" />
      </div>

      <div
        className="flex flex-col items-center justify-center w-full bg-cover bg-center text-center mt-20 min-h-[468px]"
        style={{
          backgroundImage: "url('/images/Contact/question-and-answers.jpg')",
        }}
      >
        <h1 className="text-3xl font-extrabold text-[#252B42] mb-4 leading-snug">
          Questions <br className="block lg:hidden" /> & Answers
        </h1>

        <p className="text-[#737373] text-base mb-6 max-w-xs leading-relaxed lg:max-w-md">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>

        <button className="text-[#23A6F0] font-bold text-sm tracking-wide mb-10 hover:underline transition">
          CONTACT US
        </button>
      </div>

      <div
        className="flex flex-col items-center justify-center w-full bg-cover bg-center text-white min-h-[1740px] lg:min-h-[740px]"
        style={{
          backgroundImage: "url('/images/Contact/contact-us.png')",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl w-full gap-20">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md">
            <h1 className="text-[40px] font-extrabold mb-4 leading-snug tracking-wide">
              CONTACT US
            </h1>

            <p className="text-[16px] font-semibold leading-relaxed mb-10 text-[#E0E0E0]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>

            <button className="bg-[#23A6F0] text-white font-semibold px-10 py-4 rounded-md text-m tracking-wide hover:bg-[#1d91d8] transition">
              CONTACT US
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            <LocationCard city="Paris" address="1901 Thorn ridge Cir." />
            <LocationCard city="Berlin" address="4140 Parker Rd." />
            <LocationCard city="New York" address="2715 Ash Dr. San Jose," />
            <LocationCard city="London" address="3517 W. Gray St. Utica," />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[636px]">
        <div className="flex flex-col items-center lg:items-start justify-center bg-[#2A7CC7] text-white text-center lg:text-left w-full lg:w-1/2 px-8 lg:px-24 py-16">
          <h2 className="text-lg font-bold mb-6 leading-snug">WORK WITH US</h2>

          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Now Let’s <br className="block lg:hidden" /> grow Yours
          </h1>

          <p className="text-base mb-8 leading-relaxed max-w-[420px]">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>

          <button className="border border-white text-white font-bold px-10 py-3 rounded-md text-sm tracking-wide hover:bg-[#1d91d8] transition">
            Button
          </button>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src="/images/ShopCards/card-cover-3.jpg"
            alt="Work with us"
            className="w-full h-[636px] object-cover hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
