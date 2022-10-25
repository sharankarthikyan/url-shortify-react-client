import { Routes, Route } from "react-router-dom";

import { MainContainerOuterDiv, MainContainerDiv } from "./App.styles";

import HomePage from "./pages/home/home.page";
import PageNotFound from "./pages/page-not-found/page-not-found.page";

function App() {
    return (
        <div className="App">
            <MainContainerOuterDiv>
                <MainContainerDiv>
                    <Routes>
                        <Route exact path="/" element={<HomePage />}></Route>
                        <Route path="*" element={<PageNotFound />}></Route>
                    </Routes>
                </MainContainerDiv>
            </MainContainerOuterDiv>
        </div>
    );
}

export default App;
