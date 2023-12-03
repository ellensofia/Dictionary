import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Word } from "../Interfaces";
import { ResultStyle } from "./Result.style";

interface Props {
  searchResult: Word[] | undefined;
  onSaveWord: (word: Word) => void;
}

export default function Result({ searchResult, onSaveWord }: Props) {
  // Function to extract country code from the audio URL
  const extractCountryCode = (url: string) => {
    const knownCountryCodes = ["us", "uk", "au", "ca"];
    const countryCode = knownCountryCodes.find((code) =>
      url.includes(`-${code}`)
    );
    return countryCode ? countryCode.toUpperCase() : "Unknown";
  };

  return (
    <ResultStyle>
      {searchResult && searchResult.length > 0 && (
        <article>
          <Tooltip title="Save word" arrow>
            <IconButton
              className="save"
              aria-label="Save word"
              onClick={() => {
                onSaveWord(searchResult[0]);
              }}
            >
              <StarOutlineIcon />
            </IconButton>
          </Tooltip>
          {searchResult.map((word, index) => (
            <div key={index}>
              <div className="title">
                {searchResult.length > 1 && <span>{index + 1}.</span>}
                <h2 data-testid="search-result-heading">{word.word}</h2>
                <h3 className="phonetic" data-testid="phonetic">
                  {word.phonetic ? (
                    <>{word.phonetic}</>
                  ) : (
                    word.phonetics &&
                    word.phonetics.find((phonetic) => phonetic.text)?.text
                  )}
                </h3>
              </div>
              {word.meanings.map((meaning, mIndex) => (
                <div key={mIndex}>
                  <h3 className="partOfSpeech" data-testid="partOfSpeech">
                    {meaning.partOfSpeech}
                  </h3>
                  {meaning.definitions
                    .slice(0, 10)
                    .map((definition, dIndex) => (
                      <div key={dIndex}>
                        <p data-testid="definition">
                          <b>Definition: </b> {definition.definition}
                        </p>
                        {definition.example && (
                          <p data-testid="example">
                            <b>Example: </b>
                            {definition.example}
                          </p>
                        )}
                        {/* Synonyms */}
                        {definition.synonyms &&
                          definition.synonyms.length > 0 && (
                            <div>
                              <h4 className="list">Synonyms</h4>
                              <ul>
                                {definition.synonyms
                                  .slice(0, 10)
                                  .map((synonym, sIndex) => (
                                    <li key={sIndex} data-testid="synonym">
                                      {synonym}
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          )}
                        {/* Antonyms */}
                        {definition.antonyms &&
                          definition.antonyms.length > 0 && (
                            <div>
                              <h4 className="list">Antonyms</h4>
                              <ul>
                                {definition.antonyms.map((antonym, aIndex) => (
                                  <li key={aIndex} data-testid="atonym">
                                    {antonym}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                      </div>
                    ))}
                </div>
              ))}

              {word.phonetics.map((phonetics, pIndex) => (
                <React.Fragment key={pIndex}>
                  {phonetics.audio && (
                    <div className={"audio-container"}>
                      <h4>{extractCountryCode(phonetics.audio)}</h4>
                      <audio role="audio" src={phonetics.audio} controls />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          ))}
        </article>
      )}
    </ResultStyle>
  );
}
