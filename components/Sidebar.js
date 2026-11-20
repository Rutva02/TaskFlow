
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: "📊" },
  { name: "My Tasks", href: "/tasks", icon: "📋" },
  { name: "My Profile", href: "/profile", icon: "👤" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">TaskFlow</h2>

      <nav aria-label="Main navigation">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`sidebar-link ${
              pathname === item.href ? "active" : ""
            }`}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            <span aria-hidden="true">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
