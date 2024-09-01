import {Outlet} from "react-router-dom";
import CustomHeader from "../../components/headers/header";
import Footer from "./footer/Footer";

export const WebLayout = () => {
    return (
        <div>
            <main>
            <CustomHeader/>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
