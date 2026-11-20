
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";
import { initialTasks } from "@/lib/mockTasks";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      router.replace("/login");
    }
  }, [router]);

  // Calculate dashboard statistics from task data
  const totalTasks = initialTasks.length;

  const completedTasks = initialTasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = initialTasks.filter(
    (task) => task.status === "Pending"
  ).length;

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here's your task overview.</p>
          </div>

          <button
            className="profile-button"
            onClick={() => router.push("/profile")}
          >
            👤 My Profile
          </button>
        </header>

        <section className="dashboard-welcome">
          <h2>Welcome to TaskFlow!</h2>
          <p>
            Manage your work, track progress and stay productive.
          </p>
        </section>

        <section
          className="dashboard-stats"
          aria-label="Task statistics"
        >
          <DashboardCard
            title="Total Tasks"
            value={totalTasks}
            icon="📋"
            color="#e0e7ff"
          />

          <DashboardCard
            title="Completed"
            value={completedTasks}
            icon="✅"
            color="#dcfce7"
          />

          <DashboardCard
            title="Pending"
            value={pendingTasks}
            icon="⏳"
            color="#fef3c7"
          />
        </section>

        <section className="recent-tasks">
          <h2>Recent Tasks</h2>

          {initialTasks.slice(0, 5).map((task) => (
            <div className="task-item" key={task.id}>
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>

              <span
                className={`status ${
                  task.status.toLowerCase()
                }`}
              >
                {task.status}
              </span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
