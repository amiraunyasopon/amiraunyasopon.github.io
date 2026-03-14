import { useRoutes } from "react-router-dom";
import Landing from "./components/Landing";
import Organizations from "./components/Organizations"
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";

function App() {
    let element = useRoutes([
        {
            path: "/",
            element: <Landing />,
        },
        {
            path: "/organizations",
            element: <Organizations />
        },
        {
            path: "/resume",
            element: <Resume />,
        },
    ]);
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            {element}
        </div>
    );
}

export default App;
