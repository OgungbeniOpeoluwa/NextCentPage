import  image from "../../../assest/home/pixelgrade/Frame 35.png"
import FilledButton from "../../../component/reuseable/filledbutton";
import style from "./index.module.css"
const Pixel =()=>{
    return(<div className={style.mainCont}>
        <div>
        <img src={image} alt={"pixel"}/>
        </div>
        <div className={style.innerCont}>
            <h2>The unseen of spending three years at Pixelgrade</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <FilledButton text={"Learn More"} color={"#4CAF4F"} text_color={"#ffffff"}/>
        </div>d
    </div>)
}
export  default Pixel