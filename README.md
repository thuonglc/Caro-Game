# Caro game

Build a basic Caro game with react hook. The [Demo](https://caro-game-rp.vercel.app/)

## Rules

- Turn-based game for two players.
- The player who has five continuous cells not blocked by two cells of the opponent in one row, column, or diagonal will be the winner.

## Game scenarios

WIN

| . | . | . | . | . | . | . |
| . | X | X | X | X | X | . |
| . | . | . | . | . | . | . |

| . | . | . |
| . | X | . |
| . | X | . |
| . | X | . |
| . | X | . |
| . | X | . |
| . | . | . |

| . | . | . | . | . | . | . |
| . | X | . | . | . | . | . |
| . | . | X | . | . | . | . |
| . | . | . | X | . | . | . |
| . | . | . | . | X | . | . |
| . | . | . | . | . | X | . |
| . | . | . | . | . | . | . |

| . | . | . | . | . | . | . |
| . | . | . | . | . | X | . |
| . | . | . | . | X | . | . |
| . | . | . | X | . | . | . |
| . | . | X | . | . | . | . |
| . | X | . | . | . | . | . |
| . | . | . | . | . | . | . |

| . | . | . | . | . | . | . |
| O | X | X | X | X | X | . |
| . | . | . | . | . | . | . |

| . | . | . | . | . | . | . | . |
| O | X | X | X | X | X | . | O |
| . | . | . | . | . | . | . | . |

NOT WIN

| . | . | . | . | . | . | . |
| O | X | X | X | X | X | O |
| . | . | . | . | . | . | . |

| . | O | . |
| . | X | . |
| . | X | . |
| . | X | . |
| . | X | . |
| . | X | . |
| . | O | . |

| O | . | . | . | . | . | . |
| . | X | . | . | . | . | . |
| . | . | X | . | . | . | . |
| . | . | . | X | . | . | . |
| . | . | . | . | X | . | . |
| . | . | . | . | . | X | . |
| . | . | . | . | . | . | O |

| . | . | . | . | . | . | O |
| . | . | . | . | . | X | . |
| . | . | . | . | X | . | . |
| . | . | . | X | . | . | . |
| . | . | X | . | . | . | . |
| . | X | . | . | . | . | . |
| O | . | . | . | . | . | . |

## Stack (frontend)

- [Reactjs](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Chakra UI)](https://chakra-ui.com/) - Create accessible React apps with speed
