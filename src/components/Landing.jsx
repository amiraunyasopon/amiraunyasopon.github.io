import Header from "./Header"
import Footer from "./Footer"
import Experience from "./Experience"
const Landing = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="outline-2px min-w-screen px-24">
                <Header />
                <div className="border-t border-gray-300 my-5"></div>
                <div>
                    <div className="flex-col">
                        <Experience title="Solutions, Consulting, & Engineering Intern" description="Delivery Insights & Optimization" company="World Wide Technology" link="https://www.wwt.com" time="June 2026 — August 2026" image="./wwt.svg" imagealt="World Wide Technology logo"></Experience>
                        <Experience title="Software Engineer Intern" description="Data (Cloud) & UI/UX" company="Opal" link="https://www.opal.community" time="December 2025 — May 2026" image="./opal.svg" imagealt="Opal logo" />
                        <Experience title="Game Developer" description="Menu, Shop, Ranged Character Implementation" company="Dungeon Dilemma" link="https://fire05s.itch.io/dungeon-dilemma" time="September 2025 — November 2025" image="./dungeondilemma.svg" imagealt="Video Game Development Club at UCI logo" />
                        <Experience title="Data Analyst Intern" description="Administrative & Literacy Services" company="City of Burbank" link="https://www.burbankca.gov" time="June 2025 — August 2025" image="./cityofburbank.svg" imagealt="City of Burbank logo" />
                    </div>
                </div>
                <div className="border-t border-gray-300 my-5"></div>
                <Footer />
            </div>
        </div>
    )
}

export default Landing