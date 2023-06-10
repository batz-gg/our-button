import { Stack } from '@chakra-ui/react';
import { Chatcomposer } from './ChatComposer';
import { Chatwindow, MessageType } from './ChatWindow';
import { useState } from 'react';


export default function Chatbox() {
    const [messages, setMessages] = useState<MessageType[]>([
        {
            isUser: false,
            avatar: "https://imgur.com/CC8Qpr5.png",
            text: "Танд юугаар туслах уу?"
        }
    ]);

    const submitMessage = (input: string) => {
        setMessages(prev => [
            {
                isUser: true,
                avatar: "https://imgur.com/pAGeEzh.png",
                text: input
            },
            ...prev
        ]);
    }

    return (
        <Stack h="400px" w="800px" rounded={"lg"} bg="#F3F6FC" p={6}>
            <Chatwindow messages={messages}/>
            <Chatcomposer submitMessage={submitMessage} />
        </Stack>
    )
}
