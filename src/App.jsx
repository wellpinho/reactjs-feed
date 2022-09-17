import Header from "./components/header";
import Post from "./components/post";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello world</h1>

      <Post
        author="Wellington Pinho"
        description="Lorem ipsoum demem borutu chaha"
      />

      <Post author="Raica Pinho" description="Meu pai é muito legal!" />
    </div>
  );
}

export default App;
