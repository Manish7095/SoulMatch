import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema } from "../schema/bookingSchema";
import { icons } from "../icons/ServiceIcons";

type BookingFormModalProps = { isOpen: boolean; onClose: () => void };
type BookingFormData = {
    fullName: string;
    phone: number;
    date: string;
    venue: string;
    guests: number;
    service: string[];
};

const BookingFormModal: React.FC<BookingFormModalProps> = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm<BookingFormData>({
        resolver: yupResolver(bookingSchema),
        defaultValues: { service: [] },
    });

    const onSubmit: SubmitHandler<BookingFormData> = (data) => {
        console.log("Form Submitted:", data);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            reset();
            onClose();
        }, 2500);
    };

    const inputFields = [
        { name: "fullName", label: "Full Name", type: "text" },
        { name: "phone", label: "Contact Number", type: "tel" },
        { name: "date", label: "Wedding Date", type: "date" },
        { name: "venue", label: "Venue / Location", type: "text" },
        { name: "guests", label: "Number of Guests", type: "number" },
    ];

    const services = [
        { key: "weddingPlanning", label: "Wedding Planning", icon: icons.weddingPlanning },
        { key: "photography", label: "Photography", icon: icons.photography },
        { key: "eventDecoration", label: "Event Decoration", icon: icons.eventDecoration },
        { key: "guestTransport", label: "Guest Transport", icon: icons.guestTransport },
        { key: "hotelAccommodation", label: "Hotel & Accommodation", icon: icons.hotelAccommodation },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-auto"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 30 }}
                        transition={{ duration: 0.35 }}
                        className="relative w-full max-w-4xl bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md border border-gray-700 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-gray-100"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-400 hover:text-white text-3xl font-bold transition"
                        >
                            &times;
                        </button>

                        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white drop-shadow-lg">
                            Wedding Booking
                        </h2>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8 sm:py-16"
                            >
                                <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-3 sm:mb-4 animate-pulse">
                                    🎉 Thank You!
                                </h3>
                                <p className="text-gray-200 text-base sm:text-lg">
                                    Your wedding booking has been submitted successfully. Our team will contact you shortly.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Input Fields */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
                                    {inputFields.map((field) => (
                                        <div key={field.name} className="flex flex-col">
                                            <label className="mb-1 sm:mb-2 text-gray-200 font-medium text-sm sm:text-base">
                                                {field.label}
                                            </label>
                                            <input
                                                type={field.type}
                                                {...register(field.name as keyof BookingFormData)}
                                                placeholder={`Enter ${field.label}`}
                                                maxLength={field.name === "phone" ? 10 : undefined}
                                                min={field.name === "date" ? new Date().toISOString().split("T")[0] : undefined}
                                                onKeyDown={(e) => {
                                                    if (
                                                        field.name === "phone" &&
                                                        !/[6-9]|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(e.key)
                                                    ) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                                className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-600 bg-gray-800/50 text-white focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none shadow-md"
                                            />
                                            {errors[field.name as keyof BookingFormData] && (
                                                <p className="text-red-400 text-xs sm:text-sm mt-1">
                                                    {errors[field.name as keyof BookingFormData]?.message}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Service Selection */}
                                <div className="mb-6 sm:mb-10">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3">Select Services</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {services.map((service) => (
                                            <Controller
                                                key={service.key}
                                                name="service"
                                                control={control}
                                                render={({ field }) => {
                                                    const isChecked = field.value.includes(service.key);
                                                    const toggleService = () => {
                                                        if (isChecked) {
                                                            field.onChange(field.value.filter((s: string) => s !== service.key));
                                                        } else {
                                                            field.onChange([...field.value, service.key]);
                                                        }
                                                    };
                                                    return (
                                                        <button
                                                            type="button"
                                                            onClick={toggleService}
                                                            className={`flex items-center p-3 sm:p-4 border rounded-lg sm:rounded-xl shadow-md transition-all ${isChecked
                                                                ? "bg-teal-600/70 border-teal-500 text-white"
                                                                : "bg-gray-800/50 border-gray-600 text-gray-200 hover:bg-gray-700/50"
                                                                }`}
                                                        >
                                                            <span className="mr-2">{service.icon}</span>
                                                            <span className="text-sm sm:text-base">{service.label}</span>
                                                        </button>
                                                    );
                                                }}
                                            />
                                        ))}
                                    </div>
                                    {errors.service && (
                                        <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.service?.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-teal-700 text-white text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl shadow-lg hover:scale-105 transform transition-all"
                                >
                                    Submit Booking
                                </button>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BookingFormModal;
