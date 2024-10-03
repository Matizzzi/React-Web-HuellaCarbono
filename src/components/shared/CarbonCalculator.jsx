// src/components/CarbonCalculator.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// Datos simulados para la huella de carbono de alimentos chilenos
const carbonData = {
  palta: 1.5, // kg CO2e por kg
  carne: 5.2,
  "arroz": 2.8,
  "pollo": 3.0,
  "pescado": 2.0,
  "quinoa": 0.7,
  "papas": 0.5
};

const CarbonCalculator = () => {
  const [food, setFood] = useState("");
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  // Manejar la entrada del formulario
  const handleInputChange = (e) => {
    setFood(e.target.value.toLowerCase());
  };

  // Calcular la huella de carbono
  const calculateCarbon = (e) => {
    e.preventDefault();
    if (carbonData[food]) {
      setCarbonFootprint(carbonData[food]);
    } else {
      setCarbonFootprint("No disponible");
    }
  };

  return (
    <div className="bg-[#1f1d2b] p-6 rounded-lg text-white max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Calculadora de Huella de Carbono de Alimentos
      </h2>
      <form onSubmit={calculateCarbon} className="mb-4">
        <label className="block mb-2">
          Ingrese un alimento chileno:
          <input
            type="text"
            value={food}
            onChange={handleInputChange}
            placeholder="Ej: palta, carne, arroz"
            className="w-full p-2 rounded mt-2 text-black"
          />
        </label>
        <button
          type="submit"
          className="bg-[#ec7c6a] p-2 mt-4 rounded w-full text-white"
        >
          Calcular Huella de Carbono
        </button>
      </form>
      {carbonFootprint !== null && (
        <div className="bg-[#262837] p-4 mt-4 rounded">
          {typeof carbonFootprint === "string" ? (
            <p>{carbonFootprint}</p>
          ) : (
            <p>
              La huella de carbono para <strong>{food}</strong> es de{" "}
              <strong>{carbonFootprint} kg CO2e</strong> por kilogramo.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CarbonCalculator;
