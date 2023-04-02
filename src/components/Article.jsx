import * as style from "./Article.module.css";

export default function Article(props) {
  return (
    <article className={style.article}>
      <h3>{props.date}</h3>
      <h2>{props.heading}</h2>
      <img src={props.img.img} alt={props.img.alt} />
      <p>{props.children}</p>
      <span>Continues ...</span>
    </article>
  );
}
