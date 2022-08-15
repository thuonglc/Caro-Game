import { Square } from './Square'

export function SquareRow(props) {
  const { row, winner, rowIdx, gameStatus, nSquareToWin } = props
  let squareRow = row.map((square, idx) => {
    let k = 's' + idx
    let win = false

    if (winner) {
      if (
        winner.direction === 'ToRight' &&
        idx >= winner.x &&
        idx <= winner.x + nSquareToWin - 1 &&
        rowIdx === winner.y
      ) {
        win = true
      }
      if (
        winner.direction === 'ToDown' &&
        rowIdx >= winner.y &&
        rowIdx <= winner.y + nSquareToWin - 1 &&
        idx === winner.x
      ) {
        win = true
      }
      if (
        winner.direction === 'ToRightDown' &&
        idx >= winner.x &&
        idx <= winner.x + nSquareToWin - 1 &&
        idx - winner.x === rowIdx - winner.y
      ) {
        win = true
      }
      if (
        winner.direction === 'ToLeftDown' &&
        idx <= winner.x &&
        idx >= winner.x - nSquareToWin + 1 &&
        winner.x - idx === rowIdx - winner.y
      ) {
        win = true
      }
    }
    return (
      <Square
        win={win}
        value={square}
        gameStatus={gameStatus}
        onClick={() => props.onClick(rowIdx, idx)}
        key={k}
      />
    )
  })
  return <div className="board-row">{squareRow}</div>
}
