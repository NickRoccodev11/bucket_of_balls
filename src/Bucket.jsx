import Ball from "./Ball"

const Bucket = ({ contents, selectBall, selected }) => {
  return (
    <>
      <div className="bucket">
        {
          contents.map((ball, index) => {
            return <Ball
              key={index}
              ball={ball}
              selectBall={selectBall}
              selected={selected}
            />
          })
        }
      </div>
    </>
  )
}

export default Bucket