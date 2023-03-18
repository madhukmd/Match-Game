import './index.css'

const Scorecard = props => {
  const {score, restart} = props
  const trophy =
    'https://assets.ccbp.in/frontend/react-js/match-game-trophy.png'
  return (
    <div className="game-over-bg">
      <div className="game-over-content">
        <img src={trophy} alt="trophy" className="trophy" />
        <p className="score-heading">YOUR SCORE</p>
        <p className="final-score">{score}</p>
        <button type="button" className="play-again-button" onClick={restart}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            className="restart"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default Scorecard
