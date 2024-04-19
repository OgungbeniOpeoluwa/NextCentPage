import style from "./index.module.css"
import Data from "./data/data";
const Management = ()=>{
    return(<div>
        <div className={style.innercont}>
            <h3 style={{fontSize:"30 px",fontWeight:"600"}}>Manage your entire community
                <span style={{display:"block"}}>in a single system</span></h3>
            <p>Who is Nextcent suitable for?</p>
        </div>
        <div className={style.mapData}>
        {Data.map((value, index, array) => {
            return(
                <div className={style.innerMain}>
                    <img src={value.image} alt={"logo"}
                         className={style.mapImage}/>
                    <h2 style={{fontSize:"35px",fontWeight:"600",color:"#4D4D4D"}}>{value.title}</h2>
                     <p style={{color:"#717171"}}>{value.body}</p>
                </div>
            )
        })}
        </div>
    </div>)
}
export default Management