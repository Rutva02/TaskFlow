
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import TaskList from "@/components/TaskList";
import Modal from "@/components/Modal";
import SearchBar from "@/components/SearchBar";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ErrorMessage from "@/components/ErrorMessage";
import EmptyState from "@/components/EmptyState";
import { initialTasks } from "@/lib/mockTasks";

export default function TasksPage() {
  const router = useRouter();

  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Check login and load tasks
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      router.replace("/login");
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  // Simulate an API failure
  const handleSimulateError = () => {
    setError("Unable to load tasks. Please try again.");
    setIsLoading(false);
  };

  // Retry loading tasks
  const handleRetry = () => {
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setTasks(initialTasks);
      setIsLoading(false);
    }, 1500);
  };

  // Edit task
  const handleEdit = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  // Delete task
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmed) {
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== id)
      );
    }
  };

  // Search and filter tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || task.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>My Tasks</h1>
            <p>View and manage all your tasks.</p>
          </div>

          <button
            className="profile-button"
            onClick={() => router.push("/dashboard")}
          >
            Back to Dashboard
          </button>
        </header>

        <section className="recent-tasks">
          <h2>All Tasks ({filteredTasks.length})</h2>

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />

          <button
            type="button"
            className="retry-button"
            style={{ marginTop: "15px" }}
            onClick={handleSimulateError}
          >
            Simulate API Error
          </button>

          {isLoading ? (
            <LoadingSkeleton count={3} />
          ) : error ? (
            <ErrorMessage
              message={error}
              onRetry={handleRetry}
            />
          ) : filteredTasks.length === 0 ? (
            <EmptyState
              message="We couldn't find any tasks matching your search or filter."
              onClear={() => {
                setSearchTerm("");
                setFilterStatus("All");
              }}
            />
          ) : (
            <TaskList
              tasks={filteredTasks}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </section>

        <Modal
          isOpen={showModal}
          title="Task Details"
          onClose={() => setShowModal(false)}
        >
          {selectedTask && (
            <div>
              <h3>{selectedTask.title}</h3>
              <p>{selectedTask.description}</p>
              <p>Status: {selectedTask.status}</p>
              <p>Priority: {selectedTask.priority}</p>
            </div>
          )}
        </Modal>
      </main>
    </div>
  );
}
