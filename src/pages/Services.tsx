import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaRegHeart,
    FaCameraRetro,
    FaGlassCheers,
    FaBus,
    FaHotel,
} from "react-icons/fa";
import BookingFormModal from "../components/BookingFormModal";
import LearnMoreModal from "../components/LearnMoreModal";


const Services = () => {
    const [openForm, setOpenForm] = useState(false);
    const [openLearn, setOpenLearn] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex flex-col">
            {/* Hero Section */}
            <section
                className="relative w-full text-center py-28 px-6 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://7xweddings.com/images/services/design-and-decor.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl font-extrabold mb-4"
                    >
                        Our <span className="text-yellow-300">Wedding Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-lg max-w-2xl mx-auto mb-8 opacity-90"
                    >
                        Making your special day unforgettable with world-class wedding
                        planning, decor, catering, entertainment & more.
                    </motion.p>
                    <div className="flex justify-center gap-4">
                        {/* 👇 updated button */}
                        <button
                            onClick={() => setOpenForm(true)}
                            className="px-8 py-3 bg-white text-pink-600 rounded-full shadow-md font-medium hover:shadow-lg transition"
                        >
                            Book Now
                        </button>
                        <button
                            onClick={() => setOpenLearn(true)}
                            className="px-8 py-3 border border-white rounded-full font-medium hover:bg-white hover:text-pink-600 transition"
                        >
                            Learn More
                        </button>

                    </div>
                </div>
            </section>

            {/* Core Wedding Services */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Core Wedding Services
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Wedding Planning",
                            desc: "Complete planning from venue selection to theme design for a flawless wedding.",
                            icon: <FaRegHeart className="text-pink-600" size={32} />,
                            img: "https://images.unsplash.com/photo-1708606811579-23b18fc48007?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                            title: "Photography & Videography",
                            desc: "Capture every precious moment with professional photographers & cinematographers.",
                            icon: <FaCameraRetro className="text-pink-600" size={32} />,
                            img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop",
                        },
                        {
                            title: "Event Decoration",
                            desc: "Beautiful floral setups, stage décor, and ambience lighting for a magical vibe.",
                            icon: <FaGlassCheers className="text-pink-600" size={32} />,
                            img: "https://static.wixstatic.com/media/0db39a_416f7c540d5f4cf09090a1e78fc12e69~mv2.jpg/v1/fill/w_500,h_327,al_c/0db39a_416f7c540d5f4cf09090a1e78fc12e69~mv2.jpg",
                        },
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden group"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <div className="flex justify-center mb-4">{s.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {s.title}
                                </h3>
                                <p className="text-gray-600">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Wedding Essentials */}
            <section className="relative py-20 px-6 bg-gradient-to-r from-pink-50 via-purple-50 to-white">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Wedding Essentials
                </h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {[
                        {
                            title: "Wedding Planning",
                            desc: "Complete planning from venue selection to theme design for a flawless wedding.",
                            icon: <FaRegHeart className="text-pink-600" size={32} />,
                            img: "https://images.unsplash.com/photo-1509316554658-04f9287cdb78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                            title: "Photography & Videography",
                            desc: "Capture every precious moment with professional photographers & cinematographers.",
                            icon: <FaCameraRetro className="text-pink-600" size={32} />,
                            img: "https://images.unsplash.com/photo-1585162044546-ddc17626bb8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                            title: "Event Decoration",
                            desc: "Beautiful floral setups, stage décor, and ambience lighting for a magical vibe.",
                            icon: <FaGlassCheers className="text-pink-600" size={32} />,
                            img: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        }
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden group"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <div className="flex justify-center mb-4">{s.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {s.title}
                                </h3>
                                <p className="text-gray-600">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Guest Management */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Guest Management
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        {
                            title: "Guest Transport",
                            desc: "Luxury cars, buses & shuttles for smooth travel and comfort.",
                            icon: <FaBus className="text-teal-600" size={32} />,
                            img: "https://images.unsplash.com/photo-1682226345554-d16f6a754d7e?q=80&w=1256&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                            title: "Hotel & Accommodation",
                            desc: "Premium hotel bookings & guest hospitality handled with care.",
                            icon: <FaHotel className="text-teal-600" size={32} />,
                            img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
                        },
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden group"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <div className="flex justify-center mb-4">{s.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {s.title}
                                </h3>
                                <p className="text-gray-600">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-pink-600 text-white text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Let’s Create Your Dream Wedding
                </h2>
                <p className="max-w-2xl mx-auto mb-8 opacity-90">
                    From planning to execution, we ensure every detail of your wedding is
                    perfect and unforgettable.
                </p>
                <button className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 font-medium rounded-full shadow-lg hover:opacity-90 transition">
                    Contact Us Today
                </button>
            </section>

            {/* 👇 Booking modal */}
            <BookingFormModal isOpen={openForm} onClose={() => setOpenForm(false)} />
            <LearnMoreModal isOpen={openLearn} onClose={() => setOpenLearn(false)} />


        </div>
    );
};

export default Services;
