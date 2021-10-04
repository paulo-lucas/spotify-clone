import React from "react"
import styled from "styled-components"

const Content = () => {
  return <ContentContainer />
}

const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  flex-grow: 1;
  min-width: 100px;
  height: 100%;
`

export default Content