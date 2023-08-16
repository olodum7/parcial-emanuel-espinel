import React, { useState } from "react";
import Card from './../Card/Card'
import './Form.css';

const Form = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNameChange = (e) => {
    if (!formSubmitted) {
      setName(e.target.value);
    }
  };

  const handleCountryChange = (e) => {
    if (!formSubmitted) {
      setCountry(e.target.value);
    }
  };

  const handlerForm = (e) => {
    e.preventDefault();

    if (name.trim().length < 3 || name.startsWith(" ") || country.trim().length < 6) {
      setError("Por favor chequea que la información sea correcta");
    } else {
      setError("");
      setShowCard(true);
      setFormSubmitted(true);
    }
  };

  const handleReset = () => {
    setName("");
    setCountry("");
    setError("");
    setShowCard(false);
    setFormSubmitted(false);
  };

  return (
    <>
      <form onSubmit={handlerForm}>
        <div>
          <label>Nombre:
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              onChange={handleNameChange}
              value={name}
              disabled={formSubmitted}
            />
          </label>
        </div>
        <div>
          <label>País de residencia:
            <input
              type="text"
              placeholder="Ingresa tu país de residencia"
              onChange={handleCountryChange}
              value={country}
              disabled={formSubmitted}
            />
          </label>
        </div>
        <div>
          <button className="submit-btn" type="submit" disabled={formSubmitted}>
            Enviar
          </button>
          <button className="reset-btn" type="button" onClick={handleReset}>
            Resetear
          </button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
      {showCard && <Card name={name} residenceCountry={country} />}
    </>
  );
};

export default Form;
