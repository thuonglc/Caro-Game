export function Square(props) {
  return (
    <button
      className={props.win ? 'square square-highlight' : 'square'}
      onClick={props.onClick}
      disabled={props.gameStatus && 'disabled'}
    >
      {props.value}
    </button>
  )
}
