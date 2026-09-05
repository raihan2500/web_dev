import { useState } from "react";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import { getUser } from "./api";

function App() {
  const [handle, setHandle] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function searchHandle(value) {
    setLoading(true);
    setError(null);

    try {
      const data = await getUser(value);
      setUser(data);
      setHandle(value);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

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