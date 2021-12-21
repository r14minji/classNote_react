import './css/style.css';
import Footer from './components/Footer.js';
import {Logo, Menu} from './components/Header.js';

const name1 = "David"

function App() {
  return (
    <div className="App">
      {/* 전체 레이아웃 */}
      <figure>
        <Logo />
        <Menu/>

          <section>
            <article>
              <div className="inner">
                {name1}
              </div>
            </article>
            <article>
              <div className="inner">
                Andy
              </div>
            </article>
            <article>
              <div className="inner">
                Michael
              </div>
            </article>
            <article>
              <div className="inner">
                Julia
              </div>
            </article>
            <article>
              <div className="inner">
                Christoper
              </div>
            </article>
            <article>
              <div className="inner">
                Emma
              </div>
            </article>
            <article>
              <div className="inner">
                Catherin
              </div>
            </article>
            <article>
              <div className="inner">
                Alice
              </div>
            </article>
          </section>
        <Footer />


      </figure>
    </div>
  );
}

export default App;
