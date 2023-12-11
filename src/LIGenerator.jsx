// React
import React, { useState } from "react";
// Data
import { segments } from "./data";

const LIGenerator = () => {
  const [segmentsShown, setSegmentsShown] = useState([]);
  const [numberOfParagraphs, setNumberOfParagraphs] = useState(0);

  const calculateSegmentsOverflow = () =>{
      let i = Math.floor(numberOfParagraphs / segments.length);
      let r = numberOfParagraphs % segments.length
      let changedSegmentsShown = segments;
      for(let a = 1; a < i;a++){
        changedSegmentsShown = changedSegmentsShown.concat(segments)
      }
      if(r){
        changedSegmentsShown = changedSegmentsShown.concat(segments.slice(0,r));
      }
      return changedSegmentsShown
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSegmentsShown(numberOfParagraphs <= segments.length ? segments.slice(0, numberOfParagraphs) : calculateSegmentsOverflow());
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
      {segmentsShown.map((segment, index) => {
        const { paragraph } = segment;
        return (
          <div className='li-generator-container__p' key={index}>
            {paragraph}
          </div>
        );
      })}
    </section>
  );
};

export default LIGenerator;
