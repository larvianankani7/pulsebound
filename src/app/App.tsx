import { Outlet } from "react-router-dom";

export function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f3eeee] selection:bg-red-600/30 selection:text-red-200">
      <Outlet />
    </main>
  );
}
