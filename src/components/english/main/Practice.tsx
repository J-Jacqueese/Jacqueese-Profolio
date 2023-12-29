"use client"
import { Alert, Input } from '@/components/material-ui'
import React, { ChangeEvent, FC, useState } from 'react'

const Practice: FC = () => {
  const [currentValue, setCurrentValue] = useState<string>("Hello")
  const [inputValue, setInputValue] = useState<string>("")
  const [open, setOpen] = useState<boolean>(true);
  const [isRight, setIsRight] = useState<boolean>(false);
  // 用户输入单词逻辑
  const handleUserInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value)
  }
  const checkValidity = (inputValue: string, currentValue: string) => {
    return inputValue === currentValue
  }
  const handleCheckWord = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('进入拉')
      if (checkValidity(inputValue, currentValue)) {
        setOpen(open)
        setIsRight(true)
      } else {
        setIsRight(false)
      }
    }
  }
  return (
    <div>
      <div>
        <div>{currentValue}</div>
        <Alert open={open} onClose={() => setOpen(false)}>
          {isRight ? '回答正确' : '回答错误'}
        </Alert>
        <div>
          <Input
            type="email"
            placeholder="Input Word"
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            value={inputValue}
            onChange={handleUserInputChange}
            onKeyDown={handleCheckWord}
            containerProps={{ className: "min-w-[100px]" }} crossOrigin={undefined} />

        </div>
      </div>
    </div>
  )
}

export default Practice