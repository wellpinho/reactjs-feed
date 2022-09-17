import Header from "./components/header";
import Post from "./components/post";
import Sidebar from "./components/sidebar";

import "./styles/global.scss";
import styles from "./app.module.scss";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Wellington Pinho"
            description="lorem ipsun marting foundation"
          />
          <Post
            author="Mary Pinho"
            description="lorem ipsun marting foundation"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
