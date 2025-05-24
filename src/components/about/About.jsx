import "./about.css"
import Award from "../../img/award.png"

const About = () => {
  return (
    <div className='a'>
        {/* <div className="aaa">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                
                <a href="https://www.udemy.com/certificate/UC-ead9f57d-e0a5-4efc-82be-869d1863931a/"><img src="https://i.ibb.co/THZfz5Q/cert1.jpg" alt="" className="a-img" /></a>
            </div>
        </div>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                
                <a href="https://www.udemy.com/certificate/UC-6fa78645-a2c0-46a0-b352-c58daa40f898/"><img src="https://i.ibb.co/zV4dd8X/cert2.jpg" alt="" className="a-img" /></a>
            </div>
        </div>
        </div> */}
        <div className="a-right">
            <h1 className="a-title">Some Of My Certificates And My Skills</h1>
            <p className="a-sub">
              I am very fluent with the skills listed and  <a href="https://github.com/Csedem0">Click to check out my GITHUB</a>
            </p>
            <p className="a-desc">
           
HTML/CSS,
SASS/SCSS,
Javascript,
Python,
Scikit Learn,
Pandas,
Numpy,
Matplotlib,
Django,
React Js,
Typescript,
Next Js,
Express Js,
Node Js,
MongoDB,
My SQL,
Sqlite3,
Postgress sql,
Firebase,
MERN,
Cpanel,
Render,
Vercel,
Figma.
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">
                        Reviews
                    </h4>
                    <p className="a-award-desc">
                        I have over five years experience in Web/App developement and Data Science career, and have worked with several individuals and organizations who has given me good reviews.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About