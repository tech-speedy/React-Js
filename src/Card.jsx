import profilePic from './assets/stock.jpg'

function Card(){
    return(
        <div className = "Card">
            <img className = "card-image" src = {profilePic} alt = "profile picture"></img>
            <h2 className = "card-title">Arnab Sarkar</h2>
            <p className = "card-text">I'm a Computer Science Student</p>
        </div>
    );
}

export default Card