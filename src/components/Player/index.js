import React from "react"
import styled from "styled-components"

import SongInfo from "components/Player/SongInfo"
import Controls from "components/Player/Controls"
import Options from "components/Player/Options"

const Player = () => {
  return <Bar>
    <SongInfo />
    <Controls />
    <Options />
  </Bar>
}

const Bar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  width: 100vw;
  height: 90px;
  display: flex;
`

export default Player