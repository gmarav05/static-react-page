import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linked-in.png'
import github from '../assets/github.png'

export function Footer() {
    return (
        <>
            <footer className="footer">
                <img src={twitter }/>
                <img src={ facebook}/>
                <img src={ instagram}/>
                <img src={ linkedin}/>
                <img src={ github}/>
            </footer>
        
       </>
    )
}