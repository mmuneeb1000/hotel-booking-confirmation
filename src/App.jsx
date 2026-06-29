import Sidebar from "./components/Sidebar";
import Booking from "./components/Booking";
import Cards from "./components/Cards";
import Confirmation from "./components/Confirmation";
import Hover from "./components/Hover";

function App() {
  return (
    <>
      <div className="grid lg:grid-cols-[1fr_5fr] md:grid-cols-1">
        <Sidebar />
        <main className="p-4 flex flex-col align-center w-full lg:px-4 lg:py-4">
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
