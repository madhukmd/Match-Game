import './index.css'

const TabItem = props => {
  const {list, changeTab, isActive} = props
  const {tabId, displayText} = list

  const isActiveTabButton = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isActiveTabButton}`}
        onClick={() => {
          changeTab(tabId)
        }}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
