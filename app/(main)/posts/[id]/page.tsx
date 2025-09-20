"use client";

import Card from "@/components/ui/card";

import ErrorMessage from "@/components/ui/error-message";
import Link from "next/link";
import { use } from "react";
import type { Post } from "@/types/posts";
import { useFetch } from "@/hooks/useFetch";
import { motion } from "motion/react";
import PostDetailSkeleton from "@/components/posts/post-detail-skeleton";
import { fadeInUp } from "@/lib/fade";

interface PostDetailPageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default function PostDetailPage({ params }: PostDetailPageProps) {
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const {
    data: post,
    loading,
    error,
    refetch,
  } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${resolvedParams.id}`,
  );

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <PostDetailSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <ErrorMessage message={error} onRetry={refetch} />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="p-8">
        <ErrorMessage message="Post not found" />
      </div>
    );
  }

  return (
    <div className="relative z-10 w-full flex-1 overflow-auto">
      <main className="w-full px-4 py-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="mb-6">
          <Link
            href="/posts"
            className="text-primary hover:text-primary/80 mb-4 inline-block text-sm font-medium"
          >
            ← Back to Posts
          </Link>
          <div className="mb-4 flex items-center gap-4">
            <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
              Post #{post.id}
            </span>
            <span className="text-muted-foreground text-xs">
              User {post.userId}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <h1 className="text-foreground mb-6 text-xl font-bold capitalize md:text-3xl">
              {post.title}
            </h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-foreground text-sm leading-relaxed md:text-lg">
                {post.body}
              </p>
            </div>

            <div className="border-border mt-8 border-t pt-6">
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground text-sm">
                  Published by User {post.userId}
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                  >
                    Like
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                  >
                    Share
                  </motion.button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
