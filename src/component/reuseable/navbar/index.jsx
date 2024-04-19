import style from "./index.module.css"
import FilledButton from "../filledbutton/index"
import  image from  "../../../assest/navbar/Logo.svg"
const Navbar = ()=>{
    return(<div className={style.header}>
        <div>
            <img src={image} alt={"logo"}/>
        </div>
        <div>
            <p>Home</p>
            <p>Service</p>
            <p>Features</p>
            <p>Product</p>
            <p>Testimonials</p>
            <p>Faq</p>
        </div>
        <div style={{marginTop:"15px"}}>
            <FilledButton text={"Login"} text_color={"#4CAF4F"} color={"#ffffff"}/>
            <FilledButton text={"Sign up"} text_color={"#ffffff"} color={"#4CAF4F"}/>
        </div>
    </div>)
}
export default  Navbar