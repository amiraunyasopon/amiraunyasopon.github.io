import Footer from "./Footer"
const Contact = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="outline-2px min-w-screen px-24">
                <h1 className="text-3xl text-center">Contact</h1>
                <div className="border-t border-gray-300 my-5"></div>
                <div className="w-full h-[30vh] text-center flex flex-col justify-center">
                    <div className="flex justify-center m-5">
                        <div className="px-5">
                            <p>📧</p>
                            <p>Email</p>
                            <a href="maleto:asopon@uci.edu" className="text-decorate-line: underline">asopon@uci.edu</a>
                        </div>
                        <div className="px-5">
                            <p>💼</p>
                            <p>LinkedIn</p>
                            <a href="https://www.linkedin.com/in/amiraunyasopon/" className="text-decorate-line: underline">Amir Aunyasopon</a>
                        </div>
                        <div className="px-5">
                            <p>🛠️</p>
                            <p>GitHub</p>
                            <a href="https://github.com/amiraunyasopon" className="text-decorate-line: underline">amiraunyasopon</a>
                        </div>
                    </div>
                    <p>Feel free to reach out to me for any inquiries</p>
                    <p>I respond to all emails within 24 hours</p>
                </div>
                <div className="border-t border-gray-300 my-5"></div>
                <Footer />
            </div>
        </div>
    )
}
export default Contact