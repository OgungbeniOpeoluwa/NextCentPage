import image from "../../../assest/achievement/Icon (6).png"
import image1 from "../../../assest/achievement/Icon (7).png"
import image2 from "../../../assest/achievement/Icon (8).png"
import image3 from "../../../assest/achievement/Icon (9).png"
import style from "./index.module.css"

const Achievement = () => {
    return (<div className={style.mainCont}>
        <div>
            <h2 style={{color: "#4D4D4D",fontWeight:"600" }}>Helping a local business<span style={{color: "#4CAF4F", display: "block",fontWeight:"600"}}> reinvent itself</span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
        </div>
        <div className={style.achievement}>
            <div>
                <img src={image} alt={"people"}/>
                <p> 2,245,341<span style={{display: "block"}}>Members</span></p>
            </div>
            <div>
                <img src={image1} alt={"hand"}/>
                <p>46,328<span style={{display: "block"}}>Clubs</span></p>
            </div>
            <div>
                <img src={image2} alt={"hand"}/>
                <p>828,867<span style={{display: "block"}}>Event Bookings</span></p>
            </div>
            <div>
                <img src={image3} alt={"hand"}/>
                <p>1,926,436<span style={{display: "block"}}>Payments</span></p>
            </div>
        </div>
    </div>)
}
export default Achievement
