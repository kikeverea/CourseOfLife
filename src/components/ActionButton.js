import './ActionButton.css'

const ActionButton = ({ handleClick }) =>
  <div id="action-button" onClick={ handleClick }>
    <p className="plus">+</p>
    {/*<img className="edit" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"*/}
    {/*  alt='action button'/>*/}
  </div>

export default ActionButton