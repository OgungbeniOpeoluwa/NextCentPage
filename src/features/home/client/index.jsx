import style from "./index.module.css"
import logo from "../../../assest/home/client/Logo.png"
import logo1 from "../../../assest/home/client/Logo (1).png"
import  logo2 from "../../../assest/home/client/Logo (2).png"
import  logo3 from "../../../assest/home/client/Logo (3).png"
import  logo4 from "../../../assest/home/client/Logo (4).png"
import  logo5 from "../../../assest/home/client/Logo (5).png"

const  Client = ()=>{
    return (<div>
        <div className={style.mainCont}>
            <h2 style={{fontSize:"30px",fontWeight:"600"}}>Our Clients</h2>
            <p>We have been working with some Fortune 500+</p>
        </div>
        <div className={style.logo}>
            <img src={logo} alt={"logo"}/>
            <img src={logo1} alt={"logo"}/>
            <img src={logo2} alt={"logo"}/>
            <img src={logo3} alt={"logo"}/>
            <img src={logo4} alt={"logo"}/>
            <img src={logo5} alt={"logo"}/>
        </div>

    </div>)
}
export default Client