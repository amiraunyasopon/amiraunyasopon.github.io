import Footer from "./Footer";

const Contact = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="w-full max-w-screen-lg px-4 sm:px-8">
                <h1 className="text-3xl text-center">Contact</h1>
                <div className="border-t border-gray-300 my-5"></div>
                <div className="w-full h-auto text-center flex flex-col justify-center">
                    <div className="flex flex-wrap justify-center m-5 gap-5">
                        <div className="px-5 flex flex-col items-center">
                            <p>📧</p>
                            <p>Email</p>
                            <a
                                href="mailto:asopon@uci.edu"
                                className="underline
                            ">
                                asopon@uci.edu
                            </a>
                        </div>
                        <div className="px-5 flex flex-col items-center">
                            <p>💼</p>
                            <p>LinkedIn</p>
                            <a
                                href="https://www.linkedin.com/in/amiraunyasopon/"
                                className="underline"
                            >
                                Amir Aunyasopon
                            </a>
                        </div>
                        <div className="px-5 flex flex-col items-center">
                            <p>🛠️</p>
                            <p>GitHub</p>
                            <a
                                href="https://github.com/amiraunyasopon"
                                className="underline"
                            >
                                amiraunyasopon
                            </a>
                        </div>
                    </div>
                    <p className="text-sm sm:text-base">
                        Feel free to reach out to me for any inquiries
                    </p>
                    <p className="text-sm sm:text-base">
                        I respond to all emails within 24 hours
                    </p>
                </div>
                <div className="border-t border-gray-300 my-5"></div>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;