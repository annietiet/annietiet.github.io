import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="Name"><a href="/">Annie Tiet</a></div>
      <div className="Links">
      <a href="/about">About</a> &emsp; 
      <a href="/projects">Projects</a> &emsp; 
      <a href="/contact">Contact</a> &emsp; 
      Resume
      </div>
    </div>
  );
}

export default Navbar