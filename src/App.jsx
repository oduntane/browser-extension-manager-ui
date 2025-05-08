import {useState} from "react";
import './App.css'
import Header from "./components/Header.jsx";

function App() {
    const [theme, setTheme] = useState('light')

    return (
        <div className="App" data-theme={theme}>
            <Header theme={theme} setTheme={setTheme} />
        </div>
    )
}

export default App
