
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">

          <div>
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              Welcome to TaskFlow
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
              Manage Your Tasks.
              <span className="block text-indigo-600">
                Achieve More.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Stay organized, manage your daily activities and
              improve your productivity with TaskFlow.
              Everything you need to get your work done in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/login">
                <Button>Get Started →</Button>
              </Link>

              <a
                href="#features"
                className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Explore Features
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Simple. Organized. Productive.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl shadow-indigo-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                My Dashboard
              </h2>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Active
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Your productivity overview
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-indigo-50 p-5">
                <p className="text-sm text-gray-600">Total Tasks</p>
                <h3 className="mt-2 text-3xl font-bold text-indigo-600">
                  24
                </h3>
              </div>

              <div className="rounded-xl bg-green-50 p-5">
                <p className="text-sm text-gray-600">Completed</p>
                <h3 className="mt-2 text-3xl font-bold text-green-600">
                  18
                </h3>
              </div>
            </div>

            <h3 className="mt-7 font-bold text-gray-800">
              Recent Tasks
            </h3>

            <div className="mt-4 space-y-4">
              {[
                "Complete project documentation",
                "Prepare internship presentation",
                "Review daily assignments",
              ].map((task, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-gray-100 p-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                    ✓
                  </span>
                  <p className="text-sm text-gray-700">{task}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-3/4 rounded-full bg-indigo-600"></div>
            </div>

            <p className="mt-2 text-right text-xs text-gray-500">
              75% progress
            </p>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <span className="font-semibold text-indigo-600">
              OUR FEATURES
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Everything You Need to Stay Organized
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              TaskFlow provides simple and useful tools to
              help you manage your work efficiently.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-4xl">📋</div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Task Management
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Organize your daily tasks and keep track
                of everything you need to complete.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-4xl">📊</div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Track Progress
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Monitor your progress and understand
                how much work you have completed.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-4xl">⏰</div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Save Time
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Manage your priorities and make
                your everyday work more productive.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-indigo-600 px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 text-center md:grid-cols-3">

          <div>
            <h3 className="text-4xl font-extrabold">100%</h3>
            <p className="mt-2 text-indigo-100">Simple to Use</p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold">24/7</h3>
            <p className="mt-2 text-indigo-100">Access Anytime</p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold">Easy</h3>
            <p className="mt-2 text-indigo-100">Task Organization</p>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            About TaskFlow
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            TaskFlow is designed to make everyday task
            management simple and effective. Our goal is to
            help students, professionals and teams stay
            organized, save time and achieve their goals.
          </p>

          <Link href="/login" className="mt-8 inline-block">
            <Button>Start Organizing Today →</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
