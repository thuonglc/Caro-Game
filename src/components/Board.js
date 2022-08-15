import { SquareRow } from './SquareRow'

export function Board(props) {
  const { squares, winner, gameStatus, onClick, nSquareToWin } = props
  let board
  board = squares.map((row, idx) => {
    let k = 'r' + idx
    return (
      <SquareRow
        winner={winner}
        gameStatus={!gameStatus}
        rowIdx={idx}
        row={row}
        onClick={onClick}
        nSquareToWin={nSquareToWin}
        key={k}
      />
    )
  })
  return <div>{board}</div>
}
