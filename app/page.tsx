"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your interest! We'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Creative Professional",
      text: "easyWear helped me rediscover pieces I forgot I had. Now I create outfits I actually love wearing every day.",
      avatar: "AC",
    },
    {
      name: "Jordan Taylor",
      role: "Software Engineer",
      text: "As someone who struggles with style, this app is a game-changer. It's like having a personal stylist in my pocket.",
      avatar: "JT",
    },
    {
      name: "Sam Rivera",
      role: "Entrepreneur",
      text: "I've reduced shopping impulses by 70% because easyWear shows me how versatile my wardrobe already is.",
      avatar: "SR",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-violet-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-rose-500 rounded-full flex items-center justify-center transform rotate-12">
              <div className="w-6 h-6 bg-white rounded-sm transform -rotate-12"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
              easyWear
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-amber-600 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-amber-600 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-amber-600 transition-colors duration-300"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-amber-600 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-amber-200 to-rose-200 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Your Personal Styling Assistant
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-violet-600 bg-clip-text text-transparent">
                  Rediscover
                </span>
                <br />
                Your Wardrobe
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Stop staring at a closet full of clothes with nothing to wear.
                easyWear helps you create comfortable, confident outfits from
                what you already own.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Start Styling Now
                </a>
                <a
                  href="#about"
                  className="border-2 border-amber-500 text-amber-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Learn More
                </a>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-amber-600">50k+</div>
                  <div className="text-gray-600">Happy Users</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-rose-600">2M+</div>
                  <div className="text-gray-600">Outfits Created</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/30 to-rose-300/30 rounded-3xl blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 animate-pulse">
                  <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                    <div className="w-full h-40 bg-gradient-to-br from-amber-200 to-amber-300 rounded-xl mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                    <div className="w-full h-32 bg-gradient-to-br from-rose-200 to-rose-300 rounded-xl mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/3"></div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                    <div className="w-full h-32 bg-gradient-to-br from-violet-200 to-violet-300 rounded-xl mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                    <div className="w-full h-40 bg-gradient-to-br from-amber-300 to-rose-300 rounded-xl mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
              Style Made Simple
            </h2>
            <p className="text-xl text-gray-700">
              We believe getting dressed should be effortless and enjoyable.
              easyWear uses smart technology to understand your style
              preferences and create personalized outfit combinations that make
              you feel great.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                <div className="w-8 h-8 border-4 border-white rounded-lg"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                For Everyone
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Gender-inclusive styling that celebrates your unique identity.
                We work with your body, your comfort, and your confidence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-100 to-rose-50 p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Sustainable Choice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Maximize what you own before buying new. Reduce waste, save
                money, and discover the potential hiding in your closet.
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-100 to-violet-50 p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl flex items-center justify-center mb-6 transform rotate-6">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                AI-Powered
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Smart algorithms learn your style, weather preferences, and
                comfort needs to suggest outfits you'll actually want to wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-violet-600 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Powerful features designed to make styling yourself easier,
              faster, and more fun than ever before.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-200">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Digital Wardrobe
              </h3>
              <p className="text-gray-600">
                Snap photos of your clothes and we'll organize them into a
                searchable digital closet.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-rose-200">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Smart Combinations
              </h3>
              <p className="text-gray-600">
                Get personalized outfit suggestions based on occasion, weather,
                and your style preferences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-violet-200">
              <div className="text-4xl mb-4">🌤️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Weather Integration
              </h3>
              <p className="text-gray-600">
                Receive outfit recommendations that match the day's temperature
                and conditions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-200">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Style Learning
              </h3>
              <p className="text-gray-600">
                The more you use it, the better it gets at understanding your
                unique style preferences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-rose-200">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Outfit Calendar
              </h3>
              <p className="text-gray-600">
                Plan your looks ahead of time and never repeat the same outfit
                by accident.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-violet-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Gap Analysis
              </h3>
              <p className="text-gray-600">
                Identify which key pieces could unlock even more outfit
                combinations in your wardrobe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 via-rose-100 to-violet-100"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-violet-600 bg-clip-text text-transparent">
              Loved By Thousands
            </h2>
            <p className="text-xl text-gray-700">
              Real stories from people who transformed their daily dressing
              routine.
            </p>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-rose-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <div className="font-bold text-xl text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>
              <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="flex justify-center space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? "bg-gradient-to-r from-amber-500 to-rose-500 w-12"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">4.9★</div>
              <div className="text-gray-700">App Store Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-600 mb-2">98%</div>
              <div className="text-gray-700">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600 mb-2">
                30min
              </div>
              <div className="text-gray-700">Saved Daily</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
              Ready to Transform Your Wardrobe?
            </h2>
            <p className="text-xl text-gray-700">
              Join thousands of people who've already simplified their morning
              routine.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Tell us about your style goals
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-violet-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="What are you hoping to achieve with easyWear?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Early Access
              </button>
            </form>
            <p className="text-center text-gray-600 mt-6">
              No credit card required. Start styling in minutes.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-rose-500 rounded-full flex items-center justify-center transform rotate-12">
                  <div className="w-6 h-6 bg-white rounded-sm transform -rotate-12"></div>
                </div>
                <span className="text-2xl font-bold">easyWear</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your personal styling assistant for comfortable, confident
                outfits from your existing wardrobe.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 easyWear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}