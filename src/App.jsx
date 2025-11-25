import './App.css'
import { useRoutes } from 'react-router-dom'
import Landing from './components/Landing'
import Resume from './components/Resume'
import Contact from './components/Contact'

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
        <div>
            {element}
        </div>
    )
}

export default App