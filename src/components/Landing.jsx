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
                        <Experience title="Software Engineer Intern" description="Incoming" company="Opal" link="https://www.opal.community" time="December 2025 — Present" image="./opal.webp" imagealt="Opal logo" />
                        <Experience title="Game Programmer" description="Settings, shop, and ranged character implementation" company="Dungeon Dilemma" link="https://vgdc-uci.framer.website" time="September 2025 — December 2025" image="./vgdc.webp" imagealt="Video Game Development Club at UCI logo" />
                        <Experience title="Data Analytics Intern" description="Administrative and literacy services" company="City of Burbank" link="https://www.burbankca.gov" time="June 2025 — August 2025" image="./cityofburbank.webp" imagealt="City of Burbank logo" />
                    </div>
                </div>
                <div className="border-t border-gray-300 my-5"></div>
                <Footer />
            </div>
        </div>
    )
}

export default Landing