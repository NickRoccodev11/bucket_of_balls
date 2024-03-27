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
  //pass the ball id into selected array to keep track of which should be selected
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
  console.log(selected)
  return (
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
  )
}

export default App
