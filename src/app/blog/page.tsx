"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/header";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import { blogPosts } from "./data";
import blog from "@/assets/blog.jpg";

export default function BlogPage() {
  return (
    <>
      <NavBar />
      <Header image={blog} title="Blog Page" />
      <section className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts?.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative w-full h-52">
                  <Image
                    src={post?.image}
                    alt={post?.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <p className="text-sm text-gray-500 mb-2">
                    {post.date} • By {post.author}
                  </p>
                  <h2 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                    {post.meta}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-auto text-cyan-600 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
