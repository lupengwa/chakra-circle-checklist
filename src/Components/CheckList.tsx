import {Box, CircularProgress, Fade, Stack, Checkbox, useDisclosure, VStack} from "@chakra-ui/react";

const Checklist = () => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box display="flex" justifyContent="space-around">
            <VStack>
                <Box as='button' borderRadius='md' bg='tomato' p={3} onClick={onToggle}> {isOpen? 'Focus': 'Check'} </Box>
                {isOpen
                    ? <CircularProgress  value={30} size='500px'/>
                    : (
                        <VStack spacing={5} alignItems='left'>
                            <Checkbox colorScheme='red'>
                                First thing first
                            </Checkbox>
                            <Checkbox colorScheme='green'>
                                Second thing second
                            </Checkbox>
                        </VStack>
                    )
                }
            </VStack>
        </Box>
    )
}
export default Checklist;
