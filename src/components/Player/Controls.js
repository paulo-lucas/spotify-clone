import React from "react"
import styled from "styled-components"

import { BsPauseCircleFill, BsShuffle, BsFillSkipStartFill, BsSkipEndFill } from "react-icons/bs"
import { FiRepeat } from "react-icons/fi"

const Controls = () => {
  return <Container>
    <Center>
      <ButtonControlsWrapper>
        <BsShuffle size="18" />
        <BsFillSkipStartFill size="18" />
        <BsPauseCircleFill size="32" />
        <BsSkipEndFill size="18" />
        <FiRepeat size="18" />
      </ButtonControlsWrapper>

      <ProgressBarWrapper>
        <span className="current-timestamp">1:22</span>

        <ProgressBar>
          <div className="progress" />
        </ProgressBar>

        <span className="song-duration">3:32</span>
      </ProgressBarWrapper>
    </Center>
  </Container>
}

const Container = styled.div`
  flex-grow: 1;
  height: 100%;
  padding: 16px 0;
`

const Center = styled.div`
  max-width: 700px;
  min-width: 300px;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ButtonControlsWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin: 0 16px;
    color: ${({ theme }) => theme.colors.text.active};
  }

  & > *:first-child {
    color: ${({ theme }) => theme.colors.detail};
  }
`

const ProgressBarWrapper = styled.div`
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.text.default};
    font-size: 12px;
  }
`

const ProgressBar = styled.div`
  flex-grow: 1;
  margin: 0 16px;
  height: 4px;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bgSelected};

  .progress {
    height: 4px;
    width: 40%;
    background-color: ${({ theme }) => theme.colors.text.default};
  }
`

export default Controls