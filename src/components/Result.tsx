import { useEffect, useState } from "react";
import Player from "./Player";

interface Word {
  word: string;
  phonetic: string;
  phonetics: Array<{ text: string; audio?: string }>;
  origin: string;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      example?: string;
      synonyms: string[];
      antonyms: string[];
    }>;
  }>;
}

export default function Result() {
  const [wordData, setwordData] = useState<Word[]>([]);
  const fetchData = async () => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
      .then((wordData) => {
        if (!wordData.ok) {
          throw new Error("wordData not ok");
        }
        return wordData.json();
      })
      .then((data) => {
        setwordData(data);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <p>API result</p>
      {wordData &&
        wordData.map((word, index) => (
          <div key={index}>
            <h2>{word.word}</h2>
            {word.meanings.map((defs, dindex) => (
              <div key={dindex}>
                {defs.definitions.map((def, i) => (
                  <div key={i}>{def.definition}</div>
                ))}
              </div>
            ))}
            <div>{word.phonetic}</div>
            <div>{word.origin}</div>
          </div>
        ))}
      <Player />
    </>
  );
}
