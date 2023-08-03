import React from 'react'

type Variant = "primary" | "secondary";

interface Props {
  variant: Variant;
  label: string;
}

const COLOR: Record<Variant, string> = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-white text-blue-500"
}

const Button: React.FC<Props> = ({ variant, label }) => {
  return (
    <button className={`
      ${COLOR[variant]} 
      font-bold py-0.5 px-4 rounded-full border-4 border-blue-500
      hover:drop-shadow-2xl
  `}>
      {label}
    </button>
  )
}

export default Button