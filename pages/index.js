import Menu from "../components/menu.js"
import Img from "../public/img/1.png"

function Home() {
    return (
    <div>
        <Menu />
        <img src={Img} width={"400"} height={"200"}/>
        
    </div>
    )
}

export default Home 