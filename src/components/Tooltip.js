import { InfoOutlineIcon } from '@chakra-ui/icons'
import { ListItem, OrderedList, Text, Tooltip } from '@chakra-ui/react'

export function CustomTooltip() {
  const gameRules = (
    <>
      <Text fontSize="2xl">Rules:</Text>

      <OrderedList>
        <ListItem>
          Having 5 cells continuously in the same row (horizontal, vertical,
          diagonal) will win.
        </ListItem>
        <ListItem>
          If blocked 2 ends will not win (XOOOOOX, OXXXXXO...).
        </ListItem>
        <ListItem>
          The game will draw if not have a winner after 20 minutes.
        </ListItem>
      </OrderedList>
    </>
  )
  return (
    <Tooltip label={gameRules} fontSize="md">
      <InfoOutlineIcon />
    </Tooltip>
  )
}
