import Layout from "../../common/Layout"
import Button from "../../ui/Button/Button"
import Counters from "../../ui/Counters/Counters"
import styles from './Home.module.scss'
import bgImage from '../../../images/home-bg.jpg'
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    return (
        <Layout height='100%' bgImage={bgImage} >
            <Button
             text='New' 
             type='main' 
             callback={() => navigate('/new-workout')}
             />
            <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
                <Counters />
      </Layout>
    ) 
}

export default Home