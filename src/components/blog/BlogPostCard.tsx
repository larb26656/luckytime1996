import { formatDate } from "@/lib/utils/date";
import Typo from "../typo/Typo";

interface BlogPostCardProps {
  title: string;
  description: string;
  thumbnail?: string;
  date?: string;
  link: string;
}

export default function BlogPostCard({
  title,
  description,
  thumbnail,
  date,
  link,
}: BlogPostCardProps) {
  return (
    <div className="border border-tertiary rounded-md p-4 flex flex-col lg:flex-row gap-4 h-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      {thumbnail && (
        <a href={link}>
          <img
            src={thumbnail}
            alt=""
            className="rounded-md w-full lg:w-[200px]"
          />
        </a>
      )}

      <div className="flex-1 flex flex-col">
        <Typo variant="h3" color="primary" className="mb-2">
          <a href={link} className="text-primary hover:underline">
            {title}
          </a>
        </Typo>

        {date && (
          <Typo variant="tertiary" className="mb-2">
            {formatDate(date)}
          </Typo>
        )}

        <Typo
          variant="normal"
          className="line-clamp-2 text-ellipsis overflow-hidden"
        >
          {description}
        </Typo>
      </div>
    </div>
  );
}
