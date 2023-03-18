import './index.css'

const Header = props => {
  const {score, initialTime} = props
  const logo =
    'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png'
  const timer =
    'https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png'
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <img src={logo} alt="website logo" className="website-logo" />
        <div className="nav-score-container">
          <p className="score">
            score: <span className="span">{score}</span>
          </p>
          <div className="nav-timer">
            <img src={timer} alt="timer" className="timer" />
            <p className="time">{initialTime} sec</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
