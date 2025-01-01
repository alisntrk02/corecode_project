import { LANGUAGE_VERSIONS } from "./constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

function LanguageSelector({ language, onSelect }) {
  return (
    <div>
      <label className="mb-2 text-lg text-white font-dbc ">Language:</label>
      <select
        value={language}
        onChange={(e) => onSelect(e.target.value)}
        className="block mb-1 w-[150px] bg-[#818dcc2d]  border border-gray-800 rounded-lg shadow-sm px-4 py-2 pr-10 text-white focus:outline-none sm:text-sm transition-all"
      >
        {languages.map(([lang, version]) => (
          <option className="bg-[#191818]" key={lang} value={lang}>
            {lang} &nbsp; <span>{version}</span>
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
