import * as style from "./Nav.module.css";

export default function Header(props) {
  console.log(props.isTomato);
  return (
    <nav className={props.isTomato ? style.tomato : style.nav}>
      <ul aria-label="Main Navigation" role="navigation">
        <li>
          <a href="">Women's</a>
        </li>
        <li>
          <a href="">Men's</a>
        </li>
        <li>
          <a href="">On the Street</a>
        </li>
        <li>
          <a href="">The Catwalk</a>
        </li>
        <li>
          <a href="">AdWatch</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
    </nav>
  );
}
