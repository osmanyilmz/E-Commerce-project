import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Jerome Bell",
      company: "IBM",
      image: "/images/TeamPage/team-1.png",
    },
    {
      name: "Brooklyn Simmons",
      company: "eBay",
      image: "/images/TeamPage/team-2.png",
    },
    {
      name: "Ronald Richards",
      company: "Starbucks",
      image: "/images/TeamPage/team-3.png",
    },
    {
      name: "Floyd Miles",
      company: "Facebook",
      image: "/images/TeamPage/team-7.png",
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

  const secondTeam = [
    {
      name: "Jacob Jones",
      company: "Mitsubishi",
      image: "/images/TeamPage/TeamIcons/icon-1.png",
    },
    {
      name: "Marvin McKinney",
      company: "Mitsubishi",
      image: "/images/TeamPage/TeamIcons/icon-2.png",
    },
    {
      name: "Ronald Richards",
      company: "Mitsubishi",
      image: "/images/TeamPage/TeamIcons/icon-3.png",
    },
    {
      name: "Kathryn Murphy",
      company: "Mitsubishi",
      image: "/images/TeamPage/TeamIcons/icon-4.png",
    },
    {
      name: "Floyd Miles",
      company: "Mitsubishi",
      image: "/images/TeamPage/TeamIcons/icon-5.png",
    },
    {
      name: "Dianne Russell",
      company: "Mitsubishi",
      image: "/images/TeamPage/TeamIcons/icon-6.png",
    },
    {
      name: "Eleanor Pena",
      company: "Mitsubishi",
      image: "/images/TeamPage/TeamIcons/icon-7.png",
    },
    {
      name: "Jenny Wilson",
      company: "Mitsubishi",
      image: "/images/TeamPage/TeamIcons/icon-8.png",
    },
    {
      name: "Devon Lane",
      company: "Mitsubishi",
      image: "/images/TeamPage/TeamIcons/icon-9.png",
    },
  ];

  const thirdTeam = [
    {
      role: "Founder",
      name: "Devon Lane",
      about: "the quick fox jumps over the lazy dog",
      image: "/images/TeamPage/TeamIcons/icon-2.png",
    },
    {
      role: "Founder",
      name: "Savannah Nguyen",
      about: "the quick fox jumps over the lazy dog",
      image: "/images/TeamPage/TeamIcons/icon-6.png",
    },
    {
      role: "Founder",
      name: "Albert Flores",
      about: "the quick fox jumps over the lazy dog",
      image: "/images/TeamPage/TeamIcons/icon-4.png",
    },
    {
      role: "Founder",
      name: "Jerome Bell",
      about: "the quick fox jumps over the lazy dog",
      image: "/images/TeamPage/TeamIcons/icon-3.png",
    },
  ];

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
    {
      name: "Username",
      company: "Profession",
      image: "/images/TeamPage/team-2.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 bg-[#FAFAFA]">
      <h2 className="text-4xl font-bold text-[#252B42] mb-2 text-center">
        Meet Our <br /> Team
      </h2>
      <p className="text-[#737373] text-center max-w-[300px] mb-10 text-sm">
        Problems trying to resolve <br className="block lg:hidden" /> the
        conflict between the two major
        <br className="block lg:hidden" />
        realms of classical physics: <br className="block lg:hidden" />
        Newtonian mechanics
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-12 max-w-6xl">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-[240px] h-[333px] object-cover rounded-md mb-4"
            />
            <h3 className="text-[#252B42] font-bold">{member.name}</h3>
            <p className="text-[#737373] text-sm">{member.company}</p>
          </div>
        ))}
      </div>

      <section className="flex flex-col items-center text-center mt-20">
        <h2 className="text-2xl font-extrabold text-[#252B42] mb-2">
          Meet Our Team
        </h2>
        <p className="text-[#737373] text-center max-w-[340px] mb-10 text-sm">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12 max-w-5xl">
          {secondTeam.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:items-start lg:text-left"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full mb-3"
              />
              <h3 className="text-[#252B42] font-bold">{member.name}</h3>
              <p className="text-[#737373] text-sm">{member.company}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center text-center mt-30 ">
        <h2 className="text-2xl font-extrabold text-[#252B42] mb-2">
          Meet Our Team
        </h2>
        <p className="text-[#737373] text-center max-w-[340px] mb-10 text-sm">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-12 max-w-5xl ">
          {thirdTeam.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:items-start lg:text-left bg-[#ffffff] p-10"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full mb-3"
              />
              <p className="text-[#23A6F0] font-bold text-sm">{member.role}</p>
              <h3 className="text-[#252B42] m-2 font-bold">{member.name}</h3>
              <p className="text-[#737373] max-w-[150px] text-sm">
                {member.about}
              </p>
            </div>
          ))}
        </div>
      </section>

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
    </div>
  );
}
