const Info = (props) => {
  return (
    <div className="drawer__box">
      <div className="drawer__box-inner">
        <img src={props.img} alt="" />
        <h1 className="drawer__box-title">{props.title}</h1>
        <p className="drawer__box-text">{props.text}</p>
        <button className="drawer__box-btn" onClick={props.onClick}>Вернуться назад</button>
      </div>
    </div>
  )
}

export default Info;