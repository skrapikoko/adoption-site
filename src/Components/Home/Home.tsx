import './Home.css'
import UpForAdoption from './HomeComponents/UpForAdoption/UpForAdoption'
import SpecialAdoption from './HomeComponents/SpecialAdoption/SpecialAdoption'
import PetsForAdoption from './HomeComponents/PetsForAdoption/PetsForAdoption'

function Home (): JSX.Element {
    return (
        <div className='home'>
            <UpForAdoption/>
            <SpecialAdoption/>
            <PetsForAdoption/>
        </div>
    )
}
export default Home