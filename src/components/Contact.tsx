import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

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
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                    <a key={info.title} href={info.link} className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400">
                      <div className="w-12 h-12 bg-teal-500/10 dark:bg-teal-500/5 rounded-lg flex items-center justify-center text-teal-500">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{info.title}</h4>
                        <p>{info.content}</p>
                      </div>
                    </a>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              {status.success && <p className="text-green-500 mb-4">Message sent successfully!</p>}
              {status.error && <p className="text-red-500 mb-4">Failed to send message.</p>}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent dark:bg-gray-700" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent dark:bg-gray-700" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent dark:bg-gray-700" />
                </div>

                <button type="submit" className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors">
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}