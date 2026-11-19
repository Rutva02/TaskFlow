
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} TaskFlow. All rights reserved.
        </p>
        <p className="mt-1 text-sm text-gray-400">
          Organize your work. Achieve your goals.
        </p>
      </div>
    </footer>
  );
}
