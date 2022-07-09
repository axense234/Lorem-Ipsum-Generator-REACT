import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { segments } from "./segments";
import "./style.css";

const MainApp = () => {
  const [segmentsShown, setSegmentsShown] = useState([]);
  const [numberP, setNumberP] = useState(0);
  const [clicky, setClicky] = useState(false);

  useEffect(() => {
    const newSegments = segments.filter((segment) => {
      return segment.id <= numberP;
    });
    setSegmentsShown(newSegments);
  }, [clicky]);

  const generateP = (e) => {
    if (numberP < 1) {
      setNumberP(1);
    } else {
      setNumberP(e.target.value);
    }
  };

  return (
    <>
      <h1 id='title'>TIRED OF BORING LOREM IPSUM?</h1>
      <div className='main-div'>
        <form action=''>
          <label htmlFor='paragraphs'>Paragraphs: </label>
          <input
            type='number'
            name='paragraphs'
            value={numberP}
            onChange={(e) => generateP(e)}
          />
        </form>
        <button onClick={() => setClicky(!clicky)}>GENERATE</button>
      </div>
      {segmentsShown.map((segment) => {
        const { id, paragraph } = segment;
        return (
          <p id='paragraph' key={id}>
            {paragraph}
          </p>
        );
      })}
    </>
  );
};

ReactDOM.render(<MainApp></MainApp>, document.getElementById("root"));
