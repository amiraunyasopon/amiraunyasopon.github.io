import Header from "./Header"
import Experience from "./Experience"
import Footer from "./Footer"
const Landing = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="">
                <Header />
                <div className="separator-div"></div>
                <div className="">
                    <div>
                        <Experience text="position text" image="./vite.svg" imagealt="vite logo" />
                        <Experience text="position 2 text" />
                        <Experience text="position 3 text" />
                    </div>
                </div>
                <div className="separator-div"></div>
                <Footer />
            </div>
        </div>
    )
}
export default Landing