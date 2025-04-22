import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ success: false, error: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
        .send(serviceId, templateId, emailParams, publicKey)
        .then(() => {
          setStatus({ success: true, error: false });
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus({ success: false, error: false }), 3000); // Reset status after 3s
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          setStatus({ success: false, error: true });
        });
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: "Email", content: "thilinapathumrathnayaka@gmail.com", link: "mailto:thilinapathumrathnayaka@gmail.com" },
    { icon: <Phone className="w-6 h-6" />, title: "Phone", content: "+94 761040031", link: "tel:+94 761040031" },
    { icon: <MapPin className="w-6 h-6" />, title: "Location", content: "Colombo, Sri Lanka", link: "#" },
  ];

  return (
      <section id="contact" className="py-20 bg-gray-50 dark:bg-[#092537]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700/50">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info Section */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                {contactInfo.map((info) => (
                    <a
                        key={info.title}
                        href={info.link}
                        className="group flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-300 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-teal-500 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-sm">{info.content}</p>
                      </div>
                    </a>
                ))}
              </div>

              {/* Form Section */}
              <div className="relative">
                {status.success && (
                    <div className="absolute -top-12 left-0 right-0 bg-green-500/10 text-green-600 dark:text-green-400 p-3 rounded-lg text-center animate-fade-in">
                      Message sent successfully!
                    </div>
                )}
                {status.error && (
                    <div className="absolute -top-12 left-0 right-0 bg-red-500/10 text-red-600 dark:text-red-400 p-3 rounded-lg text-center animate-fade-in">
                      Failed to send message. Please try again.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  className="space-y-6"
>
  <motion.div variants={itemVariants}>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      required
      placeholder="Your Name"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
    />
  </motion.div>

  <motion.div variants={itemVariants}>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      required
      placeholder="Your Email"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
    />
  </motion.div>

  <motion.div variants={itemVariants}>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      required
      placeholder="Your Message"
      rows={4}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 resize-none"
    />
  </motion.div>

  <motion.div variants={itemVariants}>
    <button
      type="submit"
      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 group"
    >
      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      <span>Send Message</span>
    </button>
  </motion.div>
</motion.div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}