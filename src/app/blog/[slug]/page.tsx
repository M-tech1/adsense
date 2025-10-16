"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Link from "next/link";
import { blogPosts } from "../data";
import blog from "@/assets/blog.jpg";

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <h2 className="text-2xl font-semibold text-gray-600">
          Blog post not found
        </h2>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <Header image={blog} title={post?.title} />
      <motion.section
        className="max-w-4xl mx-auto px-6 py-16 bg-gray-50 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-10">
          <Image
            src={post?.image}
            alt={post?.title}
            fill
            className="object-cover"
          />
        </div>

        <p className="text-sm text-gray-500 mb-6">
          {post.date} • By {post.author}
        </p>

        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
        </article>

        <div className="mt-10">
          <Link
            href="/blog"
            className="text-cyan-600 font-semibold hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
