import { useEffect, useState } from "react";
import Avatar from "../avatar";
import Comment from "../coments";
import styles from "./post.module.scss";

const Post = ({ content }) => {
  const { avatar, date, email, name, role } = content.author;

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  function handleCreateNewComment(e) {
    e.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleNewComment(e) {
    setNewComment(e.target.value);
  }

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

      <form onSubmit={handleCreateNewComment} className={styles.form}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={handleNewComment}
          value={newComment}
          placeholder="deixe um comentário..."
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
};

export default Post;
