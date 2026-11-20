
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import ProfileCard from "@/components/ProfileCard";

export default function ProfilePage() {
  const router = useRouter();

  const [profile, setProfile] = useState({
    name: "TaskFlow User",
    email: "demo@taskflow.com",
    role: "Frontend Developer",
    bio: "Passionate about learning and building web applications.",
  });

  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      router.replace("/login");
      return;
    }

    const savedProfile = localStorage.getItem("taskflowProfile");

    if (savedProfile) {
      try {
        const parsedProfile = JSON.parse(savedProfile);

        if (
          parsedProfile &&
          typeof parsedProfile.name === "string" &&
          typeof parsedProfile.email === "string" &&
          typeof parsedProfile.role === "string" &&
          typeof parsedProfile.bio === "string"
        ) {
          setProfile(parsedProfile);
        }
      } catch {
        setMessage("Could not load your saved profile.");
      }
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!profile.name.trim() || !profile.email.trim()) {
      setMessage("Name and email are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    localStorage.setItem("taskflowProfile", JSON.stringify(profile));

    setEditing(false);
    setMessage("Profile updated successfully!");
  };

  const handleCancel = () => {
    const savedProfile = localStorage.getItem("taskflowProfile");

    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile));
      } catch {
        setMessage("Could not restore saved profile.");
      }
    } else {
      setProfile({
        name: "TaskFlow User",
        email: "demo@taskflow.com",
        role: "Frontend Developer",
        bio: "Passionate about learning and building web applications.",
      });
    }

    setEditing(false);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>My Profile</h1>
            <p>Manage your personal information.</p>
          </div>

          <button
            className="profile-button"
            onClick={() => router.push("/dashboard")}
          >
            Back to Dashboard
          </button>
        </header>

        <div className="profile-content">
          <ProfileCard
            name={profile.name}
            email={profile.email}
            role={profile.role}
          />

          <section className="profile-form-section">
            <h2>Personal Information</h2>

            {message && (
              <p role="status" className="profile-message">
                {message}
              </p>
            )}

            <form onSubmit={handleSave}>
              <div className="profile-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  disabled={!editing}
                  required
                />
              </div>

              <div className="profile-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!editing}
                  required
                />
              </div>

              <div className="profile-field">
                <label htmlFor="role">Role</label>
                <input
                  id="role"
                  name="role"
                  value={profile.role}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>

              <div className="profile-field">
                <label htmlFor="bio">About Me</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  disabled={!editing}
                  rows={4}
                />
              </div>

              {!editing ? (
                <button
                  type="button"
                  className="profile-button"
                  onClick={() => {
                    setEditing(true);
                    setMessage("");
                  }}
                >
                  Edit Profile
                </button>
              ) : (
                <div className="profile-actions">
                  <button type="submit" className="profile-button">
                    Save Changes
                  </button>

                  <button
                    type="button"
                    className="cancel-button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
