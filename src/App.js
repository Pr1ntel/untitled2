import {Route, Routes} from "react-router-dom";


import SecureLayout from "./components/SecureLayout";

import Students from "./components/Students";
import Header from "./components/Header";
import Teachers from "./components/Teachers";
import Auditorys from "./components/Auditorys";



const App = () => {

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<SecureLayout/>}>
                    <Route path="all-students" element={<Students/>}/>
                    <Route path="all-teachers" element={<Teachers/>}/>
                    <Route path="all-auditorys" element={<Auditorys/>}/>



                </Route>
            </Routes>
        </div>

    )
        ;
}

export default App;
