import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="#game">GAME</a>
        </li>
        <li>
          <a href="#tokenomics">TOKENOMICS</a>
        </li>

        <li>
          <a href="#community">COMMUNITY</a>
        </li>
      </ul>
    </nav>
  );
}
