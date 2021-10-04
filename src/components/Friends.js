import React from "react"
import styled from "styled-components"

const Friends = () => {
  return <Bar />
}

const Bar = styled.nav`
  background-color: ${({ theme }) => theme.colors.dark};
  width: 240px;
  height: 100%;
`

export default Friends