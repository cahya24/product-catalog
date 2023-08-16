import './topnav.css';
import './maincontent.css'

function App() {
  return (
    <>
    

    <div class="topnav">
      <img src={require("./home_page_icon.png")} alt="homeIcon" width="38" height="38"></img>
      <a href="#news">News</a>
      <a href="#contact">Contact</a> 
      <a href="#about">About</a>
    </div>

    <div class="maincontent">
      <h1>Products</h1>
      <ul>
        <li>
          <a href="productlink">
            <article class="product">
              <h2>QK 75</h2>
              <img src={require("./qk75.jpg")} alt="qk75"></img>
              <p><data value="75">75</data>$</p>
              <button>Buy Now</button>
            </article>
          </a>
        </li>

        <li>
          <a href="productlink">
            <article class="product">
              <h2>QK 80</h2>
              <img src={require("./qk80.jpg")} alt="qk80"></img>
              <p><data value="80">80</data>$</p>
              <button>Buy Now</button>
            </article>
          </a>
        </li>

        <li>
          <a href="productlink">
            <article class="product">
              <h2>QK 100</h2>
              <img src={require("./qk100.png")} alt="qk100"></img>
              <p><data value="100">100</data>$</p>
              <button>Buy Now</button>
            </article>
          </a>
        </li>
      </ul>
    </div>

    <footer>
      <p>Contact Us</p>
    </footer>
    </>
  );
}
 
export default App;
