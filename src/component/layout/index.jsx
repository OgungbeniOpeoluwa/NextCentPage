import Navbar from "../reuseable/navbar";
import {Outlet} from "react-router-dom";
import Footer from "../reuseable/footer"


const Layout = ()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>

    )
}
export default  Layout