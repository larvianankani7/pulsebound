import { Outlet } from "react-router-dom";

export function App() {
  return (
    <main className="min-h-screen bg-[#07050a] text-[#f3e8ff] selection:bg-purple-500/30 selection:text-purple-200">
      <Outlet />
    </main>
  );
}
