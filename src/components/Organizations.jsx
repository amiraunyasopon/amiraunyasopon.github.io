import Header from "./Header"
import Footer from "./Footer"
import Experience from "./Experience"
const Organizations = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="outline-2px min-w-screen px-24">
                <h1 className="text-3xl text-center">Organizations</h1>
                <div className="border-t border-gray-300 my-5"></div>
                <div>
                    <div className="flex-col">
                        <Experience title="President" description="Supporting students technically & professionally" company="Google Developer Group on Campus at UCI" link="https://gdg.community.dev" time="Dec 2025 — Present" image="./googledevelopergroups.svg" imagealt="Google Developer Groups Logo"></Experience>
                        <Experience title="Academic and Alumni Affairs Committee Member" description="Coordinating mentorship & learning opportunities" company="ICS Student Council" link="https://studentcouncil.ics.uci.edu" time="Oct 2025 — Present" image="./icssc.svg" imagealt="Informatics and Computer Science Student Council Logo"></Experience>
                        <Experience title="Web Development Fellow" description="Collaborating & learning full stack" company="CodePath" link="https://www.codepath.org" time="Oct 2025 — Nov 2025" image="./codepathorg.svg" imagealt="CodePath Logo"></Experience>
                        <Experience title="Engineering Track" description="Early-career enrichment" company="National Academy Foundation" link="https://naf.org" time="2021 — 2025" image="./naforg.svg" imagealt="National Academy Foundation Logo"></Experience>
                    </div>
                </div>
                <div className="border-t border-gray-300 my-5"></div>
                <Footer />
            </div>
        </div>
    )
}

export default Organizations