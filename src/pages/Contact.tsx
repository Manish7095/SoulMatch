import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503424886307-b090341d25d3?q=80&w=1920&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white z-10 px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="mt-3 text-lg md:text-xl">
            We’d love to hear from you. Let’s connect and create something
            amazing together.
          </p>
        </motion.div>
      </div>

      {/* Contact Content */}
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-16 py-12 gap-10">
        {/* Left - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-2xl p-8 md:w-2/3"
        >
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between md:w-1/3 space-y-8"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-md rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-3">
              📍 123 Innovation Street, Ahmedabad, India
            </p>
            <p className="mb-3">📞 +91 98765 43210</p>
            <p>📧 contact@company.com</p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-md h-64">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6323325085826!2d72.87765531542362!3d23.030513984953695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f0f1234567%3A0xa1b2c3d4e5f6789!2sAhmedabad!5e0!3m2!1sen!2sin!4v1699272359334!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-6"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Let’s Build Something Great Together 🚀
        </h2>
        <p className="text-white/90 mb-6">
          Reach out today and take the first step towards collaboration.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Start a Conversation
        </button>
      </motion.div>
    </div>
  );
};

export default Contact;
