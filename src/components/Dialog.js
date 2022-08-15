import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { secondsToHms } from '../helper/secondsToHms'

export function CustomModal({
  isOpen,
  handleClose,
  winner,
  draw,
  timePlaying,
}) {
  const cancelRef = useRef()

  return (
    <>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {draw ? 'Draw game' : 'Winner'}
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text>
                {draw
                  ? 'Both of you are excellent 😊'
                  : `Congrats to ${winner?.val} to win the game 😊`}
              </Text>
              <Text>{`Playing time: ${secondsToHms(timePlaying)}`}</Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleClose}>
                New game
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
