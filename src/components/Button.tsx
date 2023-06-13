import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export default function Button({ text, ...rest }: ButtonProps) {
  return (
    <button
      className="rounded bg-candlelight-400 p-2.5 font-sec font-bold text-black transition hover:bg-candlelight-500"
      {...rest}
    >
      {text}
    </button>
  )
}
