import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex bg-royal-gray">
      <Sidebar />
      {/* <Header /> */}
      <Courses />
    </main>
  );
}
