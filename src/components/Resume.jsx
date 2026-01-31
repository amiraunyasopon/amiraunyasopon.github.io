import Footer from "./Footer";

const Resume = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="w-full max-w-screen-lg px-4 sm:px-8">
                <h1 className="text-3xl text-center">Resume</h1>
                <div className="border-t border-gray-300 my-5"></div>
                <div className="w-full h-[80vh]">
                    <iframe
                        src="./Amir_Aunyasopon_Computer_Science_Resume.pdf"
                        title="Resume"
                        className="w-full h-full"
                        style={{ border: "none" }}
                    ></iframe>
                </div>
                <div className="border-t border-gray-300 my-5"></div>
                <Footer />
            </div>
        </div>
    );
};

export default Resume;