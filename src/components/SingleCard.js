import './SingleCard.css'

export default function SingleCard({handleChoice, card, flipped}){

    const handleClick=()=>{
        handleChoice(card);
    }

        return(
            <div className="card">
            <div className={flipped? "flipped" : ""}>
              <img className="front" src={card.src} alt="card front" />
              <img 
              className="back" 
              src="/img/cover.png"  
              onClick={handleClick} alt="cover" 
              />
            </div>
          </div>
        )
}