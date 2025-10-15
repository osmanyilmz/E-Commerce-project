export default function LocationCard({ city, address, className = "" }) {
  const zip = "75000 Paris";
  const phone = "+451 215 215";
  const fax = "+451 215 215";

  return (
    <div className={`flex flex-col font-bold ${className}`}>
      <h2 className="text-[24px] font-bold mb-4 ">{city}</h2>
      <p className="text-[20px] mb-4 max-w-[200px]">{address}</p>
      <div className="h-[2px] w-15 bg-[#23A6F0] mb-4"></div>
      <p className="text-[16px] text-[#ECECEC] mb-4">{zip}</p>
      <p className="text-[16px] text-[#ECECEC] mb-4">Phone : {phone}</p>
      <p className="text-[16px] text-[#ECECEC]">Fax : {fax}</p>
    </div>
  );
}
