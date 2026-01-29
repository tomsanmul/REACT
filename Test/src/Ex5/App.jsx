//Exercici 5: UTITZANT HOOKS useState, useEffect
// Crida al EndPoint "getALL" de la API REST Apartments i mostrar la llista. Controlar estat am HOOK usseEffect

import axios from "axios";
import { useState, useEffect } from 'react';

export default function List() {
  const [apartments, setApartments] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isAxiosError, setIsAxiosError] = useState(false);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/apartment/api/apartment/getAll");
        setApartments(response.data);
        setIsLoading(false);
   
      }
      catch(error){
        console.error("Error al obtener los apartamentos", error);
        setIsAxiosError(error.isAxiosError || false);
        setIsLoading(false);
      }
  };
  fetchApartments();    
  }, []);

  return (
    <>
      <h1>Apartments</h1>
      <p>This is an exercise to test react render</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        isAxiosError ? (
          <p>Error loading apartments. Please try again later.</p>
        ) : (
          <ul>
            {apartments.map((apartment) => (
              <li key={apartment.id}>
                <strong>ID:</strong> {apartment.id} <br />
                <strong>Price:</strong> {apartment.price} <br />
                <strong>Area:</strong> {apartment.area} <br />
                <strong>Bedrooms:</strong> {apartment.bedrooms} <br />
                <strong>Bathrooms:</strong> {apartment.bathrooms} <br />
                <strong>Stories:</strong> {apartment.stories} <br />
                <strong>Main Road:</strong> {apartment.mainroad} <br />
                <strong>Guest Room:</strong> {apartment.guestroom} <br />
                <strong>Basement:</strong> {apartment.basement} <br />
                <strong>Hot Water Heating:</strong> {apartment.hotwaterheating}{" "}
                <br />
                <strong>Air Conditioning:</strong> {apartment.airconditioning}{" "}
                <br />
                <strong>Parking:</strong> {apartment.parking} <br />
                <strong>Preferred Area:</strong> {apartment.prefarea} <br />
                <strong>Furnishing Status:</strong> {apartment.furnishingstatus}
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
};
