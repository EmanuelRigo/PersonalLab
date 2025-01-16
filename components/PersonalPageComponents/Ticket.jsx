import React from 'react';

const Ticket = () => {
  const patient = {
    name: "Juan Pérez",
    age: 30,
    dni: "12345678",
    tel: "+123 456 7890",
    address: "Calle Falsa 123, Ciudad, País"
  };

  const studies = [
    "Análisis de Sangre",
    "Análisis de Orina",
    "Análisis de Glucosa"
  ];

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Ticket de Estudios</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Datos del Paciente</h3>
        <p><strong>Nombre:</strong> {patient.name}</p>
        <p><strong>Edad:</strong> {patient.age}</p>
        <p><strong>DNI:</strong> {patient.dni}</p>
        <p><strong>Teléfono:</strong> {patient.tel}</p>
        <p><strong>Dirección:</strong> {patient.address}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Estudios a Realizar</h3>
        <ul className="list-disc list-inside">
          {studies.map((study, index) => (
            <li key={index} className="text-gray-700">{study}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Ticket;