import { useRef } from "react";

function SearchBar(props) {
  const userInputRef = useRef();

  function search() {
    const value = userInputRef.current.value.trim();

    if (value === "") return;

    props.searchHandle(value);
  }

  return (
    <div>
      <input
        ref={userInputRef}
        type="text"
        placeholder="Enter the username"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            search();
          }
        }}
      />

      <button onClick={search}>Search</button>
    </div>
  );
}

export default SearchBar;