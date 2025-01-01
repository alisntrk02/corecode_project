import { useRef, useState } from "react";
import MonacoEditor from "@monaco-editor/react"; // Monaco Editor'ü import ediyoruz
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./constants";

const Monaco = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };
  return (
    <div style={{ height: 400, width: 700 }}>
      <LanguageSelector language={language} onSelect={onSelect} />
      <MonacoEditor
        language={language} // Varsayılan dil
        defaultValue=" function TryNew () {
        const red = 'element',
        const blue = 5
        console.log(red + blue)
  };" // Başlangıç değeri
        onMount={onMount}
        value={value}
        onChange={(value) => setValue(value)}
        theme="vs-dark" // Tema (açık veya koyu)
        options={{
          readOnly: true, // Düzenleme engelleniyor
          minimap: { enabled: false }, // Minimap (küçük harita) devre dışı
          wordWrap: "on", // Kelime sarma
          fontSize: 14, // Yazı tipi boyutu
        }}
      />
    </div>
  );
};

export default Monaco;
