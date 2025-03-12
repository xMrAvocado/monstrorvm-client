import { Link } from "react-router-dom"


function Sidebar(props) {

    // CSS

    const sideBarCSS = {
        alignItems: "center",
        border: "solid", 
        paddingLeft: "15px",
        opacity:"0.90",
        minHeight: "20vh",
        minWidth: "97.8vw", 
        backgroundColor: "#4a4a4a",
        position:"fixed", 
        top:"89px",
        transform: props.cambioScaleY,
        transition: "all 0.4s",
    }


    return (
        <div style={sideBarCSS}>  
            <Link to ="/"><h2 className="menuOption">CATEGORIES</h2></Link><hr className="lineSeparation"/>
            <Link to ="/add-monster"><h2 className="menuOption">ADD MONSTER</h2></Link><hr className="lineSeparation"/>
            <Link to="/about"><h2 className="menuOption">ABOUT ME</h2></Link>
        </div>
    )
}

export default Sidebar