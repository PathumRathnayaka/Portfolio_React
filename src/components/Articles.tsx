import React from 'react';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Microservice Architecture සිංහලෙන්',
    excerpt: 'සරලව පැහැදිලි කරොත් Microservices Architecture එකක් කියන්නෙ අපි ලග තියන මොකක් හෝ software application එකක් එක පාර සම්පුර්ණ ලොකු application එකක් විදිහට හදන් නැතුව කුඩා කුඩා කොටස් කිහිපයකට වෙන් කරලා',
    date: 'Mar 15, 2024',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5n9bpYud478tvbp2TxArV10ZPsDzXLmv0Q4TmReci54uNarwx0BRg_ljTIjLC5Yv6tRd-OwEkGiTqQMWwcf3o8q9fgSc76u3UGNVHesFBooBrvhy5aL9BUV8kfmMtmz-j36ncDcJ5T1iw3SwJpjEKXyAzj_Ljl42zddmd1yvtG3GmH5vZhMfMAjdwIRlF/w508-h305/643fda5329f14368ca72adaf_Example%20of%20a%20microservice.png',
    link: 'https://www.blogger.com/blog/post/edit/8514125923631382986/5390360106439228933'
  },
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies in web development for 2024 and beyond.',
    date: 'Mar 10, 2024',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
    link: 'https://www.blogger.com/blog/post/edit/8514125923631382986/5390360106439228933'
  },
  {
    title: 'මොනවද මෙ SOLID Principles කියන්නෙ?',
    excerpt: 'SOLID Principle කියන්නෙ Object Oriented Programming System වල පාවිච්චි කරන guide lines. Developer කෙනෙක් විදිහට හෝ Software Engineer කෙනෙක් විදිහට මේවා පිලිපදින එක ඉතා වැදගත්.',
    date: 'Mar 5, 2024',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiibbrQWTM58mZCta-ZFMhiRj0f_PPMtmQlQGpPYqfxBCbGQeLk-0WB3Jz-flWuEE6UT8go-a1AmTu7ZHBR3w-gYngMomWJab9cShgy3HYUNc3MB7Y8WADVeZLYuy28wVg-Aay3vBxd-7Fio0fUhJyMQs_R8cUjCQWV023wn1as1ukgm0JIjSVPAw7XeiBV/w610-h376/image%20(1).jpg',
    link: 'https://www.blogger.com/blog/post/edit/8514125923631382986/5390360106439228933'
  },
];

export default function Articles() {
  return (
      <section className="py-20 bg-gray-50 dark:bg-[#092537]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white group relative">
  <span
      className="relative z-10 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent hover:from-teal-600 hover:to-blue-600 transition-all duration-300">
    Articles
  </span>
            <span
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            <span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
                <article
                    key={article.title}
                    className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg dark:shadow-xl hover:shadow-teal-500/20 dark:hover:shadow-teal-500/10"
                >
                  {/* Decorative top gradient */}
                  <div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Image section */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent dark:from-gray-900/80 dark:via-gray-900/40" />
                    {/* Date badge */}
                    <div className="absolute top-4 left-4 bg-teal-500/20 text-teal-600 dark:text-teal-300 px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                      {article.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <a
                        href={article.link}
                        className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 group/link"
                    >
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                </article>
            ))}
          </div>
        </div>
      </section>
  );
}