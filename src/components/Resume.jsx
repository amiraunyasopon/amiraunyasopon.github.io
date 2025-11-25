import Footer from "./Footer"
const Resume = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="outline-2px min-w-screen px-24">
                <h1 className="text-3xl text-center">Resume</h1>
                <div className="border-t border-gray-300 my-5"></div>
                <div className="w-full h-[80vh]">
                    <iframe
                        src="./AmirAunyasoponComputerScienceResume.pdf"
                        title="Resume"
                        className="w-full h-full"
                    ></iframe>
                </div>
                <div className="border-t border-gray-300 my-5"></div>
                <Footer />
            </div>
        </div>
    )
}

export default Resume