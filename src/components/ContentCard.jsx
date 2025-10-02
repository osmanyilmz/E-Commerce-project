import { Calendar, MessageSquare } from "lucide-react";

export default function ContentCard({
  slides,
  image,
  badge,
  tags = [],
  title,
  description,
  date,
  comments,
  linkLabel,
}) {
  const renderCard = (card, index) => (
    <div
      key={index}
      className="max-w-sm bg-white rounded-lg overflow-hidden shadow"
    >
      <div className="relative">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-48 object-cover"
        />
        {card.badge && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {card.badge}
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex gap-3 text-sm text-gray-500 mb-2">
          {card.tags?.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h3>

        <p className="text-gray-600 text-sm mb-4">{card.description}</p>

        <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={16} className="text-blue-500" />
            <span>{card.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare size={16} className="text-green-500" />
            <span>{card.comments} comments</span>
          </div>
        </div>

        <a
          href="#"
          className="text-blue-600 font-semibold flex items-center gap-1"
        >
          {card.linkLabel} <span>→</span>
        </a>
      </div>
    </div>
  );

  if (slides && slides.length > 0) {
    return (
      <div className="flex flex-col items-center gap-6 px-6 md:px-12 lg:px-20">
        {slides.map(renderCard)}
      </div>
    );
  }

  return renderCard(
    { image, badge, tags, title, description, date, comments, linkLabel },
    0
  );
}
