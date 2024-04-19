import FilledButton from "../filledbutton";
import image from "../../../assest/footer/Logo.svg"
import  twitter from "../../../assest/footer/twitter.png"
import  instagram from "../../../assest/footer/instagram.svg"
import web from "../../../assest/footer/WEB.png"
import  youtube from "../../../assest/footer/YOUTUBE.png"
import style from "./index.module.css"

const Footer = ()=>{
    const date = new Date().getFullYear()
    return(<div>
        <div style={{textAlign:"center"}}>
            <FilledButton text={"Get a Demo->"} color={"#4CAF4F"} text_color={"#ffffff"}/>
        </div>
        <div className={style.company_media}>
            <div className={style.company}>
            <div>
               <img src={image} alt={"company logo"}/>
            </div>
            <div>
                <p style={{color:"#ffffff"}}>Copyright © {date} Nexcent ltd.</p>
                <p style={{color:"#ffffff"}}>All right reserved</p>
            </div>
            <div className={style.social_icon}>
                <img src={instagram} alt={"instagram"}/>
                <img src={web} alt={"web"}/>
                <img src={twitter} alt={"twitter"}/>
                <img src={youtube} alt={"youtube"}/>
            </div>
            </div>

            <div className={style.company_details}>
                <div>
                    <h3>Company</h3>
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                    <p>Pricing</p>
                    <p>Testimonial</p>
                </div>
                <div>
                    <h3>Support</h3>
                    <p>Help Center</p>
                    <p>Terms Of Service</p>
                    <p>Legal</p>
                    <p>Privacy Policy</p>
                    <p>Status</p>
                </div>
                <div>
                    <h3>Stay up to date</h3>
                    <input type={"text"} placeholder={"Your Email Address"}/>
                </div>
            </div>
        </div>

    </div>)
}
export default Footer