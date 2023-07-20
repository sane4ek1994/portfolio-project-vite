import './App.css'
import {Header} from "./components/header/Header.tsx";
import {MainBlock} from "./components/main/Main.tsx";
import {Skills} from "./components/skills/Skills.tsx";
import 'normalize.css';
import {MyProject} from "./components/myProject/MyProject.tsx";
import {Promo} from "./components/promo/Promo.tsx";
import {Form} from "./components/form/Form.tsx";
import {Footer} from "./components/footer/Footer.tsx";

function App() {

    return (
        // Я не знаю как правильно сделать объщий контейнер для конпонентов 🔴🤔 по этому просто каждому section задаю padding 20px
        <>
            <Header/>
            <MainBlock/>
            <Skills/>
            <MyProject/>
            <Promo/>
            <Form/>
            <Footer/>
        </>
    )
}

export default App
