import React from 'react'

const Header: React.FC = () => {
  return (
    <div
      data-testid="header"
      className="h-14 flex items-center pl-4"
    >
      <h1 className="font-bold text-xl">
        ShareFree
      </h1>
    </div>
  )
}

export default Header