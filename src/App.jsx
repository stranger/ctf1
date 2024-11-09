import "./App.css";

import { Navbar, Footer, Home } from "./layout";
function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Home></Home>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
