import squirrel from '../assets/squirrel.jpg'
import mail from '../assets/mail.png'

export function Info() {
    return (
        <>
        <main className="main">
            <img src={squirrel} className='main-img'/>
            <h1>Aravind GM</h1>
            <p>Developer</p>
            <p>arav@gmail.com</p>
            <button className="email"><img src={mail} />Email</button>
        </main>
       </>
    )
}