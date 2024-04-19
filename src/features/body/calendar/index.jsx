import {useState} from "react";

const Calendar = ()=>{
    const [color,setColor] = useState("red")
    const [native,setNative] = useState({
            name: "ope",
            cohort: "18",
            className: "xplorers",
            hobby: "reading"
        }
    );
    const[count,setCount] = useState(0)
    const updateHobby = ()=>{
        setNative(previous=>{
           return {...previous, hobby:"sleeping"}
        })
    }
    // return(<>
    //     {/*<iframe width="1022" height="575" src="https://www.youtube.com/embed/z5nc9MDbvkw"*/}
    //     {/*        title="Introduction To Cyber Security | Cyber Security Training For Beginners | CyberSecurity | Simplilearn"*/}
    //     {/*        frameBorder="50"*/}
    //     {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
    //     {/*        allowFullScreen></iframe>*/}
    //     {/*<h1>My hobby{native.hobby}</h1>*/}
    //     {/*<p>my name is {native.name},am in {native.cohort},my classname{native.className}</p>*/}
    //     {/*<h1>My Favorite color is{color}!</h1>*/}
    //     {/*<h1>Updated details{native.hobby}</h1>*/}
    //     <button type={"button"} onClick={() => setColor("blue")}>Blue
    //         <button type={"button"} onClick={updateHobby}>natives</button>
    //     </button>
    //
    // </>)
}

export default Calendar