
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Button from "@/components/Button";
import Input from "@/components/Input";
import mockLogin from "@/lib/mockAuth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters";
    }

    setErrors(newErrors);
    setSuccessMessage("");
    setLoginError("");

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      setLoading(true);

      const result = await mockLogin(email, password);

      if (result.success) {
        localStorage.setItem("isLoggedIn", "true");
      }

      setSuccessMessage(result.message);

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-white">
      <section className="flex min-h-screen items-center justify-center bg-white px-5 py-12">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 md:p-10">

          <div className="mb-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
              ✓
            </div>

            <h1 className="mt-5 text-3xl font-bold text-gray-900">
              Welcome Back!
            </h1>

            <p className="mt-3 text-gray-500">
              Login to your TaskFlow account
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">

            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
                setLoginError("");
                setSuccessMessage("");
              }}
              error={errors.email}
              autoComplete="email"
            />

            <div>
              <Input
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: "" }));
                  setLoginError("");
                  setSuccessMessage("");
                }}
                error={errors.password}
                autoComplete="current-password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </button>
            </div>

            <div className="flex items-center justify-between gap-3 text-sm">
              <label className="flex cursor-pointer items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 accent-indigo-600"
                />
                Remember me
              </label>

              <button
                type="button"
                onClick={() =>
                  alert("Password recovery is not available in this demo.")
                }
                className="font-medium text-indigo-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

            {loading && (
              <p role="status" className="text-center text-sm text-indigo-600">
                Please wait, verifying your details...
              </p>
            )}

            {successMessage && (
              <p role="status" className="rounded-lg bg-green-50 p-3 text-center text-sm text-green-700">
                {successMessage}
              </p>
            )}

            {loginError && (
              <p role="alert" className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-700">
                {loginError}
              </p>
            )}
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <span className="font-medium text-indigo-600">
                Sign up coming soon
              </span>
            </p>

            <Link
              href="/"
              className="mt-5 inline-block text-sm font-medium text-gray-500 hover:text-indigo-600"
            >
              ← Back to Homepage
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
