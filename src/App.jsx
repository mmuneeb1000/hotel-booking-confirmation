import Sidebar from "./components/Sidebar";
import Booking from "./components/Booking";
import Cards from "./components/Cards";
import Confirmation from "./components/Confirmation";
import Hover from "./components/Hover";

function App() {
  return (
    <>
      <div className="grid grid-cols-[300px_1fr]">
        <Sidebar />
        <main className="px-12 py-4">
          <Confirmation />
          <Booking />
          <Hover />
          <Cards />
        </main>
      </div>
    </>
  );
}

export default App;
