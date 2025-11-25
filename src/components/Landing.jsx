import Header from "./Header"
import Experience from "./Experience"
const Landing = () => {
    return (
        <div className="pagecentercontainer">
            <div className="separator-div"></div>
            <div className="pagecontent">
                <Header />
                <div>
                    <Experience text="position text" image="./vite.svg" imagealt="vite logo" />
                    <Experience text="position 2 text" />
                    <Experience text="position 3 text" />
                </div>
            </div>
            <div className="separator-div"></div>
        </div>
    )
}
export default Landing