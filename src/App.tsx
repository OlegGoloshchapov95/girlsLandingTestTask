import {Route, Routes} from "react-router-dom";
import MainLanding from "./pages/MainLanding/MainLanding";

function App() {
    return (
        <div className="appWrapper">
            <Routes>
                <Route path='/' element={<MainLanding/>}/>
            </Routes>
        </div>
    );
}

export default App;
