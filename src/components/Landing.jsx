import Header from "./Header"
import Experience from "./Experience"
import Footer from "./Footer"
const Landing = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="outline-2px min-w-screen px-24">
                <Header />
                <div className="border-t border-gray-300 my-5"></div>
                <div className="">
                    <div>
                        <Experience text="position text" image="./vite.svg" imagealt="vite logo" />
                        <Experience text="position 2 text" />
                        <Experience text="position 3 text" />
                    </div>
                </div>
                <div className="border-t border-gray-300 my-5"></div>
                <Footer />
            </div>
        </div>
    )
}
export default Landing