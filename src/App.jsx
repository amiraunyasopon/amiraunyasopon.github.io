import { useRoutes } from 'react-router-dom'
import Landing from './components/Landing'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {

    let element = useRoutes([
        {
            path: "/",
            element: <Landing />
        },
        {
            path: "/resume",
            element: <Resume />
        },
        {
            path: "/contact",
            element: <Contact />
        }
    ])
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            {element}
        </div>
    )
}

export default App