import React, { useState, useRef, useEffect } from "react";

const notifications = [
  {
    role: "Software Developer Intern",
    company: "Google",
    time: "2 hours ago",
    logo: "https://www.google.com/favicon.ico",
  },
  {
    role: "UI/UX Design Internship",
    company: "Microsoft",
    time: "1 day ago",
    logo: "https://www.microsoft.com/favicon.ico",
  },
  {
    role: "Data Analyst Intern",
    company: "Google",
    time: "3 days ago",
    logo: "https://www.google.com/favicon.ico",
  },
];

const NotificationBell = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Bell Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="relative text-xl"
      >
        🔔
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-4 w-80 bg-white rounded-xl shadow-xl z-50">
          <h3 className="px-4 py-3 font-semibold text-gray-800 border-b">
            Notifications
          </h3>

          <div className="p-2 space-y-2">
            {notifications.map((n, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 rounded-lg bg-[#F3F1FF]"
              >
                <img
                  src={n.logo}
                  alt={n.company}
                  className="w-8 h-8"
                />
                <div>
                  <p className="text-sm font-semibold">
                    {n.role}
                  </p>
                  <p className="text-xs text-gray-500">
                    {n.company} · {n.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center py-2">
            <button className="text-sm text-indigo-600 hover:underline">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
