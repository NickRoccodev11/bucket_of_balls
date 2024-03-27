//components
import Bucket from "./Bucket"
//hooks
import { useState } from "react"

function App() {
  const [b1Contents, setB1Contents] = useState([
    { id: 0, color: "red" },
    { id: 1, color: "orange" },
    { id: 2, color: "yellow" },
    { id: 3, color: "green" },
    { id: 4, color: "blue" }
  ])
  const [b2Contents, setB2Contents] = useState([
    { id: 5, color: "purple" },
    { id: 6, color: "white" },
    { id: 7, color: "black" },
    { id: 8, color: "brown" },
    { id: 9, color: "magenta" },
  ])
  const [selected, setSelected] = useState([])

  //pass the ball id into selected array to keep track of selected balls
  const selectBall = (ballId) => {
    const selectedArr = [...selected];
    if (selectedArr.includes(ballId)) {
      let index = selectedArr.indexOf(ballId)
      selectedArr.splice(index, 1)
    } else {
      selectedArr.push(ballId)
    }
    setSelected(selectedArr)
  }

  //prepare new arrays of sorted balls
  const processBalls = (container) => {
    const ballsToLeave = [];
    const ballsToRemove = [];
    container.forEach(ball => {
      selected.includes(ball.id)
        ? ballsToRemove.push(ball)
        : ballsToLeave.push(ball)
    })
    return [ballsToLeave, ballsToRemove]
  }

  //use the sorted arrays to switch selected balls into new buckets
  const switchBuckets = () => {
    const [ballsLeftIn1, ballsToTakeFrom1] = processBalls(b1Contents)
    const [ballsLeftIn2, ballsToTakeFrom2] = processBalls(b2Contents)
    setB1Contents([...ballsLeftIn1, ...ballsToTakeFrom2])
    setB2Contents([...ballsLeftIn2, ...ballsToTakeFrom1])
    setSelected([])
  }

  return (
    <>
      <h2 id="heading">Select balls, then press the button to change containers</h2>
      <div id="app-container">
        <Bucket
          contents={b1Contents}
          selectBall={selectBall}
          selected={selected}
        />
        <Bucket
          contents={b2Contents}
          selectBall={selectBall}
          selected={selected}
        />
      
      </div>
      <button className="switch-button"
          onClick={() => switchBuckets()}
        >
          switch buckets</button>
    </>
  )
}

export default App
