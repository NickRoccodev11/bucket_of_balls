import Ball from "./Ball"

const Bucket = ({ contents, selectBall, selected }) => {
  return (
    <>
      <div className="bucket">
        {
          contents.map((ball, idx) => {
            return <Ball
              key={ball.id}
              id={ball.id}
              color={ball.color}
              selectBall={selectBall}
              selected={selected}
              contents={contents}
            />
          })
        }
      </div>
    </>
  )
}

export default Bucket