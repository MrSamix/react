import { useState } from "react";

const transliterate = (text) => {
  const map = {
    А: "A", а: "a", Б: "B", б: "b", В: "V", в: "v", Г: "H", г: "h", Ґ: "G", ґ: "g",
    Д: "D", д: "d", Е: "E", е: "e", Є: "Ye", є: "ie", Ж: "Zh", ж: "zh", З: "Z", з: "z",
    И: "Y", и: "y", І: "I", і: "i", Ї: "Yi", ї: "i", Й: "Y", й: "i", К: "K", к: "k",
    Л: "L", л: "l", М: "M", м: "m", Н: "N", н: "n", О: "O", о: "o", П: "P", п: "p",
    Р: "R", р: "r", С: "S", с: "s", Т: "T", т: "t", У: "U", у: "u", Ф: "F", ф: "f",
    Х: "Kh", х: "kh", Ц: "Ts", ц: "ts", Ч: "Ch", ч: "ch", Ш: "Sh", ш: "sh",
    Щ: "Shch", щ: "shch", Ю: "Yu", ю: "iu", Я: "Ya", я: "ia", Ь: "", ь: ""
  };
  return text.replace(/([ЄЇЮЯ])/g, m => ({Є: "Ye", Ї: "Yi", Ю: "Yu", Я: "Ya"}[m] || m))
    .replace(/([єїюя])/g, m => ({є: "ie", ї: "i", ю: "iu", я: "ia"}[m] || m))
    .split("").map(char => map[char] || char).join("");
};

import { useEffect } from "react";

function Transliterator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput(transliterate(input));
  }, [input]);

  return (
    <div>
      <h2>Транслітерація тексту</h2>
      <input
        type="text"
        placeholder="Введіть текст українською"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <input
        type="text"
        value={output}
        readOnly
        placeholder="Транслітерований текст"
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default Transliterator;
