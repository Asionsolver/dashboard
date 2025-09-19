"use client";

import PostCard from "@/components/posts/post-card";
import PostCardSkeleton from "@/components/posts/post-card-skeleton";
import ErrorMessage from "@/components/ui/error-message";

import { useFetch } from "@/hooks/useFetch";
import { fadeInUp } from "@/lib/fade";
import type { Post } from "@/types/posts";
import { motion } from "motion/react";

const Post = () => {
  const {
    data: posts,
    loading,
    error,
    refetch,
  } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

  if (error) {
    return (
      <div className="p-8">
        <ErrorMessage message={error} onRetry={refetch} />
      </div>
    );
  }

  return (
    <div className="relative z-10 w-full flex-1">
      <main className="w-full px-4 py-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="mb-8">
          <h1 className="text-foreground mb-2 text-4xl font-bold">Posts</h1>
          <p className="text-muted-foreground text-lg">
            Browse through all posts from our community
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }, (_, i) => (
              <PostCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {posts?.map((post) => (
              <PostCard key={post.id} post={post} index={post.id} />
            ))}
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Post;
