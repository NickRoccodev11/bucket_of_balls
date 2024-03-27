import Ball from "./Ball"

const Bucket = ({ contents, selectBall, selected }) => {
  return (
    <>
      <div className="b-container">
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
        <button className="button">switch buckets</button>
      </div>
    </>
  )
}

export default Bucket