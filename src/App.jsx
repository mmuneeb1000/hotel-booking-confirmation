import Sidebar from "./components/Sidebar";
import Booking from "./components/Booking";
import Cards from "./components/Cards";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <>
      <div className="grid grid-cols-[250px_1fr]">
        <Sidebar />
        <main className="px-12 py-3">
          <Confirmation />
          <Booking />
          <Cards />
        </main>
      </div>
    </>
  );
}

export default App;
