import { useEffect, useState } from "react";
import api from "./api";
import Header from "./components/header";
import Post from "./components/post";
import Sidebar from "./components/sidebar";

import "./styles/global.scss";
import styles from "./app.module.scss";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(api);
  }, []);

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return <Post key={post.id} content={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
