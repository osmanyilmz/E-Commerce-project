export default function Icons() {
  const icons = ["hooli", "lyft", "pied-piper-hat", "stripe", "aws", "reddit"];

  return (
    <div className="flex justify-center bg-[#FAFAFA] p-8">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:flex-wrap lg:gap-20">
        {icons.map((icon) => (
          <img
            key={icon}
            src={`/images/icons/${icon}.png`}
            alt={icon}
            className="w-30 h-25 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
