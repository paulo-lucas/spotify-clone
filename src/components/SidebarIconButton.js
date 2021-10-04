import React from "react"
import styled from "styled-components"

const SidebarIconButton = props => {
  const { icon: Icon, label } = props

  return <Button {...props} >
    <IconWrapper><Icon size={24} /></IconWrapper>
    {label}
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
  font-weight: 700;
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

export default SidebarIconButton