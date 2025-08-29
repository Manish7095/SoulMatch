import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState, type Key } from "react";
import profilesData from "../data/profiles.json";
import type { Profile } from "../types/profileTypes";

const ProfileDetailsPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const stateProfile = location.state?.profile;

    const [profile, setProfile] = useState<Profile | null>(stateProfile || null);
    const [activeTab, setActiveTab] = useState<"info" | "lifestyle" | "goals" | "photos">("info");

    useEffect(() => {
        if (!profile) {
            const found = (profilesData as Profile[]).find((p) => p.id === Number(id));
            setProfile(found || null);
        }
    }, [id, profile]);

    if (!profile) return <div className="p-10 text-center text-gray-600">Profile not found.</div>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-6">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="relative p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                    {/* Profile Image */}
                    <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-purple-200 shadow-lg">
                        <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl font-extrabold text-gray-800">{profile.name}</h1>
                        <p className="text-lg text-gray-500 mt-1">
                            {profile.age} • {profile.gender} • 📍 {profile.location}
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed">{profile.bio}</p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:items-center">
                            <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold shadow">
                                💜 Compatibility {profile.compatibility}%
                            </span>
                            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition">
                                💌 Send Interest
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center border-t border-b bg-gray-50">
                    {[
                        { key: "info", label: "Personal Info" },
                        { key: "lifestyle", label: "Lifestyle" },
                        { key: "goals", label: "Relationship Goals" },
                        { key: "photos", label: "Photos" },
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key as any)}
                            className={`px-6 py-3 text-sm font-semibold transition ${activeTab === tab.key
                                ? "text-purple-600 border-b-2 border-purple-500"
                                : "text-gray-500 hover:text-purple-500"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="p-8">
                    {activeTab === "info" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                            <div>
                                <h3 className="font-semibold text-gray-800">🎓 Education</h3>
                                <p>{profile.education || "Not provided"}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">💼 Occupation</h3>
                                <p>{profile.occupation || "Not provided"}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">🎯 Interests</h3>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {profile.interests.map((i: string, idx: Key) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium"
                                        >
                                            {i}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">👨‍👩‍👧 Family Background</h3>
                                <p>{profile.family || "Not provided"}</p>
                            </div>
                        </div>
                    )}

                    {activeTab === "lifestyle" && (
                        <div className="space-y-4 text-gray-700">
                            <p>🌍 Loves traveling and exploring new cultures.</p>
                            <p>📚 Enjoys reading books and photography.</p>
                            <p>🍽 Foodie who loves cooking and trying new cuisines.</p>
                        </div>
                    )}

                    {activeTab === "goals" && (
                        <div className="space-y-4 text-gray-700">
                            <p>💞 Looking for a meaningful relationship.</p>
                            <p>🤝 Values trust, respect, and open communication.</p>
                            <p>✨ Believes in long-term commitment and growth together.</p>
                        </div>
                    )}

                    {activeTab === "photos" && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {profile.photos?.length ? (
                                profile.photos.map((photo: string, idx: Key) => (
                                    <img
                                        key={idx}
                                        src={photo}
                                        alt={`photo-${idx}`}
                                        className="rounded-2xl object-cover w-full h-40 shadow-md hover:scale-105 transition"
                                    />
                                ))
                            ) : (
                                <p>No photos uploaded.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileDetailsPage;
