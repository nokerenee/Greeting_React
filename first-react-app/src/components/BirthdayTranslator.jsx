import { useState } from "react";

const phrases = new Map([
  ["english", "Happy Birthday"],
  ["german", "Alles Gute zum Geburtstag"],
  ["spanish", "Feliz Cumpleaños"],
  ["punjabi", "Janamdin Mubarak"],
  ["french", "Joyeux Anniversaire"],
]);

function BirthdayTranslator() {
  //   const [currentLanguage, setCurrentLanguage] = useState("english");
  //   const [phrase, setPhrase] = useState(phrases.get("english"));

  //   const handleChangeLanguage = (lang) => {
  //     setCurrentLanguage(lang);
  //     setPhrase(phrases.get(lang));
  //   };

  //   const [currentPhrase, setCurrentPhrase] = useState({
  //     lang: "english",
  //     phrase: "Happy Birthday",
  //   });

  //   const handleChangeLanguage = (newlang) => {
  //     setCurrentPhrase({ lang: newlang, phrase: phrases.get(newlang) });
  //   };

  const [currentLanguage, setCurrentLanguage] = useState("english");

  const handleChangeLanguage = (newlang) => {
    setCurrentLanguage(newlang);
  };

  const languageButtons = Array.from(phrases.keys()).map((lang) => (
    <button key={lang} onClick={() => handleChangeLanguage(lang)}>
      {lang}
    </button>
  ));

  return (
    <div className="BirthdayTranslator componentBox">
        {/* <h3>{phrase}! ({currentLanguage})</h3> */}
        {/* <h3>{currentPhrase.phrase}! ({currentPhrase.lang})</h3> */}
      <h3>
        {phrases.get(currentLanguage)}! ({currentLanguage})
      </h3>
      {languageButtons}
      {/* <button onClick={() => handleChangeLanguage("english")}>English</button>
      <button onClick={() => handleChangeLanguage("german")}>German</button>
      <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>
      <button onClick={() => handleChangeLanguage("punjabi")}>Punjabi</button> */}
    </div>
  );
}

export default BirthdayTranslator;
// ++ Try generating the buttons from the phrases Map dynamically
// instead of hardcoding them, then adding support for more languages
