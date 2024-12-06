import React, { useState, useEffect } from 'react';

export const DynamicProgrammingPage = () => {
  const [numItems, setNumItems] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [weights, setWeights] = useState([]);
  const [values, setValues] = useState([]);
  const [dpResult, setDpResult] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [problemType, setProblemType] = useState('knapsack');
  const [distances, setDistances] = useState([]);

  const predefinedProblems = {
    knapsack: {
      numItems: 4,
      capacity: 10,
      weights: [2, 3, 4, 5],
      values: [3, 4, 5, 6]
    },
    brigades: {
      numItems: 3,
      capacity: 6,
      weights: [2, 3, 4],
      values: [4, 5, 6]
    },
    routes: {
      numItems: 4,
      capacity: 0,
      weights: [
        [0, 10, 15, 30],
        [10, 0, 35, 25],
        [15, 35, 0, 10],
        [30, 25, 10, 0]
      ],
      values: [0, 0, 0, 0]
    },
    wyndorGlass: {
      numItems: 2,
      weights: [1, 2],
      values: [3, 5]
    },
    ganadoraLasVegas: {
      numItems: 3,
      weights: [4, 5, 6],
      values: [7, 8, 9]
    },
    modeloInversion: {
      numItems: 4,
      weights: [5, 10, 15, 20],
      values: [10, 20, 30, 40]
    },
    modeloReemplazoEquipo: {
      numItems: 5,
      weights: [1, 2, 3, 4, 5],
      values: [5, 4, 3, 2, 1]
    },
    modeloTamañoFuerza: {
      numItems: 3,
      weights: [2, 4, 6],
      values: [1, 2, 3]
    },
    nivelEmpleados: {
      numItems: 3,
      weights: [3, 6, 9],
      values: [2, 4, 6]
    },
    holguraPorRechazos: {
      numItems: 2,
      weights: [5, 10],
      values: [3, 6]
    }
  };

  useEffect(() => {
    const problemData = predefinedProblems[problemType];
    setNumItems(problemData.numItems);
    setCapacity(problemData.capacity || 0);
    setWeights(problemData.weights);
    setValues(problemData.values);
    setDistances(problemData.weights || []);
  }, [problemType]);

  const handleInputChange = (e, type, index) => {
    const value = parseInt(e.target.value);
    if (type === 'weight') {
      const newWeights = [...weights];
      newWeights[index] = value;
      setWeights(newWeights);
    } else if (type === 'value') {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);
    }
  };

  const handleDistanceChange = (e, from, to) => {
    const newDistances = [...distances];
    newDistances[from][to] = parseInt(e.target.value);
    newDistances[to][from] = parseInt(e.target.value);
    setDistances(newDistances);
  };

  const calculateDP = () => {
    if (problemType === 'knapsack' || problemType === 'brigades') {
      if (numItems === 0 || capacity === 0 || weights.length === 0 || values.length === 0) {
        alert('Por favor, ingrese todos los datos.');
        return;
      }
    } else if (problemType === 'routes') {
      if (numItems === 0 || distances.length === 0 || distances.some(row => row.length !== numItems)) {
        alert('Por favor, ingrese correctamente todas las distancias.');
        return;
      }
    }

    let dp, maxValue, itemsSelected;

    if (problemType === 'knapsack') {
      dp = Array(numItems + 1).fill(null).map(() =>
        Array(capacity + 1).fill(0)
      );

      for (let i = 1; i <= numItems; i++) {
        for (let w = 1; w <= capacity; w++) {
          if (weights[i - 1] <= w) {
            dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
          } else {
            dp[i][w] = dp[i - 1][w];
          }
        }
      }

      maxValue = dp[numItems][capacity];
      itemsSelected = [];
      let w = capacity;
      for (let i = numItems; i > 0; i--) {
        if (dp[i][w] !== dp[i - 1][w]) {
          itemsSelected.push(i - 1);
          w -= weights[i - 1];
        }
      }
    } else if (problemType === 'brigades') {
      dp = Array(numItems + 1).fill(null).map(() =>
        Array(capacity + 1).fill(0)
      );

      for (let i = 1; i <= numItems; i++) {
        for (let w = 1; w <= capacity; w++) {
          if (weights[i - 1] <= w) {
            dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
          } else {
            dp[i][w] = dp[i - 1][w];
          }
        }
      }

      maxValue = dp[numItems][capacity];
      itemsSelected = [];
      let w = capacity;
      let brigadeAssignments = Array(numItems).fill(0);
      for (let i = numItems; i > 0; i--) {
        if (dp[i][w] !== dp[i - 1][w]) {
          brigadeAssignments[i - 1] += 1;
          w -= weights[i - 1];
        }
      }

      itemsSelected = brigadeAssignments.map((num, idx) => `País/Punto ${idx + 1}: ${num} brigadas`);
    } else if (problemType === 'routes') {
      const dist = distances;

      for (let i = 0; i < numItems; i++) {
        for (let j = 0; j < numItems; j++) {
          if (dist[i][j] === undefined || isNaN(dist[i][j])) {
            alert('Por favor asegúrese de que todas las distancias estén ingresadas correctamente.');
            return;
          }
        }
      }

      dp = Array(numItems).fill(Infinity);
      dp[0] = 0;

      let previousCity = Array(numItems).fill(null);

      for (let i = 0; i < numItems; i++) {
        for (let j = 0; j < numItems; j++) {
          if (i !== j && dp[i] + dist[i][j] < dp[j]) {
            dp[j] = dp[i] + dist[i][j];
            previousCity[j] = i;
          }
        }
      }

      maxValue = dp[numItems - 1];
      let path = [];
      let currentCity = numItems - 1;

      while (currentCity !== null) {
        path.push(currentCity);
        currentCity = previousCity[currentCity];
      }

      itemsSelected = path.reverse().map(city => `Ciudad ${city + 1}`);
    } else if (problemType === 'wyndorGlass') {
      // Lógica para resolver el problema de Wyndor Glass
      maxValue = Math.max(...values); // Ejemplo simplista
      itemsSelected = [values.indexOf(maxValue)];
    } else if (problemType === 'ganadoraLasVegas') {
      // Lógica para Ganadora de Las Vegas
      maxValue = values.reduce((acc, val) => acc + val, 0); // Suma de valores
      itemsSelected = values.map((val, idx) => `Item ${idx + 1}`);
    } else if (problemType === 'modeloInversion') {
      // Lógica para Modelo de Inversión
      maxValue = Math.max(...weights.map((w, i) => w * values[i])); // Producto peso-valor
      itemsSelected = [weights.indexOf(maxValue)];
    } else if (problemType === 'modeloReemplazoEquipo') {
      // Lógica para Modelo de Reemplazo de Equipo
      maxValue = weights.reduce((acc, w) => acc + w, 0) - Math.min(...weights); // Total menos el menor peso
      itemsSelected = weights.map((w, idx) => `Item ${idx + 1}`);
    } else if (problemType === 'modeloTamañoFuerza') {
      // Lógica para Modelo de Tamaño de Fuerza
      maxValue = weights.reduce((acc, w) => acc + w, 0); // Total de pesos
      itemsSelected = weights.map((w, idx) => `Item ${idx + 1}`);
    } else if (problemType === 'nivelEmpleados') {
      // Lógica para Nivel de Empleados
      maxValue = values.reduce((acc, v) => acc + v, 0); // Total de valores
      itemsSelected = values.map((v, idx) => `Empleado ${idx + 1}`);
    } else if (problemType === 'holguraPorRechazos') {
      // Lógica para Holgura por Rechazos
      maxValue = Math.min(...weights); // Menor peso
      itemsSelected = [weights.indexOf(maxValue)];
    } else {
      alert(`Método "${problemType}" aún no implementado.`);
    }    

    setDpResult(maxValue);
    setSelectedItems(itemsSelected);
  };

  const resetForm = () => {
    setNumItems(0);
    setCapacity(0);
    setWeights([]);
    setValues([]);
    setDistances([]);
    setDpResult(null);
    setSelectedItems([]);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Problema de Programación Dinámica</h1>
      <div className="mb-6">
        <label className="text-lg font-semibold">Selecciona el tipo de problema:</label>
        <select
          value={problemType}
          onChange={(e) => setProblemType(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
        >
          {Object.keys(predefinedProblems).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>

      {problemType === 'knapsack' || problemType === 'brigades' || problemType === 'investment' ? (
  <div>
    <div className="mb-4">
      <label className="block text-lg font-semibold">Capacidad:</label>
      <input
        type="number"
        value={capacity}
        onChange={(e) => setCapacity(Number(e.target.value))}
        className="p-2 border rounded-lg"
      />
    </div>

    <div className="mb-4">
      <h2 className="text-xl font-semibold text-green-600">Datos de Pesos y Valores</h2>
      <table className="table-auto w-full border-collapse border mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Ítem</th>
            <th className="border px-4 py-2">Peso</th>
            <th className="border px-4 py-2">Valor</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: numItems }).map((_, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">Ítem {index + 1}</td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={weights[index] || ''}
                  onChange={(e) => handleInputChange(e, 'weight', index)}
                  className="p-2 border rounded-lg"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={values[index] || ''}
                  onChange={(e) => handleInputChange(e, 'value', index)}
                  className="p-2 border rounded-lg"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
) : problemType === 'routes' ? (
  <div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold text-red-600">Distancias entre Ciudades</h2>
      <table className="table-auto w-full border-collapse border mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Desde/Ciudad</th>
            {[...Array(numItems)].map((_, index) => (
              <th key={index} className="border px-4 py-2">Ciudad {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(numItems)].map((_, fromIndex) => (
            <tr key={fromIndex}>
              <td className="border px-4 py-2">Ciudad {fromIndex + 1}</td>
              {[...Array(numItems)].map((_, toIndex) => (
                <td key={toIndex} className="border px-4 py-2">
                  <input
                    type="number"
                    value={distances[fromIndex]?.[toIndex] || ''}
                    onChange={(e) => handleDistanceChange(e, fromIndex, toIndex)}
                    className="p-2 border rounded-lg"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
) : (
  <div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold text-purple-600">Datos para el Modelo</h2>
      <table className="table-auto w-full border-collapse border mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Período</th>
            <th className="border px-4 py-2">Costo</th>
            <th className="border px-4 py-2">Beneficio</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: numItems }).map((_, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">Período {index + 1}</td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={weights[index] || ''}
                  onChange={(e) => handleInputChange(e, 'weight', index)}
                  className="p-2 border rounded-lg"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={values[index] || ''}
                  onChange={(e) => handleInputChange(e, 'value', index)}
                  className="p-2 border rounded-lg"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}


      <button
        onClick={calculateDP}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Calcular
      </button>

      {dpResult !== null && (
        <div>
          <h2 className="text-xl font-semibold mt-4">Resultado:</h2>
          <p className="text-lg">Valor máximo: {dpResult}</p>
          <p className="text-lg">Items seleccionados: {selectedItems.join(', ')}</p>
        </div>
      )}
    </div>
  );
};
