import FilledButton from "../../../component/reuseable/filledbutton";
import hero from  "../../../assest/home/hero/Illustration.svg"
import  style from "./index.module.css"

const Hero = ()=>{
    return(<div className={style.mainCont}>
        <div className={style.content}>
        <div className={style.heroContent}>
            <h1>Lessons and insights
                <span style={{display:"block" ,color:"#4CAF4F"}}>from 8 years</span></h1>
            <p>where to grow your business as a photographer: site or social media?</p>
        </div>
        <FilledButton text={"Register"} color={"#4CAF4F"} text_color={"#ffffff"}/>
            </div>
        <div className={style.heroimg}>
            <img src={hero} alt={"hero"}/>
        </div>
    </div>)
}

export default Hero
