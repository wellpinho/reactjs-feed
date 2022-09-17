import Avatar from "../avatar";
import Comment from "../coments";
import styles from "./post.module.scss";

const Post = ({ content }) => {
  const { avatar, date, email, name, role } = content.author;

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={avatar} />

          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time>{date}</time>
      </header>

      <div className={styles.content}>
        {content.content.map((item) => {
          return (
            <div key={content.id}>
              <h4>{item.title}</h4>
              <small>{item.body}</small>
              <p>
                <a href="#">{email}</a>
              </p>

              {item.tags.map((tag) => (
                <a key={tag} href="#">
                  {" "}
                  {tag}
                </a>
              ))}
            </div>
          );
        })}
      </div>

      <form className={styles.form}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="deixe um comentário..." />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
};

export default Post;
