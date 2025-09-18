"use client";

import Link from "next/link";
import Card from "@/components/ui/card";
import { motion } from "motion/react";
import type { Post } from "@/types/posts";

interface PostCardProps {
  post: Post;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/posts/${post.id}`}>
        <Card hover className="h-full">
          <div className="mb-3 flex items-start justify-between">
            <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs">
              Post #{post.id}
            </span>
            <span className="text-muted-foreground text-xs">
              User {post.userId}
            </span>
          </div>
          <h3 className="text-foreground mb-3 line-clamp-2 text-lg font-semibold capitalize">
            {post.title}
          </h3>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {post.body}
          </p>
          <div className="border-border mt-4 border-t pt-4">
            <span className="text-primary hover:text-primary/80 text-xs font-medium">
              Read more →
            </span>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
