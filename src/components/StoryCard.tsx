import Image from "next/image";

interface StoryCardProps {
  title: string;
  imageUrl: string;
}

export default function StoryCard({ title, imageUrl }: StoryCardProps) {
  return (
    <a
      href="https://gemini.google.com/share/d46552ad738f"
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col h-full transition hover:shadow-md hover:-translate-y-1 duration-150">
        <div className="p-3 flex-grow flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={400}
            className="object-contain h-48 w-full rounded-lg"
            priority
          />
        </div>
        <div className="px-3 pb-3 text-center">
          <h3
            className="font-semibold text-base text-gray-800 truncate"
            title={title}
          >
            {title}
          </h3>
        </div>
      </div>
    </a>
  );
}
