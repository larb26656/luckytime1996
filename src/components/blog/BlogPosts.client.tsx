import { useEffect, useState } from "react";
import BlogPostsList from "./BlogPostsList";
import { getBlogFeeds } from "@/lib/api/services/blog";
import type { BlogFeed } from "@/lib/api/types/blog";

export default function BlogPostsClient() {
  const [posts, setPosts] = useState<BlogFeed[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getBlogFeeds();
        setPosts(response);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="col-span-2 text-center text-gray-500">
        Loading articles...
      </div>
    );
  }

  if (error) {
    return <div className="col-span-2 text-center text-red-500">{error}</div>;
  }

  return <BlogPostsList posts={posts} />;
}
