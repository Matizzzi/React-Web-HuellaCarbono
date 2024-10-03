// src/App.jsx
import Sidebar from "./components/shared/sidebar";
import CarbonCalculator from "./components/shared/CarbonCalculator";

function App() {
  return (
    <div className="bg-[#262837] w-full min-h-screen flex">
      <Sidebar />
      <main className="w-full flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white uppercase mb-4">
            ONG Life & Sustainability Today
          </h1>
          <p className="text-gray-400 text-lg">
            Promoviendo el consumo responsable y la sostenibilidad
          </p>
        </div>
        <CarbonCalculator />
      </main>
    </div>
  );
}

export default App;
