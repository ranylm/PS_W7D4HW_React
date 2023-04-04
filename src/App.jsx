import { useState } from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

import img1 from "./assets/blog-image-1.jpg";
import img2 from "./assets/blog-image-2.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <main>
        <Article
          img={{ img: img1, alt: "Brooklyn Street" }}
          heading="On the Street in Broklyn"
          date="11/12/20"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi labore,
          fugiat, consequatur rerum itaque neque deserunt suscipit magni maxime
          nostrum commodi libero nam tenetur nesciunt quibusdam explicabo ipsum
          perferendis impedit? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sequi labore, fugiat, consequatur rerum itaque neque
          deserunt suscipit magni maxime nostrum commodi libero nam tenetur
          nesciunt quibusdam explicabo ipsum perferendis impedit? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sequi labore, fugiat,
          consequatur rerum itaque neque deserunt suscipit magni maxime nostrum
          commodi libero nam tenetur nesciunt quibusdam explicabo ipsum
          perferendis impedit?
        </Article>
        <Article
          img={{ img: img2, alt: "Some Vogue People" }}
          heading="Vintage in Vogue"
          date="11/11/20"
        >
          Dolor sit amet consectetur adipisicing elit. Sequi labore, fugiat,
          consequatur rerum itaque neque deserunt suscipit magni maxime nostrum
          commodi libero nam tenetur nesciunt quibusdam explicabo ipsum
          perferendis impedit? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sequi labore, fugiat, consequatur rerum itaque neque
          deserunt suscipit magni maxime nostrum commodi libero nam tenetur
          nesciunt quibusdam explicabo ipsum perferendis impedit? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sequi labore, fugiat,
          consequatur rerum itaque neque deserunt suscipit magni maxime nostrum
          commodi libero nam tenetur nesciunt quibusdam explicabo ipsum
          perferendis impedit?
        </Article>
      </main>
      <Footer />
    </div>
  );
}

export default App;
