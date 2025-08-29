import { motion, AnimatePresence } from "framer-motion";

const LearnMoreModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const services = [
        {
            title: "Core Wedding Services",
            items: [
                {
                    name: "Wedding Planning",
                    desc: "Complete planning from venue selection to theme design for a flawless wedding.",
                    img: "https://images.unsplash.com/photo-1708606811579-23b18fc48007?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    name: "Photography & Videography",
                    desc: "Capture every precious moment with professional photographers & cinematographers.",
                    img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop",
                },
                {
                    name: "Event Decoration",
                    desc: "Beautiful floral setups, stage décor, and ambience lighting for a magical vibe.",
                    img: "https://static.wixstatic.com/media/0db39a_416f7c540d5f4cf09090a1e78fc12e69~mv2.jpg/v1/fill/w_500,h_327,al_c/0db39a_416f7c540d5f4cf09090a1e78fc12e69~mv2.jpg",
                },
            ],
        },
        {
            title: "Wedding Essentials",
            items: [
                {
                    name: "Decor & Design",
                    desc: "Customized decorations with flowers, lighting, and furniture for perfect ambience.",
                    img: "https://images.unsplash.com/photo-1509316554658-04f9287cdb78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
                },
                {
                    name: "Catering",
                    desc: "Delicious menu options customized for your guests with top chefs.",
                    img: "https://images.unsplash.com/photo-1585162044546-ddc17626bb8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
                },
                {
                    name: "Entertainment",
                    desc: "Live music, DJs, dance performances and fun activities for everyone.",
                    img: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
                },
            ],
        },
        {
            title: "Guest Management",
            items: [
                {
                    name: "Guest Transport",
                    desc: "Luxury cars, buses & shuttles for smooth travel and comfort.",
                    img: "https://images.unsplash.com/photo-1682226345554-d16f6a754d7e?q=80&w=1256&auto=format&fit=crop&ixlib=rb-4.1.0",
                },
                {
                    name: "Hotel & Accommodation",
                    desc: "Premium hotel bookings & guest hospitality handled with care.",
                    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
                },
            ],
        },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 overflow-auto p-4"
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        className="bg-white rounded-3xl p-8 max-w-5xl w-full relative"
                    >
                        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
                            Detailed Wedding Services
                        </h2>
                        <div className="space-y-10">
                            {services.map((section, idx) => (
                                <div key={idx}>
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                                        {section.title}
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {section.items.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                                className="bg-gray-50 rounded-2xl shadow-md overflow-hidden group"
                                            >
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="p-6">
                                                    <h4 className="text-xl font-semibold mb-2 text-gray-800">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-gray-600">{item.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={onClose}
                            className="mt-8 px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition block mx-auto"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LearnMoreModal;
