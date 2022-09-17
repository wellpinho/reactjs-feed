import styles from "./post.module.scss";

const Post = ({ author, description }) => {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/9344482?v=4" />

          <div className={styles.authorInfo}>
            <strong>Wellington Pinho</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title="17 de Setembro ás 10:32" dateTime="2022-09-17 10:32">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é{" "}
          <strong>DoctorCare</strong>
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
};

export default Post;
