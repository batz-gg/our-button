import { Button, Input, HStack } from '@chakra-ui/react';
import { useState } from 'react';

export const Chatcomposer = ({ submitMessage}: {submitMessage: (input: string) => void}) => {
    const [inpTxt, setInpTxt] = useState("");

    const submitHandle = () => {
        submitMessage(inpTxt)
        setInpTxt("")
    }
    return (
        <HStack rounded={"lg"} bg="#F3F6FC">
            <Input onKeyDown={(e) => e.key === "Enter" && submitHandle()} onChange={(e) => setInpTxt(e.target.value)} value={inpTxt} placeholder="Энд бичнэ үү..." />
            <Button fontSize="32px" onClick={submitHandle}>📨</Button>
        </HStack>
    )
}