import './About.css';

function About() {
  return (
    <div className="twoColumns">
      <div className="left">
      <div className="break"></div>
        <img src="/me.png" alt="annie" width="250px"></img>
        <div className="break"></div>
        <h1>current favorites</h1> 
        <table>
        <tr>
          <th>food</th>
          <td>🍜 spicy tonkatsu pork ramen</td>
        </tr>
        <tr>
          <th>drink</th>  
          <td>🍵 brown sugar matcha latte</td>      
        </tr>
        <tr>
          <th>song</th>  
          <td>☀️ sunny day by beabadoobee</td>   
        </tr>
        <tr>
          <th>kpop</th>  
          <td>🎶 the boyz, twice</td>   
        </tr>
        <tr>
          <th>anime</th>  
          <td>📺 one piece, naruto, nichijou</td>
        </tr>
        <tr>
          <th>manga</th>  
          <td>📕 slam dunk, gekkan shoujo</td>
        </tr>
        <tr>
          <th>manhwa</th>  
          <td>📖 sss-class suicide hunter</td>
        </tr>
        <tr>
          <th>game</th>  
          <td>🎮 fire emblem three hopes</td>
        </tr>
    </table>
      </div>
      <div className="right">
        <p>
        hi! i'm annie - i study software engineering at rochester institute of technology and graduate in may 2024.
        <br></br><br></br>
        i've been interested in computing since a young age. at 10 years old, i started selling user profiles on a game called tinierme,  
        where i used html and css to create custom 'about me pages' in exchange for virtual dress up fashion items. i continued gaining
        an exposure when i took ap computer science principles and ap computer science in high school. i also attended
        a girls who code summer camp at rit, and participated in a local k-12 female hackathon, rocgirlhacks. both of those events were held with 
        support from the women in computing organization @ rit, which i am a part of today!
        <br></br><br></br>
        i am passionate about having a welcoming environment in tech for all. the early outreach i encountered in the past provided
        me with a safe space to explore and learn about computing, which i would like the same for anyone and everyone. as part of this,
        i am a part of the wichacks commitee - the team responsible for organizing wic's annual women, femme, and nonbinary 24-hour hackathon.
        <br></br><br></br>
        excited to gain industry experience as i go through more internships, co-ops, and other potential learning opportunities!
        <br></br><br></br>
        <img src="/flowers.gif" alt="flowers"></img>
        </p>
      </div>
    </div>
  );
}

export default About