"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const form = e.target;

    // EmailJS configuration
    const serviceID = "service_waepeh5"; // Replace with your EmailJS service ID
    const templateID = "template_b7wpuqc"; // Replace with your EmailJS template ID
    const publicKey = "j4CpHjd5na7bcyu7L"; // Replace with your EmailJS public key

    try {
      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        form,
        publicKey
      );

      console.log('Email sent successfully:', result.text);
      setEmailSubmitted(true);
      form.reset();
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setEmailSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <div className="bg-gradient-to-br from-[#1a1b23] to-[#0f1015] p-8 rounded-2xl border border-[#33353F] backdrop-blur-sm">
          <h5 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-8 max-w-md leading-relaxed">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you soon!
          </p>
          
          {/* Contact Information */}
          <div className="mb-8 space-y-4">
            <a href="mailto:aparnakanatil2002@gmail.com" className="group flex items-center space-x-4 p-3 rounded-lg hover:bg-[#1a1b23] transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-[#ADB7BE] text-sm group-hover:text-primary-400 transition-colors">aparnakanatil2002@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+919876543210" className="group flex items-center space-x-4 p-3 rounded-lg hover:bg-[#1a1b23] transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-[#ADB7BE] text-sm group-hover:text-blue-400 transition-colors">+91 7736687228</p>
              </div>
            </a>
            
            <div className="group flex items-center space-x-4 p-3 rounded-lg hover:bg-[#1a1b23] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-[#ADB7BE] text-sm group-hover:text-green-400 transition-colors">Kochi, Kerala</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-[#33353F] pt-6">
            {/* <p className="text-white font-medium mb-4">Follow me</p> */}
            <div className="socials flex flex-row gap-4">
              <Link href="https://github.com/aparnaappu2002" target="_blank" rel="noopener noreferrer">
                <div className="p-3 bg-[#1a1b23] rounded-lg border border-[#33353F] hover:border-primary-500 hover:bg-gradient-to-br hover:from-primary-500/10 hover:to-primary-700/10 transition-all duration-300 group">
                  <Image src={GithubIcon} alt="Github Icon" className="group-hover:scale-110 transition-transform duration-300" />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/aparna-shaju" target="_blank" rel="noopener noreferrer">
                <div className="p-3 bg-[#1a1b23] rounded-lg border border-[#33353F] hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-blue-700/10 transition-all duration-300 group">
                  <Image src={LinkedinIcon} alt="Linkedin Icon" className="group-hover:scale-110 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Success Message */}
        {emailSubmitted && (
          <div className="bg-green-900/20 border border-green-500 rounded-lg p-4 mb-6">
            <p className="text-green-400 text-sm">
  ✅ Email sent successfully! I&apos;ll get back to you soon.
</p>

          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-6">
            <p className="text-red-400 text-sm">
              ❌ {error}
            </p>
          </div>
        )}

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="from_email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email *
            </label>
            <input
              name="from_email"
              type="email"
              id="from_email"
              required
              disabled={isLoading}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject *
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              disabled={isLoading}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message *
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              disabled={isLoading}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed resize-vertical"
              placeholder="Let's talk about..."
            />
          </div>
          {/* Hidden field for recipient email */}
          <input type="hidden" name="to_email" value="aparnakanatil2002@gmail.com" />
          
          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;