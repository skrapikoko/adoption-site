import Home from "../Home/Home"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import "./Layout.css"
import Menu from "./Menu/Menu"

function Layout (): JSX.Element {
    return (
        <div className="layout">
            <header>
                <Header/>
            </header>
            <aside>
                <Menu/>
            </aside>
            <main>
                <Home/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
export default Layout