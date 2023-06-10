'use client'
import { Heading, Stack, Text } from '@chakra-ui/react'
import Chatbox from '@/components/Chatbox'

export default function Home() {
  return (
    <Stack h="100vh" justifyContent={"center"} alignItems={"center"}>
      <Heading>Харилцах самбар</Heading>
      <Text fontSize={"2xl"} color="black">Баяжуулсан оюунт хариулагч</Text>
      <br></br>
      <Chatbox/>
    </Stack>
  )
}
