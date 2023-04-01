import * as style from "./Article.module.css";

export default function Article(props) {
  return (
    <article className={style.article}>
      <h3>11/12/20</h3>
      <h2>On the Street in Broklyn</h2>
      <img src={props.img.img} alt={props.img.alt} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi labore,
        fugiat, consequatur rerum itaque neque deserunt suscipit magni maxime
        nostrum commodi libero nam tenetur nesciunt quibusdam explicabo ipsum
        perferendis impedit? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Sequi labore, fugiat, consequatur rerum itaque neque deserunt
        suscipit magni maxime nostrum commodi libero nam tenetur nesciunt
        quibusdam explicabo ipsum perferendis impedit? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Sequi labore, fugiat, consequatur
        rerum itaque neque deserunt suscipit magni maxime nostrum commodi libero
        nam tenetur nesciunt quibusdam explicabo ipsum perferendis impedit?
      </p>
      <span>Continues ...</span>
    </article>
  );
}
