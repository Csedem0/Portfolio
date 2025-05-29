import "./intro.css"
import Me from "../../img/me.jpg"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Nafo Legior Joseph</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                {/* <div className="i-title-item">App Developer</div> */}
                <div className="i-title-item">FullStack Web Developer</div>
                <div className="i-title-item">Data Scientist</div>
                <div className="i-title-item">Data Analyst</div>
                <div className="i-title-item">Executive Assistant</div>
              </div>
            </div>
            {/* <p className="i-desc">
              I design and develope services for customers of all sizes,
              specializing in creating stylish, modern websites, wed services and
              online stores
            </p> */}
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro