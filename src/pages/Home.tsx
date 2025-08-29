import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../img/bg.png";
import { useState } from "react";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [gender, setGender] = useState("all");
    const [ageRange, setAgeRange] = useState("all");

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/profilesearch", {
            state: { searchTerm, gender, ageRange },
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center px-4 py-6">
            {/* Hero Section */}
            <div
                className="relative w-full flex flex-col items-center justify-center text-center py-16 md:py-20 lg:py-28 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-pink-900/40 to-blue-800/40" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 max-w-xl md:max-w-2xl text-white px-4"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug">
                        Find Your <br /> Perfect Life Partner
                    </h1>
                    <p className="mt-4 text-sm sm:text-base md:text-lg">
                        Join thousands of happy couples who found love through our trusted matchmaking platform. Your journey to happily ever after starts here!
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-6 sm:px-8 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition"
                    >
                        <Link to="/signup">Join Now</Link>
                    </motion.button>
                </motion.div>
            </div>

            {/* Search Box */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="relative z-10 bg-white shadow-md rounded-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-4 -mt-8 w-full max-w-3xl"
            >
                <input
                    type="text"
                    placeholder="Search by name, city or interest"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-full border border-gray-200 focus:outline-none text-sm md:text-base"
                />
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="px-3 py-2 rounded-full border border-gray-200 text-sm md:text-base"
                >
                    <option value="all">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <select
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                    className="px-3 py-2 rounded-full border border-gray-200 text-sm md:text-base"
                >
                    <option value="all">Age Range</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46+">46+</option>
                </select>
                <button
                    onClick={handleSearch}
                    className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition text-sm md:text-base"
                >
                    Search
                </button>
            </motion.div>

            {/* Features */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 md:mt-16 w-full max-w-5xl text-center"
            >
                {[
                    { icon: "💞", title: "Personalized Matchmaking", desc: "Find your perfect soulmate with our expert matchmaking system." },
                    { icon: "💍", title: "Wedding Planning Guidance", desc: "Get tips and support to plan a dream wedding." },
                    { icon: "🧑‍⚕️", title: "Relationship Counseling", desc: "Professional advice to strengthen your bond." },
                    { icon: "🎉", title: "Exclusive Social Events", desc: "Meet singles at curated events and gatherings." },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                    >
                        <span className="text-4xl">{item.icon}</span>
                        <h3 className="mt-2 font-bold text-lg text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* About Section */}
            <section className="mt-16 md:mt-20 max-w-5xl text-center px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-pink-700">About Us</h2>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                    We are committed to creating meaningful connections and helping you find a life partner who truly complements you. Our platform combines modern technology with personalized support to make your journey to love smooth and enjoyable.
                </p>
                <Link
                    to="/about"
                    className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-sm sm:text-base"
                >
                    Learn More
                </Link>
            </section>

            {/* Success Stories */}
            <section className="mt-16 md:mt-20 max-w-6xl w-full px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-700">
                    Success Stories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                    {[
                        { name: "Ravi & Priya", story: "Met through our platform and tied the knot in 2023!" },
                        { name: "Amit & Neha", story: "A true love story that started with a single click." },
                        { name: "Karan & Meera", story: "Now happily married with two kids and a loving home!" },
                    ].map((couple, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.03 }}
                            className="p-6 bg-white shadow rounded-xl text-center"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                                alt="couple"
                                className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 object-contain"
                            />
                            <h3 className="font-bold text-base md:text-lg">{couple.name}</h3>
                            <p className="text-gray-600 text-sm">{couple.story}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Membership Plans */}
            <section className="mt-16 md:mt-20 max-w-6xl w-full text-center px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-pink-700">Membership Plans</h2>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                    Choose the plan that fits your journey to love. Enjoy exclusive features, priority matches, and premium support.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                    {[
                        { title: "Basic", price: "₹499/month", features: ["Profile Access", "Basic Search", "Limited Matches"] },
                        { title: "Premium", price: "₹999/month", features: ["Priority Matches", "Direct Messaging", "Advanced Search"] },
                        { title: "Elite", price: "₹1999/month", features: ["Exclusive Events", "VIP Support", "Unlimited Matches"] },
                    ].map((plan, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 bg-white shadow-lg rounded-xl"
                        >
                            <h3 className="text-lg md:text-xl font-bold text-gray-800">{plan.title}</h3>
                            <p className="text-pink-600 font-bold text-xl md:text-2xl mt-2">{plan.price}</p>
                            <ul className="mt-4 text-gray-600 space-y-2 text-sm md:text-base">
                                {plan.features.map((features, i) => (
                                    <li key={i}>✅ {features}</li>
                                ))}
                            </ul>
                            <button className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition text-sm md:text-base">
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="mt-16 md:mt-20 max-w-6xl w-full px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-700">
                    What Our Members Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {[
                        { name: "Sneha", feedback: "The platform helped me find my soulmate in just 3 months! Truly life-changing." },
                        { name: "Rahul", feedback: "Easy to use with lots of genuine profiles. I found my perfect match here." },
                    ].map((user, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="p-6 bg-white shadow-md rounded-xl"
                        >
                            <p className="text-gray-600 italic text-sm md:text-base">"{user.feedback}"</p>
                            <h3 className="mt-4 font-bold text-gray-800 text-sm md:text-base">
                                - {user.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="mt-16 md:mt-20 mb-12 md:mb-16 text-center px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-pink-700">
                    Ready to Find Your Perfect Partner?
                </h2>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                    Sign up today and start your journey towards love, companionship, and a happily ever after.
                </p>
                <Link
                    to="/signup"
                    className="mt-6 inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition text-sm md:text-base"
                >
                    Get Started Now
                </Link>
            </section>
        </div>
    );
};

export default Home;
