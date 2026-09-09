import { act, useReducer, useState } from "react";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import { getUser } from "./api";

const infoTemplate = {
  user:null,
  loading: false,
  error: null
};

function App() {
  const [handle, setHandle] = useState("");

  const [state, dispatch] = useReducer(infoReducer, infoTemplate);
  function infoReducer(state, action){
    switch (action.type){
      case "searching":
        return {
          ...state,
          loading: true,
          error: null
        };
      case "success":
        return{
          ...state,
          loading: false,
          user: action.payload,
        };
      case "error":
        return{
          ...state,
          user: null,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  }

  async function searchHandle(value) {
    console.log(value);
    dispatch({type: "searching"});
    try {
      const data = await getUser(value);
      dispatch ({
        type: "success",
        payload: data
      });
      setHandle(value);
    }catch(err){
      dispatch({
        type: "error",
        payload: err.message,
      });
    }
  }

  const {loading, error, user} = state;

  return (
    <main>
      <SearchBar searchHandle={searchHandle} />

      {loading && <p>Searching...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && user && <Profile user={user} />}
    </main>
  );
}

export default App;