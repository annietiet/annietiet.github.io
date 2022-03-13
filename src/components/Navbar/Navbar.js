import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="Name"><a href="/">Annie Tiet</a></div>
      <div className="Links">
      <a href="/#/about">About</a> &emsp; 
      <a href="/#/projects">Projects</a> &emsp; 
      <a href="/#/contact">Contact</a> &emsp; 
      <a href="https://drive.google.com/file/d/1JDntyNsra6H3OAYnBd9wCA12GKgudzQh/view">Resume</a>
      </div>
    </div>
  );
}

export default Navbar