import React from 'react'

type Variant = "primary" | "secondary";

interface Props {
  variant: Variant;
  label: string;
  onClick: () => void;
}

const COLOR: Record<Variant, string> = {
  primary: "bg-blue-400 text-white",
  secondary: "bg-white text-blue-400"
}

const Button: React.FC<Props> = ({ variant, label, onClick }) => {
  return (
    <button className={`
      ${COLOR[variant]} 
      font-bold py-0.5 px-4 rounded-full border-4 border-blue-400
      hover:drop-shadow-2xl
  `} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button