import {useState} from "react";
import './App.css'
import Header from "./components/Header.jsx";
import ExtensionList from "./components/ExtensionList.jsx";

function App() {
    const [theme, setTheme] = useState('dark')

    return (
        <main className="App" data-theme={theme}>
            <Header theme={theme} setTheme={setTheme} />
            <ExtensionList />
        </main>
    )
}

export default App
