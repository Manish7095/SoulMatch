import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// High-quality royalty-free images (Unsplash/Pexels)
const IMAGES = {
    hero:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop",
    about:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
    values: [
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop", // teamwork & unity
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop", // innovation / ideas
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop", // growth & vision
    ],

    team: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop", // woman portrait
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop", // man portrait
        "https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=400&auto=format&fit=crop", // woman portrait
    ],
    stories: [
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=400&auto=format&fit=crop",
    ],
};

const About = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
            {/* Hero Section */}
            <div
                className="relative w-full flex flex-col items-center justify-center text-center py-20 md:py-28 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${IMAGES.hero})`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-pink-900/40 to-blue-800/50" />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 max-w-3xl text-white px-6"
                >
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-snug">
                        About <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Us</span>
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-gray-200">
                        Building lifelong relationships through trust, love, and meaningful connections. Our story celebrates culture, care, and commitment.
                    </p>
                </motion.div>
            </div>

            {/* Mission & Vision */}
            <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl sm:text-3xl font-bold text-pink-700"
                >
                    Our Mission & Vision
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto"
                >
                    Our mission is to unite souls and craft stories that last a lifetime. We envision a community where companionship thrives with respect, traditions are cherished, and love becomes the universal language.
                </motion.p>
            </section>

            {/* Image + Details Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto px-6 md:px-8 items-center py-12 md:py-16 bg-white/50 rounded-3xl">
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-900 leading-snug mb-4">
                        Who We <span className="text-pink-600">Are</span>
                    </h2>
                    <p className="text-gray-700 mb-6">
                        We are a passionate team dedicated to meaningful matchmaking that respects culture and individuality. With guided counseling and modern technology, we help you find a partner who truly complements your life.
                    </p>
                    <ul className="text-left text-gray-700 space-y-2 list-disc list-inside">
                        <li>Verified profiles & privacy-first approach</li>
                        <li>Human + AI assisted matching</li>
                        <li>Dedicated counselors for families</li>
                    </ul>
                    <Link to="/contact" className="inline-block mt-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-7 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition"
                        >
                            Contact Us
                        </motion.button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <img
                        src={IMAGES.about}
                        alt="Couple celebrating engagement"
                        className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                        loading="eager"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-4 hidden md:flex items-center gap-3">
                        <span className="text-3xl">💍</span>
                        <div>
                            <p className="text-sm font-semibold text-gray-800">50K+ Happy Couples</p>
                            <p className="text-xs text-gray-600">Trusted across communities</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Core Values (with imagery) */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-pink-700">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {["Trust", "Diversity", "Care"].map((title, idx) => (
                            <motion.div
                                key={title}
                                whileHover={{ scale: 1.04 }}
                                className="group relative rounded-2xl overflow-hidden shadow-lg"
                            >
                                <img
                                    src={IMAGES.values[idx]}
                                    alt={`${title} background`}
                                    className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-left">
                                    <h3 className="text-white text-xl font-bold">{title}</h3>
                                    <p className="text-white/90 text-sm max-w-xs">
                                        {title === "Trust" && "Transparency and honesty in every connection."}
                                        {title === "Diversity" && "Respect for every culture, belief & tradition."}
                                        {title === "Care" && "Your happiness and safety come first."}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories with images */}
            <section className="py-12 md:py-16 bg-gradient-to-r from-purple-700 to-pink-600 text-white">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold">Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        {[
                            { name: "Neha & Arjun", story: "We met here & tied the knot in a year.", img: IMAGES.stories[0] },
                            { name: "Simran & Kunal", story: "Trust, family & love — perfect match.", img: IMAGES.stories[1] },
                            { name: "Ananya & Raghav", story: "From strangers to soulmates.", img: IMAGES.stories[2] },
                        ].map((s, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -6 }}
                                className="bg-white/10 rounded-2xl shadow-md overflow-hidden text-left"
                            >
                                <img src={s.img} alt={s.name} className="w-full h-40 object-cover" loading="lazy" />
                                <div className="p-5">
                                    <p className="italic">“{s.story}”</p>
                                    <h3 className="mt-3 font-bold">{s.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section with real photos */}
            <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-700">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-center">
                    {[
                        { name: "Aarav Sharma", role: "Founder & CEO", img: IMAGES.team[0] },
                        { name: "Priya Kapoor", role: "Head of Counseling", img: IMAGES.team[1] },
                        { name: "Rohan Gupta", role: "Tech Lead", img: IMAGES.team[2] },
                    ].map((member, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
                                loading="lazy"
                            />
                            <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                            <p className="text-sm text-gray-500">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold">Ready to Begin Your Marriage Journey?</h2>
                <p className="mt-2 text-sm sm:text-base">Let us help you find your soulmate and celebrate love for a lifetime.</p>
                <Link
                    to="/signup"
                    className="mt-6 inline-block px-8 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition"
                >
                    Get Started Now
                </Link>
            </section>
        </div>
    );
};

export default About;
