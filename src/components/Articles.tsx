import React from 'react';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Building Scalable React Applications',
    excerpt: 'Learn best practices for building large-scale React applications with modern architecture.',
    date: 'Mar 15, 2024',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies in web development for 2024 and beyond.',
    date: 'Mar 10, 2024',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Mastering TypeScript',
    excerpt: 'A comprehensive guide to using TypeScript effectively in your projects.',
    date: 'Mar 5, 2024',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Articles() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-teal-500 dark:text-teal-400">
                  {article.date}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900 dark:text-white">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}