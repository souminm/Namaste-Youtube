import React, { useState } from "react";

const Demo = () => {
  const [name, setName] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  //heavy operation - memoize this heavy operation using useMemo()
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900")
      }
    >
      <div>
        <button onClick={handleToggleTheme} className="p-2 m-4 bg-red-600">
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
      </div>
    </div>
  );
};

export default Demo;
