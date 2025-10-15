import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import LocationCard from "../components/ContactPage/LocationCard";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-6 text-center mt-20 mb-5">
      <h1 className="text-3xl font-extrabold text-[#252B42] mb-4 leading-snug">
        Get answers <br /> to all your <br /> questions.
      </h1>

      <p className="text-[#737373] text-base mb-6 max-w-xs leading-relaxed">
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
          Questions <br /> & Answers
        </h1>

        <p className="text-[#737373] text-base mb-6 max-w-xs leading-relaxed">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>

        <button className="text-[#23A6F0] font-bold text-sm tracking-wide mb-10 hover:underline transition">
          CONTACT US
        </button>
      </div>

      <div
        className="flex flex-col items-center justify-start w-full bg-cover bg-center text-center text-white"
        style={{
          backgroundImage: "url('/images/Contact/contact-us.png')",
          minHeight: "1740px",
        }}
      >
        <h1 className="text-[40px] font-extrabold mt-16 mb-4 leading-snug tracking-wide">
          CONTACT US
        </h1>

        <p className="text-[16px] max-w-[360px] font-semibold leading-relaxed text-center mb-10 text-[#E0E0E0]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        <button className="bg-[#23A6F0] text-white font-semibold px-10 py-4 rounded-md text-m tracking-wide mb-16 hover:bg-[#1d91d8] transition">
          CONTACT US
        </button>

        <div className="flex flex-col items-start space-y-12 text-left text-white px-6 mt-10">
          <LocationCard city="Paris" address="1901 Thorn ridge Cir." />
          <LocationCard
            city="Berlin"
            address="4140 Parker Rd."
            className="mb-50"
          />
          <LocationCard city="New York" address="2715 Ash Dr. San Jose," />
          <LocationCard city="London" address="3517 W. Gray St. Utica," />
        </div>
      </div>

      <div className="flex flex-col w-full bg-[#2A7CC7] items-center justify-center h-[520px]">
        <h2 className="text-lg font-bold text-[#ffffff] mt-5 mb-8 leading-snug">
          WORK WITH US
        </h2>

        <h1 className="text-4xl font-bold text-[#ffffff] mb-4 leading-snug">
          Now Let’s <br /> grow Yours
        </h1>

        <p className="text-[#ffffff] text-base mb-6 max-w-m leading-relaxed max-w-[240px]">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>

        <button className="border text-white font-bold px-10 py-3 rounded-md text-sm tracking-wide mb-10 hover:bg-[#1d91d8] transition">
          Button
        </button>
      </div>
    </div>
  );
}
