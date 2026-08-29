import Header from "./Header";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
function App(){
  const handle = "Raihan";
  return(
    <>
      <Header />
      <SearchBar />
      <Profile handle={handle} />
    </>
  );
}
export default App;