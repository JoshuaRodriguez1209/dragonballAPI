import React, { useState, useEffect } from 'react';

export const Gallery = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null); 
  const [window, setWindow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters');
        const result = await response.json();
        console.log(result);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const openWindow = (character) => {
    setSelectedCharacter(character);
    setWindow(true);
  };


  const closeWindow = () => {
    setSelectedCharacter(null);
    setWindow(false);
  };

  return (
    <div className='bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full'>
      <h1 className='text-2xl font-bold text-center mb-4'>Personajes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='grid grid-cols-2 gap-4'>
          {data.items.map((item, index) => {
            return (
              <li
                key={index}
                className='bg-gray-100 p-4 rounded-lg flex flex-col justify-center items-center cursor-pointer'
                onClick={() => openWindow(item)}
              >
                <img src={item.image} alt={item.name} className='h-64 object-contain' />
                <h2 className='text-lg font-bold text-center mt-2'>{item.name}</h2>
              </li>
            );
          })}
        </ul>
      )}


      {openWindow && selectedCharacter && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white rounded-lg p-6 max-w-md w-full'>
            <h2 className='text-2xl font-bold mb-4'>{selectedCharacter.name}</h2>
            <p><strong>Descripción:</strong> {selectedCharacter.description}</p>
            <p><strong>Afiliación:</strong> {selectedCharacter.affiliation}</p>
            <p><strong>Ki:</strong> {selectedCharacter.ki}</p>
            <p><strong>Ki Máximo:</strong> {selectedCharacter.maxKi}</p>
            <p><strong>Raza:</strong> {selectedCharacter.race}</p>
            <button 
              className='mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg'
              onClick={closeWindow}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
