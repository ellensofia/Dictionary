import { Word } from "../Interfaces";

interface Props {
  data: Word[] | undefined;
}

export default function Result({ data }: Props) {
  // Function to extract country code from the audio URL
  const extractCountryCode = (url: string) => {
    const parts = url.split("-");
    const lastPart = parts[parts.length - 1];
    return lastPart.split(".")[0].toUpperCase();
  };

  return (
    <>
      {data &&
        data.map((data, index) => (
          <div key={index}>
            <h2 data-testid="search-result-heading">{data.word}</h2>
            <h4>{data.phonetic}</h4>
            <h4>Definitions</h4>
            {data.meanings.map((defs, dIndex) => (
              <ul key={dIndex}>
                {defs.definitions.slice(0, 2).map((def, i) => (
                  <li>
                    <p key={i}>{def.definition}</p>
                  </li>
                ))}
              </ul>
            ))}
            <div>{data.origin}</div>
            {data.phonetics.map((phonetics, pIndex) => (
              <div key={pIndex}>
                {phonetics.audio && (
                  <div key={pIndex}>
                    <h4>{extractCountryCode(phonetics.audio)}</h4>
                    <span>{phonetics.text}</span>
                    <audio src={phonetics.audio} controls />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
    </>
  );
}
