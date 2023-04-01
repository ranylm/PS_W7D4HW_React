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
        <Article img={{ img: img1, alt: "Brooklyn Street" }} />
        <Article img={{ img: img2, alt: "Some Vogue People" }} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
