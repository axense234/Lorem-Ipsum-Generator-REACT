// React
import React, { useState } from "react";
// Data
import { segments } from "./data";

const LIGenerator = () => {
  const [segmentsShown, setSegmentsShown] = useState([]);
  const [numberOfParagraphs, setNumberOfParagraphs] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSegmentsShown(segments.slice(0, numberOfParagraphs));
  };

  return (
    <section className='li-generator-container'>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <form
        className='li-generator-container__form'
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <label htmlFor='paragraphs'>Paragraphs: </label>
        <input
          type='number'
          name='paragraphs'
          value={numberOfParagraphs}
          onChange={(e) => setNumberOfParagraphs(e.target.value)}
          min={0}
        />
        <button type='submit'>GENERATE</button>
      </form>
      {segmentsShown.map((segment) => {
        const { id, paragraph } = segment;
        return (
          <div className='li-generator-container__p' key={id}>
            {paragraph}
          </div>
        );
      })}
    </section>
  );
};

export default LIGenerator;
