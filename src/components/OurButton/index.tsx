'use client';
import Center from "@/components/Center";
import style from "./button.module.css";
import { useState } from "react";

export default function OurButton() {
  const [value, setValue] = useState(0)
  const handleClick = () => {
    alert(value)
    setValue(value + 1);
  }

  return (
    <Center>
      <button onClick={(e) => handleClick()} className={style.ourButton}>
        Our Button
      </button>
    </Center>
  )
}