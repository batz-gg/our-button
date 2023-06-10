import { Avatar, Box, Stack } from '@chakra-ui/react';

export type MessageType = { isUser?: boolean, text: string, avatar?: string }

export const Chatwindow = ({ messages }: { messages: MessageType[]}) => {
    return (
        <Stack direction={"column-reverse"} p={6} border="1px solid Gainsboro" rounded="lg" h="300px" overflow="auto">
            {messages.map((message, i) => <Message key={i + message.text} data={message} /> )}
        </Stack>
    )
}

const Message = ({ data }: { data: { isUser?: boolean, text: string, avatar?: string } }) => {
    return (
        <Stack align="center" direction={data.isUser ? "row-reverse" : "row"} rounded={"lg"} bg="#F3F6FC">
            <Avatar src={data.avatar} />
            <Box>{data.text}</Box>
        </Stack>
    )
}