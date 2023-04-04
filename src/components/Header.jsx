import * as style from "./Header.module.css";

import Nav from "./Nav";

export default function Header() {
  const data = [
    "Women's",
    "Men's",
    "On the Street",
    "The Catwalk",
    "AdWatch",
    "About",
  ];
  return (
    <header className={style.header}>
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <Nav data={data} dataisTomato={false} />
    </header>
  );
}
