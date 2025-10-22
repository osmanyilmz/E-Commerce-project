import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

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
    </div>
  );
}
