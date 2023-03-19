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
        <img src={logo} className="website-logo" alt="website logo" />
        <ul className="nav-score-container">
          <li>
            <p>
              Score: <span className="span">{score}</span>
            </p>
          </li>
          <li className="nav-timer">
            <img src={timer} alt="timer" className="timer" />
            <p className="time">{initialTime} sec</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
