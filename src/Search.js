import Links from "./Links";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useGlobalContext } from "./ContextProvider";
import { SearchContainer } from "./global-styles";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useGlobalContext();
  const [debouncedValue] = useDebounce(text, 450);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <SearchContainer>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search.."
      />
      {text && (
        <button type="button" onClick={() => setText("")}>
          &times;
        </button>
      )}
      <Links />
    </SearchContainer>
  );
};

export default Search;
