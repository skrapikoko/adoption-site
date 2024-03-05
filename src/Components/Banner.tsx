import './Banner.css'
import bgImgSource from '../Assets/Images/bgImg.jpg'
function Banner(): JSX.Element {
    return (
     <div className='Banner'>
        <h1>a real niggas header!</h1>
        <p>you got it my nigga!</p>
        <p>fuck yes man!</p>
        <img src={bgImgSource} />
        </div>
    )
}

export default Banner