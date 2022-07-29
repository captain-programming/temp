import { useState } from "react";
import Slide from "./Components/Slide";
import "./styles.css";

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
  const [id, setId] = useState(0);

  const nextButton = () => {
    setId(id + 1);
  };

  const prevButton = () => {
    setId(id - 1);
  };

  console.log(id);
  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide data={data[id]} />
      <button data-testid="prev" onClick={prevButton} disabled={id === 0}>
        Prev
      </button>
      <button
        data-testid="next"
        onClick={nextButton}
        disabled={id === data.length - 1}
      >
        Next
      </button>
    </div>
  );
}
