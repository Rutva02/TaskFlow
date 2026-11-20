
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { mockLogin } from "@/lib/mockAuth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    setErrors(newErrors);
    setMessage("");

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    try {
      const result = await mockLogin(email, password);

      setMessage(result.message);
      setMessageType("success");

      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      setMessage(error.message);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="grid min-h-screen w-full grid-cols-1 bg-slate-50 lg:grid-cols-2">

        {/* LEFT SIDE - IMAGE */}

        <section className="relative m-3 min-h-[250px] overflow-hidden rounded-2xl sm:m-5 sm:min-h-[320px] lg:m-6 lg:min-h-[calc(100vh-48px)]">
          <Image
            src="/login.jpg"
            alt="TaskFlow workspace background"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover rounded-2xl"
          />

          {/* Image overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

          {/* Text over image */}

          <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white sm:p-10 lg:p-12">

            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              TaskFlow.
            </h1>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-200 sm:text-base lg:text-lg">
              Plan your work. Organize your tasks.
              Achieve more every day.
            </p>

          </div>
        </section>

        {/* RIGHT SIDE - LOGIN FORM */}

        <section className="flex min-w-0 items-center justify-center px-5 py-10 sm:px-10 sm:py-14 lg:min-h-screen lg:px-12 xl:px-20">

          <div className="w-full max-w-md">

            <Link
              href="/"
              className="text-2xl font-bold text-indigo-600"
            >
              TaskFlow.
            </Link>

            <h2 className="mt-8 text-3xl font-bold text-gray-900 sm:mt-10 sm:text-4xl">
              Welcome Back!
            </h2>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Please enter your details to sign in.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 space-y-5"
            >

              {/* EMAIL */}

              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({
                    ...prev,
                    email: ""
                  }));
                  setMessage("");
                }}
                error={errors.email}
                autoComplete="email"
              />

              {/* PASSWORD */}

              <div>
                <Input
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({
                      ...prev,
                      password: ""
                    }));
                    setMessage("");
                  }}
                  error={errors.password}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
                >
                  {showPassword ? "Hide Password" : "Show Password"}
                </button>
              </div>

              {/* REMEMBER ME */}

              <div className="flex flex-wrap items-center justify-between gap-3 text-sm">

                <label className="flex cursor-pointer items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 accent-indigo-600"
                  />
                  Remember me
                </label>

                <span className="font-medium text-indigo-600">
                  Forgot Password?
                </span>

              </div>

              {/* LOGIN BUTTON */}

              <Button
                type="submit"
                disabled={loading}
                className="w-full"
              >
                {loading ? "Logging in..." : "Login"}
              </Button>

              {/* SUCCESS / ERROR MESSAGE */}

              {message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-lg p-3 text-center text-sm ${
                    messageType === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {message}
                </p>
              )}

            </form>

            {/* SIGN UP */}

            <p className="mt-8 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <span className="font-semibold text-indigo-600">
                Sign up coming soon
              </span>
            </p>

            {/* BACK TO HOMEPAGE */}

            <Link
              href="/"
              className="mt-6 block text-center text-sm text-gray-500 hover:text-indigo-600"
            >
              ← Back to Homepage
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
