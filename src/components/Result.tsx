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
      {data && data.length > 0 && (
        <section>
          <h2 data-testid="search-result-heading">{data[0].word}</h2>
          <div
            className="save"
            data-testid="save"
            onClick={() => {
              onSaveWord(data[0]);
            }}
          >
            <span>Save</span>
            <FavoriteIcon />
          </div>
          {data.map((data, index) => (
            <div key={index}>
              <h3 className="phonetic">
                {index + 1}. {data.phonetic}
              </h3>
              {data.meanings.map((defs, dIndex) => (
                <div key={dIndex}>
                  <h4>{defs.partOfSpeech}</h4>
                  <ul>
                    {defs.definitions.slice(0, 10).map((def, i) => (
                      <>
                        <li key={i}>
                          <p>{def.definition}</p>
                        </li>

                        {def.synonyms.length > 0 && (
                          <>
                            <h5 className="synonyms">Synonyms</h5>
                            {def.synonyms.map((synonym, synonymIndex) => (
                              <div key={synonymIndex} className="synonym">
                                {synonym}
                              </div>
                            ))}
                          </>
                        )}
                      </>
                    ))}
                  </ul>
                </div>
              ))}
              {data.origin && <div>{data.origin}origin</div>}
              {data.phonetics.map((phonetics, pIndex) => (
                <div className={"audio-container"} key={pIndex}>
                  {phonetics.audio && (
                    <div>
                      <h4>{extractCountryCode(phonetics.audio)}</h4>
                      <audio src={phonetics.audio} controls />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </section>
      )}
    </ResultStyle>
  );
}
