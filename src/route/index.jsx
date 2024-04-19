import Layout from "../component/layout";
import Home from "../features/home";

export const  Routes = [
    {
        path:"",
        element:<Layout/>,
        children:[
            {
                path: "",
                element:<Home/>
            }
        ]
    }
]

