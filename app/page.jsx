import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-20">
        <div className="space-y-20">
          {/* Hero Section */}
          <section className="space-y-6">
            <h1 className="text-6xl font-light tracking-tight text-neutral-900">
                My
            </h1>
            <h1 className="text-6xl font-light tracking-tight text-neutral-900">
              Posts, Thoughts, and Ideas
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl pt-4">
              Heng Wang | Design Engineer | 2024
            </p>
          </section>

          {/* Featured Posts Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((post) => (
              <Link 
                key={post} 
                href={`/blog/post-${post}`}
                className="group space-y-4 hover:opacity-95 transition-opacity"
              >
                <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/28922850/pexels-photo-28922850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    alt="Post thumbnail"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 right-4">
                    <ArrowUpRight className="text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-neutral-900">
                    The Art of Clean Code
                  </h3>
                  <p className="text-neutral-600 line-clamp-2">
                    Exploring principles and practices that make code more maintainable and elegant.
                  </p>
                  <div className="flex gap-3">
                    <span className="text-sm text-neutral-500">Programming</span>
                    <span className="text-sm text-neutral-500">5 min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </section>

          {/* Newsletter Section */}
          <section className="border-t border-neutral-200 pt-20">
            <div className="max-w-xl space-y-4">
              <h2 className="text-2xl font-medium text-neutral-900">
                Subscribe to my newsletter
              </h2>
              <p className="text-neutral-600">
                Get notified when I publish new articles. No spam, unsubscribe at any time.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
                <button className="px-6 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
