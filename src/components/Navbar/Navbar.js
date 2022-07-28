import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="Name">Annie Tiet</div>
      <div className="Links">
      <a href="/">Home</a> &emsp; 
      <a href="/about">About</a> &emsp; 
      <a href="/contact">Contact</a> &emsp; 
      <a href="/resume">Resume</a>
      </div>
    </div>
  );
}

export default Navbar