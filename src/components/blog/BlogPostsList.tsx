import BlogPostCard from "./BlogPostCard";
import Typo from "../typo/Typo";
import type { BlogFeed } from "@/lib/api/types/blog";

interface BlogPostsListProps {
  posts: BlogFeed[];
}

export default function BlogPostsList({ posts }: BlogPostsListProps) {
  return (
    <div className="flex flex-col gap-4">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <BlogPostCard
            key={index}
            title={post.title}
            description={post.description}
            link={post.link}
            date={post.date}
            thumbnail={post.thumbnail}
          />
        ))
      ) : (
        <Typo variant="tertiary" className="text-center">
          No articles found
        </Typo>
      )}
    </div>
  );
}
