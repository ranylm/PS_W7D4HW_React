import * as style from "./Header.module.css";

import Nav from "./Nav";

export default function Header() {
  return (
    <header className={style.header}>
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <Nav isTomato={false} />
    </header>
  );
}
