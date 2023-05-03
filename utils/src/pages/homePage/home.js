import { Link } from "react-router-dom"
import Text from '../../components/textComponent/text'
import './home.css'
const Home = () => {
    return (
        <div className="container">
            <div>
                <Link className="textDecorationHome" to={"/grayScale"}><Text>Gray Scale</Text></Link>
            </div>
        </div>
    )
}

export default Home