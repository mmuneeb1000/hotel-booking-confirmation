import Sidebar from "./components/Sidebar";
import Booking from "./components/Booking";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <div className="grid grid-cols-2">
        <Sidebar />
        <main className="w-full">
          <Booking />
          <Cards />
        </main>
      </div>
    </>
  );
}

export default App;
