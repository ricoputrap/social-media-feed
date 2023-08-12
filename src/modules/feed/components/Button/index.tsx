import React from 'react'
import { CgSpinner } from "react-icons/cg"

export type Variant = "primary" | "secondary";

interface Props {
  variant: Variant;
  label: string;
  isLoading?: boolean;
  onClick: () => void;
}

export const COLOR: Record<Variant, string> = {
  primary: "bg-blue-400 text-white",
  secondary: "bg-white text-blue-400"
}

const Button: React.FC<Props> = ({ variant, label, isLoading = false, onClick }) => {
  return (
    <button
      className={`
        ${COLOR[variant]}
        flex gap-2 items-center
        font-bold py-0.5 px-4 rounded-full border-4 border-blue-400
        hover:drop-shadow-2xl
      `}
      onClick={onClick}
    >
      {isLoading && <CgSpinner size="20px" className="animate-spin" />}
      {label}
    </button>
  )
}

export default Button