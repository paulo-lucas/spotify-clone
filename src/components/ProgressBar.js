import React from "react"
import styled from "styled-components"

const ProgressBar = ({ complete }) => {
  return <ProgressBarWrapper>
    <ProgressBar>
      <div className="progress" />
    </ProgressBar>
  </ProgressBarWrapper>
}


const ProgressBarWrapper = styled.div`
  flex-grow: 1;
  padding: 12px;

  &:hover {
    .progress {
      background-color: ${({ theme }) => theme.colors.detail};
      overflow: visible;
    }

    .progress::after {
      content: " ";
      background-color: ${({ theme }) => theme.colors.text.active};
      position: absolute;
      right: -6px;
      top: -4px;
      width: 12px;
      height: 12px;
      border-radius: 8px;
      z-index: 1;
    }
  }
`

const ProgressBar = styled.div`
  flex-grow: 1;
  margin: 0 16px;
  height: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.bgSelected};

  .progress {
    border-radius: 4px 0 0 4px;
    height: 4px;
    width: 40%;
    position: relative;
    background-color: ${({ theme }) => theme.colors.text.default};
  }
`