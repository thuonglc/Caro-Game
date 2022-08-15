import {
  extendTheme,
  ChakraProvider,
  Container,
  VStack,
  Box,
  Input,
  Text,
  Grid,
  GridItem,
  Flex,
  Spacer,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Board } from './components/Board'
import { CustomModal } from './components/Dialog'
import { CustomTooltip } from './components/Tooltip'
import { calculateWinner } from './helper/calculateWinner'
import './index.css'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {
  const size = 30
  const nSquareToWin = 5
  const drawTime = 20 * 60

  let tmpArr = Array(size)
  for (let i = 0; i < size; i++) {
    tmpArr[i] = Array(size).fill(null)
  }

  const [gameStatus, setGameStatus] = useState(false)
  const [count, setCount] = useState(0)
  const [draw, setDraw] = useState(false)
  const [firstPlayer, setFirstPlayerName] = useState('')
  const [secondPlayer, setSecondPlayerName] = useState('')
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)
  const [open, setOpen] = useState(false)
  const [history, setHistory] = useState([
    {
      squares: tmpArr,
      location: null,
    },
  ])

  const current = history[stepNumber]
  const winner = calculateWinner(current.squares)
  let status
  if (winner) {
    status = 'Winner: ' + winner.val
  } else if (!firstPlayer || !secondPlayer) {
    status = 'Enter player 1 and player 2'
  } else {
    status = 'Next player: ' + (xIsNext ? '✖️' : '⭕')
  }
  useEffect(() => {
    if (winner) {
      setOpen(true)
      setGameStatus(false)
    }
  }, [winner])

  useEffect(() => {
    // start counting
    if (gameStatus) {
      const counter = setTimeout(() => setCount((count) => count + 1), 1000)
      return () => clearTimeout(counter)
    }
  }, [gameStatus, count])

  useEffect(() => {
    // start the first game after 1s when player 2 done
    if (firstPlayer !== '' && secondPlayer !== '') {
      const status = setTimeout(() => setGameStatus(true), 1000)
      return () => clearTimeout(status)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondPlayer])

  useEffect(() => {
    // The game will draw if not have a winner after 20 minutes
    if (count === drawTime) {
      setGameStatus(false)
      setOpen(true)
      setDraw(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  function handleClick(i, j) {
    const current = history.slice(0, stepNumber + 1)[stepNumber]
    const squares = current.squares.slice()
    current.squares.map((row, idx) => {
      squares[idx] = current.squares[idx].slice()
      return true
    })
    if (calculateWinner(squares) || squares[i][j]) {
      return
    }
    squares[i][j] = xIsNext ? '✖️' : '⭕'
    setHistory((history) =>
      history.concat([
        {
          squares: squares,
          location: { x: i, y: j },
        },
      ])
    )
    setStepNumber(history.length)
    setXIsNext((xIsNext) => !xIsNext)
  }

  const handleCreateANewGame = () => {
    setOpen(false)
    setCount((count) => 0)
    setGameStatus((gameStatus) => !gameStatus)
    setStepNumber(0)
    setXIsNext(true)
  }

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <header className="Caro Game"></header>
        <VStack>
          <Container maxW="100%" centerContent>
            <Grid
              mt={2}
              templateColumns="repeat(3, 1fr)"
              gap={6}
              alignItems="center"
            >
              <GridItem display="flex" alignItems="center">
                <Text fontSize="4xl" mr={2}>
                  ✖️
                </Text>
                <Input
                  value={firstPlayer}
                  onChange={(e) => setFirstPlayerName(e.target.value)}
                  placeholder="Player 1"
                />
              </GridItem>
              <GridItem>
                <Text textAlign="center" fontSize="4xl">
                  vs
                </Text>
              </GridItem>
              <GridItem display="flex" alignItems="center">
                <Text fontSize="4xl" mr={2}>
                  ⭕
                </Text>
                <Input
                  value={secondPlayer}
                  onChange={(e) => setSecondPlayerName(e.target.value)}
                  placeholder="Player 2"
                />
              </GridItem>
            </Grid>
            <Box>
              <Flex mb={3}>
                <Text fontSize="4xl">{status}</Text> <CustomTooltip />
                <Spacer />
                <Text fontSize="4xl">⌛ Time: {count}</Text>
              </Flex>

              <Board
                squares={current.squares}
                onClick={(i, j) => handleClick(i, j)}
                winner={winner}
                gameStatus={gameStatus}
                nSquareToWin={nSquareToWin}
              />
            </Box>
            <CustomModal
              isOpen={open}
              draw={draw}
              handleClose={handleCreateANewGame}
              winner={winner}
              timePlaying={count}
            />
          </Container>
        </VStack>
      </div>
    </ChakraProvider>
  )
}

export default App
