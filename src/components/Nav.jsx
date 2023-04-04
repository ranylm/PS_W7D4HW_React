import * as style from "./Nav.module.css";

export default function Header(props) {
  console.log(props.isTomato);
  return (
    <nav className={props.isTomato ? style.tomato : style.nav}>
      <ul aria-label="Main Navigation" role="navigation">
        {props.data.map((e) => {
          return (
            <li>
              <a href="">{e}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
