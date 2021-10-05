import React, { useState } from "react"
import styled from "styled-components"

const SidebarIconButton = props => {
  const [hover, setHover] = useState(false)

  const {
    icon: Icon,
    flag: Flag,
    onHoverFlag: OnHoverFlag,
    label
  } = props

  return <Button {...props}>

    {Icon && <IconWrapper><Icon size={24} /></IconWrapper>}

    {label}

    {Flag && <FlagWrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} >
      {(hover && OnHoverFlag) ? <OnHoverFlag size={24} /> : <Flag size={24} />}
    </FlagWrapper>}

  </Button>
}

const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: #00000000;
  color: ${({ theme }) => theme.colors.item.default};
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: ${({ bold }) => bold ? "700" : "regular"};
  transition: all .2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.item.active};
  }

  &.selected {
    background-color: ${({ theme }) => theme.colors.item.bgSelected};
    color: ${({ theme }) => theme.colors.item.active};
  }
`

const IconWrapper = styled.div`
  margin-right: 18px;
`

const FlagWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`

export default SidebarIconButton