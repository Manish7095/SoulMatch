import { useState, type Key } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import profilesData from "../data/profiles.json";
import type { Profile } from "../types/profileTypes";
import { useNavigate } from "react-router-dom";


const ProfileSearchPage = () => {
    const location = useLocation();
    const state = location.state as {
        searchTerm?: string;
        gender?: string;
        ageRange?: string;
    };

    const [profiles] = useState<Profile[]>(profilesData as Profile[]);

    // filters from state
    const [searchTerm] = useState(state?.searchTerm || "");
    const [gender] = useState<string>(state?.gender || "all");
    const [ageRange] = useState<string>(state?.ageRange || "all");
    const [locationFilter, setLocationFilter] = useState<string>("all");
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    // sorting
    const [sortBy, setSortBy] = useState<"compatibility" | "name">("compatibility");

    // modal state
    const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

    // toggle interest     
    const handleInterestChange = (interest: string) => {
        setSelectedInterests((prev) =>
            prev.includes(interest)
                ? prev.filter((i) => i !== interest)
                : [...prev, interest]
        );
    };

    // filter by age range
    const isWithinAgeRange = (age: number) => {
        if (ageRange === "all") return true;
        if (ageRange === "18-25") return age >= 18 && age <= 25;
        if (ageRange === "26-35") return age >= 26 && age <= 35;
        if (ageRange === "36-45") return age >= 36 && age <= 45;
        if (ageRange === "46+") return age >= 46;
        return true;
    };

    // filtering
    const filteredProfiles = profiles.filter((p) => {
        const matchSearch =
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.bio.toLowerCase().includes(searchTerm.toLowerCase());

        const matchGender = gender === "all" || p.gender === gender;
        const matchAge = isWithinAgeRange(p.age);
        const matchLocation = locationFilter === "all" || p.location === locationFilter;

        const matchInterests =
            selectedInterests.length === 0 ||
            selectedInterests.every((i) => p.interests.includes(i));

        return matchSearch && matchGender && matchAge && matchLocation && matchInterests;
    });

    // sorting
    const sortedProfiles = [...filteredProfiles].sort((a, b) =>
        sortBy === "compatibility"
            ? b.compatibility - a.compatibility
            : a.name.localeCompare(b.name)
    );

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex">
            {/* Sidebar Filter */}
            <aside className="w-64 p-6 bg-white shadow-lg rounded-xl m-4 h-fit sticky top-4 self-start">
                <h2 className="text-lg font-semibold mb-4 border-b-2 border-dashed">Filter By</h2>

                {/* Location */}
                <label className="block mb-2 text-sm font-bold">Location</label>
                <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full border rounded-md p-2 mb-4"
                >
                    <option value="all">All</option>
                    <option>New York</option>
                    <option>California</option>
                    <option>Texas</option>
                </select>

                {/* Interests */}
                <label className="block mb-2 text-sm font-bold">Interests</label>
                <div className="flex flex-col space-y-2 text-sm">
                    {["Music", "Travel", "Reading", "Sports"].map((interest) => (
                        <label key={interest}>
                            <input
                                type="checkbox"
                                checked={selectedInterests.includes(interest)}
                                onChange={() => handleInterestChange(interest)}
                            />{" "}
                            {interest}
                        </label>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-extrabold text-gray-800">✨ Profile Search</h1>
                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value as "compatibility" | "name")
                        }
                        className="border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-purple-400 transition"
                    >
                        <option value="compatibility">Sort by Compatibility</option>
                        <option value="name">Sort by Name</option>
                    </select>
                </div>

                {/* Profile Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedProfiles.map((profile) => (
                        <motion.div
                            key={profile.id}
                            whileHover={{ scale: 1.03, y: -5 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center text-center transition-all duration-300"
                        >
                            {/* Profile Image */}
                            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-purple-200 shadow-md mb-4">
                                <img
                                    src={profile.image}
                                    alt={profile.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <h2 className="text-xl font-bold text-gray-800 mb-1">{profile.name}</h2>
                            <p className="text-sm text-gray-600 mb-3">{profile.bio}</p>

                            <div className="space-y-1 text-gray-500 text-sm mb-3">
                                <div>Age: {profile.age} | {profile.gender}</div>
                                <div>📍 {profile.location}</div>
                                <div className="text-xs">✨ {profile.interests.join(", ")}</div>
                            </div>

                            {/* Compatibility */}
                            <div className="text-sm font-semibold text-purple-600 mb-4">
                                💜 Compatibility: {profile.compatibility}%
                            </div>

                            {/* View Profile Button */}
                            <button
                                onClick={() => navigate(`/profile/${profile.id}`, { state: { profile } })}
                                className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg transition-all"
                            >
                                View More
                            </button>
                        </motion.div>
                    ))}
                </div>
            </main>

            {/* Modal */}
            {selectedProfile && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative"
                    >
                        <button
                            onClick={() => setSelectedProfile(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            ✖
                        </button>
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={selectedProfile.image}
                                alt={selectedProfile.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-purple-200 shadow-md mb-4"
                            />
                            <h2 className="text-2xl font-bold text-gray-800">{selectedProfile.name}</h2>
                            <p className="text-gray-600 mb-2">{selectedProfile.bio}</p>
                            <p className="text-sm text-gray-500 mb-2">
                                {selectedProfile.age} • {selectedProfile.gender} • 📍 {selectedProfile.location}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {selectedProfile.interests.map((i: string, idx: Key) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs"
                                    >
                                        {i}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-4 font-semibold text-purple-600">
                                💜 Compatibility: {selectedProfile.compatibility}%
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default ProfileSearchPage;
