import React from 'react';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Microservice Architecture සිංහලෙන්',
    excerpt: 'සරලව පැහැදිලි කරොත් Microservices Architecture එකක් කියන්නෙ අපි ලග තියන මොකක් හෝ software application එකක් එක පාර සම්පුර්ණ ලොකු application එකක් විදිහට හදන් නැතුව කුඩා කුඩා කොටස් කිහිපයකට වෙන් කරලා',
    date: 'Mar 15, 2024',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5n9bpYud478tvbp2TxArV10ZPsDzXLmv0Q4TmReci54uNarwx0BRg_ljTIjLC5Yv6tRd-OwEkGiTqQMWwcf3o8q9fgSc76u3UGNVHesFBooBrvhy5aL9BUV8kfmMtmz-j36ncDcJ5T1iw3SwJpjEKXyAzj_Ljl42zddmd1yvtG3GmH5vZhMfMAjdwIRlF/w508-h305/643fda5329f14368ca72adaf_Example%20of%20a%20microservice.png',
    link:'https://www.blogger.com/blog/post/edit/8514125923631382986/5390360106439228933'
  },
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies in web development for 2024 and beyond.',
    date: 'Mar 10, 2024',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
    link:'https://www.blogger.com/blog/post/edit/8514125923631382986/5390360106439228933'
  },
  {
    title: 'මොනවද මෙ SOLID Principles කියන්නෙ?',
    excerpt: 'SOLID Principle කියන්නෙ Object Oriented Programming System වල පාවිච්චි කරන guide lines. Developer කෙනෙක් විදිහට හෝ Software Engineer කෙනෙක් විදිහට මේවා පිලිපදින එක ඉතා වැදගත්.',
    date: 'Mar 5, 2024',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiibbrQWTM58mZCta-ZFMhiRj0f_PPMtmQlQGpPYqfxBCbGQeLk-0WB3Jz-flWuEE6UT8go-a1AmTu7ZHBR3w-gYngMomWJab9cShgy3HYUNc3MB7Y8WADVeZLYuy28wVg-Aay3vBxd-7Fio0fUhJyMQs_R8cUjCQWV023wn1as1ukgm0JIjSVPAw7XeiBV/w610-h376/image%20(1).jpg',
    link:'https://www.blogger.com/blog/post/edit/8514125923631382986/5390360106439228933'
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
                  href={article.link}
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
