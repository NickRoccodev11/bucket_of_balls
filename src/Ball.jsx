
const Ball = ({  ball, selectBall, selected }) => {
  return (
    <div
      className={` ball ${ball} ${selected.includes(ball) ? 'selected' : ''}`}
      onClick={() => selectBall(ball)}
    >
    </div>
  )
}

export default Ball