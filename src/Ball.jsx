
const Ball = ({ id, color, selectBall, selected }) => {
  return (
    <div
      className={` ball ${color} ${selected.includes(id) ? 'selected' : ''}`}
      onClick={() => selectBall(id)}
    >


    </div>
  )
}

export default Ball