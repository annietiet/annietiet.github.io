import { SocialIcon } from 'react-social-icons';

const socialIconStyle = { height: 50, width: 50 };

function Contact() {
  return (
    <div className="Contact">
      <p>Feel free to connect with me on any of my socials!</p><br></br>
      <SocialIcon url="mailto:anniedtiet@gmail.com" style={socialIconStyle} /> &emsp; 
      <SocialIcon url="https://linkedin.com/in/annietiet" style={socialIconStyle} /> &emsp; 
      <SocialIcon url="https://github.com/annietiet" style={socialIconStyle} /> &emsp; 
      <SocialIcon url="https://www.instagram.com/annietiet_/" style={socialIconStyle} /> &emsp; 
      <br></br><br></br>
      <img src="/sumikko-dance.gif" alt="Sumikko Gurashi characters moving in a line"></img>
    </div>
  );
}

export default Contact