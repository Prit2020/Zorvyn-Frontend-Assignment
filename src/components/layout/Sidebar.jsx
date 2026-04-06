// import { NavLink } from "react-router-dom";
// import { LayoutDashboard, Wallet, Lightbulb, User } from "lucide-react";

// import { getStoredRole } from "@/utility/roleStorage";

// // Sidebar navigation items
// const navItems = [
//   {
//     label: "Dashboard",
//     path: "/",
//     icon: LayoutDashboard,
//   },
//   {
//     label: "Transactions",
//     path: "/transactions",
//     icon: Wallet,
//   },
//   {
//     label: "Insights",
//     path: "/insights",
//     icon: Lightbulb,
//   },
// ];

// const Sidebar = () => {
//   const role = getStoredRole();
//   return (
//     <aside className="h-screen w-64 bg-gray-50 border-r flex flex-col">
//       {/* LOGO / TITLE */}
//       <div className="h-20 flex items-center px-6 border-b">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Finance Dashboard
//         </h2>
//       </div>

//       {/* NAVIGATION */}
//       <nav className="flex-1 px-4 py-6 space-y-2">
//         {navItems.map((item) => {
//           const Icon = item.icon;

//           return (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition ${
//                   isActive
//                     ? "bg-gray-100 text-gray-900"
//                     : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
//                 }`
//               }
//             >
//               <Icon className="w-5 h-5" />
//               {item.label}
//             </NavLink>
//           );
//         })}
//       </nav>

//       {/* USER FOOTER */}
//       <div className="p-4 border-t">
//         <div className="flex items-center gap-3">
//           {/* Avatar */}
//           <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
//             <User className="w-5 h-5 text-gray-600" />
//           </div>

//           {/* User Info */}
//           <div className="flex flex-col">
//             <span className="text-sm font-medium text-gray-800">John Doe</span>
//             <span className="text-xs text-gray-500 capitalize">{role}</span>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;




import { NavLink } from "react-router-dom";
import { LayoutDashboard, Wallet, Lightbulb, User, X } from "lucide-react";

import { getStoredRole } from "@/utility/roleStorage";

const navItems = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Transactions", path: "/transactions", icon: Wallet },
  { label: "Insights", path: "/insights", icon: Lightbulb },
];

const Sidebar = ({ onClose }) => {
  const role = getStoredRole();

  return (
    <aside className="h-full w-64 bg-gray-50 border-r flex flex-col">
      {/* LOGO / TITLE */}
      <div className="h-20 flex items-center px-6 border-b">
        <h2 className="text-lg font-semibold text-gray-800 flex-1">
          Finance Dashboard
        </h2>

        {/* CLOSE BUTTON — mobile only */}
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden p-1.5 rounded-md text-gray-500 hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      {/* USER FOOTER */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">John Doe</span>
            <span className="text-xs text-gray-500 capitalize">{role}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;