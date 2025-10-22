import { Facebook, Twitter, Instagram } from "lucide-react";

export default function TeamPage() {
  const teamMembers = [
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
    {
      name: "Username",
      company: "Profession",
      image: "/images/TeamPage/team-2.png",
    },
    {
      name: "Jerome Bell",
      company: "IBM",
      image: "/images/TeamPage/team-5.png",
    },
    {
      name: "Brooklyn Simmons",
      company: "eBay",
      image: "/images/TeamPage/team-6.png",
    },
    {
      name: "Ronald Richards",
      company: "Starbucks",
      image: "/images/TeamPage/team-7.png",
    },
    {
      name: "Floyd Miles",
      company: "Facebook",
      image: "/images/TeamPage/team-8.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 bg-[#FAFAFA]">
      <h2 className="text-4xl font-bold text-[#252B42] mb-2 text-center mt-10">
        Meet Our <br /> Team
      </h2>
      <p className="text-[#737373] text-center max-w-[300px] mb-10 text-sm">
        Problems trying to resolve <br className="block lg:hidden" /> the
        conflict between the two major
        <br className="block lg:hidden" />
        realms of classical physics: <br className="block lg:hidden" />
        Newtonian mechanics
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-12 max-w-6xl ">
        {teamMembers.map((member, index) => (
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
    </div>
  );
}
