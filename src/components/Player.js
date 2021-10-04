import React from "react"
import styled from "styled-components"

const Player = () => {
  return <Bar />
}

const Bar = styled.nav`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100vw;
  height: 90px;
`

export default Player