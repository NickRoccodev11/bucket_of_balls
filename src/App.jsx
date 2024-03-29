//components
import Bucket from "./Bucket"
//hooks
import { useState } from "react"

function App() {
  const [b1Contents, setB1Contents] = useState([
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "azure",
    "black"])
  const [b2Contents, setB2Contents] = useState([
    "brown",
    "magenta",
    "lightgreen",
    "cornflowerblue",
    "olive",
    "teal",
    "darkslategray",
    "salmon"
  ])
  const [selected, setSelected] = useState([])

  // keep track of selected balls 
  const selectBall = (colorName) => {
    const selectedArr = [...selected];
    if (selectedArr.includes(colorName)) {
      let index = selectedArr.indexOf(colorName)
      selectedArr.splice(index, 1)
    } else {
      selectedArr.push(colorName)
    }
    setSelected(selectedArr)
  }

  //prepare new arrays of sorted balls
  const processBalls = (bucketContents) => {
    const ballsToKeep = [];
    const ballsToRemove = [];
    bucketContents.forEach(ball => {
      selected.includes(ball)
        ? ballsToRemove.push(ball)
        : ballsToKeep.push(ball)
    })
    return [ballsToKeep, ballsToRemove]
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
      <h2 id="heading">Select balls, then press the button to switch buckets</h2>
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
      <div id="button-div">
        <button className="switch-button"
          onClick={() => switchBuckets()}
        >
          switch buckets</button>
      </div>
    </>
  )
}

export default App
