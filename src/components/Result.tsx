import FavoriteIcon from "@mui/icons-material/Favorite";
import { Word } from "../Interfaces";
import { ResultStyle } from "./Result.style";

interface Props {
  data: Word[] | undefined;
  onSaveWord: (word: Word) => void;
}

export default function Result({ data, onSaveWord }: Props) {
  // Function to extract country code from the audio URL
  const extractCountryCode = (url: string) => {
    const parts = url.split("-");
    const lastPart = parts[parts.length - 1];
    return lastPart.split(".")[0].toUpperCase();
  };

  return (
    <ResultStyle>
      {data &&
        data.map((data, index) => (
          <div key={index}>
            <h2 data-testid="search-result-heading">{data.word}</h2>
            <div
              className="save"
              data-testId="save"
              onClick={() => {
                onSaveWord(data);
              }}
            >
              <span>Save</span>
              <FavoriteIcon />
            </div>
            <h4>{data.phonetic}</h4>
            <h4>Definitions</h4>
            {data.meanings.map((defs, dIndex) => (
              <ul key={dIndex}>
                {defs.definitions.slice(0, 2).map((def, i) => (
                  <li key={i}>
                    <p>{def.definition}</p>
                  </li>
                ))}
              </ul>
            ))}
            {data.origin && <div>{data.origin}</div>}
            {data.phonetics.map((phonetics, pIndex) => (
              <div className="audio-container" key={pIndex}>
                {phonetics.audio && (
                  <div>
                    <div>
                      <h4>{extractCountryCode(phonetics.audio)}</h4>
                      <span>{phonetics.text}</span>
                    </div>
                    <audio src={phonetics.audio} controls />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
    </ResultStyle>
  );
}
