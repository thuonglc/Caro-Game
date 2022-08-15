export function calculateWinner(squares) {
  const nSquareToWin = 5
  let win
  for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < squares[i].length; j++) {
      if (!squares[i][j]) continue
      if (j <= squares[i].length - nSquareToWin) {
        win = true
        for (let k = 0; k < nSquareToWin - 1; k++) {
          if (squares[i][j + k] !== squares[i][j + k + 1]) {
            win = false
          } else if (
            i > 0 &&
            j > 0 &&
            squares[i][j - 1] !== null &&
            squares[i][j + k + 2] !== null
          ) {
            win = false
          }
        }
        if (win) return { val: squares[i][j], x: j, y: i, direction: 'ToRight' }
      }
      if (i <= squares.length - nSquareToWin) {
        win = true
        for (let k = 0; k < nSquareToWin - 1; k++) {
          if (squares[i + k][j] !== squares[i + k + 1][j]) {
            win = false
          } else if (
            i > 0 &&
            j > 0 &&
            squares[i - 1][j] !== null &&
            squares[i + k + 2][j] !== null
          ) {
            win = false
          }
        }
        if (win) return { val: squares[i][j], x: j, y: i, direction: 'ToDown' }
      }
      if (
        j <= squares[i].length - nSquareToWin &&
        i <= squares.length - nSquareToWin
      ) {
        win = true
        for (let k = 0; k < nSquareToWin - 1; k++) {
          if (squares[i + k][j + k] !== squares[i + k + 1][j + k + 1]) {
            win = false
          } else if (
            i > 0 &&
            j > 0 &&
            squares[i - 1][j - 1] !== null &&
            squares[i + k + 2][j + k + 2] !== null
          ) {
            win = false
          }
        }
        if (win)
          return { val: squares[i][j], x: j, y: i, direction: 'ToRightDown' }
      }
      if (i <= squares.length - nSquareToWin && j >= nSquareToWin - 1) {
        win = true
        for (let k = 0; k < nSquareToWin - 1; k++) {
          if (squares[i + k][j - k] !== squares[i + k + 1][j - k - 1]) {
            win = false
          } else if (
            i > 0 &&
            j > nSquareToWin &&
            squares[i - 1][j + 1] !== null &&
            squares[i + k + 2][j - 5] !== null
          ) {
            win = false
          }
        }
        if (win)
          return { val: squares[i][j], x: j, y: i, direction: 'ToLeftDown' }
      }
    }
  }
  return null
}
