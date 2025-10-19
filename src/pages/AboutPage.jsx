import { Facebook, Twitter, Instagram, Play, X } from "lucide-react";
import Icons from "../components/common/Icons";
import { useState } from "react";

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);

  const fourthComp = [
    {
      name: "Gökhan Özdemir",
      company: "Project Manager",
      image: "/images/TeamPage/team-1.png",
    },
    {
      name: "Osman Yılmaz",
      company: "Full Stack Developer",
      image: "/images/TeamPage/team-7.png",
    },
    {
      name: "Username",
      company: "Profession",
      image: "/images/TeamPage/team-3.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center px-6 py-16 bg-[#ffffff]">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full px-6 lg:px-85 py-16 bg-white">
          <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left">
            <h4 className="text-lg font-bold text-[#252B42] mb-10 tracking-wider">
              ABOUT COMPANY
            </h4>

            <h1 className="text-3xl font-extrabold text-[#252B42] mb-4 leading-snug">
              ABOUT US
            </h1>

            <p className="text-[#737373] text-base mb-6 max-w-md lg:max-w-none leading-relaxed">
              We know how large <br className="block lg:hidden" />
              objects will act, <br className="hidden lg:block" /> but things
              <br className="block lg:hidden" /> on a small scale just do
              <br className="block lg:hidden" /> not act that way.
            </p>

            <button className="bg-[#23A6F0] text-white font-bold px-8 py-3 rounded-md text-sm tracking-wide hover:bg-[#1d91d8] transition w-fit mx-auto lg:mx-0">
              Get Quote Now
            </button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-center mt-10 lg:mt-0">
            <img
              src="/images/AboutPage/about-1.png"
              alt="Work with us"
              className="w-[300px] h-auto lg:w-[500px] lg:h-[440px] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start justify-center text-white text-center lg:text-left w-full lg:w-[66%] px-8 py-16">
          <h2 className="text-lg font-semibold mb-6 leading-snug text-[#E74040] lg:self-start">
            Problems trying
          </h2>

          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10">
            <h3 className="text-xl font-bold mb-4 lg:mb-0 leading-snug text-[#252B42] mb-20">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>

            <p className="text-base font-semibold text-[#737373] text-left">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full px-6 py-10 lg:px-20 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl text-center lg:text-left space-y-20 lg:space-y-0 lg:space-x-10 mt-10 mb-20">
            <div>
              <h2 className="text-6xl font-bold text-[#252B42]">15K</h2>
              <p className="text-[#737373] font-medium">Happy Customers</p>
            </div>
            <div>
              <h2 className="text-6xl font-bold text-[#252B42]">150K</h2>
              <p className="text-[#737373] font-medium">Monthly Visitors</p>
            </div>
            <div>
              <h2 className="text-6xl font-bold text-[#252B42]">15</h2>
              <p className="text-[#737373] font-medium">Countries Worldwide</p>
            </div>
            <div>
              <h2 className="text-6xl font-bold text-[#252B42]">100+</h2>
              <p className="text-[#737373] font-medium">Top Partners</p>
            </div>
          </div>

          <div className="relative w-[307px] h-[316px] lg:w-[600px] lg:h-[350px] rounded-2xl overflow-hidden shadow-md mb-10">
            <img
              src="/images/AboutPage/video-image.jpg"
              alt="Video preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="w-14 h-14 lg:w-20 lg:h-20 bg-[#23A6F0] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1f8bd6] transition"
              >
                <Play className="text-white w-7 h-7 lg:w-9 lg:h-9" />
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
              <div className="relative w-11/12 max-w-3xl aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
                  title="Video player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>

                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
        </div>

        <h2 className="text-4xl font-bold text-[#252B42] mb-2 text-center">
          Meet Our <br className="block lg:hidden" /> Team
        </h2>
        <p className="text-[#737373] text-center max-w-[360px]  text-sm">
          Problems trying to resolve <br className="block lg:hidden" /> the
          conflict between the two major
          <br className="block lg:hidden" />
          realms of classical physics: <br className="block lg:hidden" />
          Newtonian mechanics
        </p>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12 max-w-6xl mb-10">
          {fourthComp.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center mt-10 bg-[#ffffff] "
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-[350px] h-[400px] object-cover  mb-4"
              />
              <h3 className="text-[#252B42] font-bold mt-5 mb-5">
                {member.name}
              </h3>
              <p className="text-[#737373] text-sm mb-5">{member.company}</p>

              <div className="flex space-x-6 mb-5">
                <Facebook className="w-6 h-6 text-[#335BF5]  cursor-pointer hover:text-[#66B3FF] transition" />
                <Instagram className="w-6 h-6 text-[#E51F5A] cursor-pointer hover:text-[#66B3FF] transition" />
                <Twitter className="w-6 h-6 text-[#21A6DF]  cursor-pointer hover:text-[#66B3FF] transition" />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#FAFAFA] px-86 py-20">
          <h2 className="text-6xl font-bold text-[#252B42] mb-2 text-center mb-10 ">
            Big <br className="block lg:hidden" /> Companies
            <br className="block lg:hidden" /> Are Here
          </h2>
          <p className="text-[#737373] text-center  text-sm">
            Problems trying to resolve the conflict
            <br className="block lg:hidden" /> between
            <br className="hidden lg:block" /> the two major realms of classical
            <br className="block lg:hidden" />
            physics: Newtonian mechanics
          </p>
          <Icons />
        </div>

        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[636px]">
          <div className="flex flex-col items-center lg:items-start justify-center bg-[#2A7CC7] text-white text-center lg:text-left w-full lg:w-[60%] px-8 lg:px-24 py-16">
            <h2 className="text-lg font-bold mb-6 leading-snug">
              WORK WITH US
            </h2>

            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Now Let’s <br className="block lg:hidden" /> grow Yours
            </h1>

            <p className="text-base mb-8 leading-relaxed max-w-[420px]">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>

            <button className="border border-white text-white font-bold px-10 py-3 rounded-md text-sm tracking-wide hover:bg-[#1d91d8] transition">
              Button
            </button>
          </div>

          <div className="w-full lg:w-[40%]">
            <img
              src="/images/AboutPage/grow-business.jpg"
              alt="Work with us"
              className="w-full h-[636px] object-cover hidden lg:block"
            />
          </div>
        </div>
      </div>
    </>
  );
}
