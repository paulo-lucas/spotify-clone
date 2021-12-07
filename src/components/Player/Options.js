import React from "react"
import styled from "styled-components"
import { MdQueueMusic, MdDesktopMac} from "react-icons/md"
import { BsVolumeUp } from "react-icons/bs"

const Options = () => {
  return <Container>
    <ContentWrapper>
      <MdQueueMusic className="options-icon-btn" size={24} />
      <MdDesktopMac className="options-icon-btn" size={24} />
      
    </ContentWrapper>

  </Container>
}

const Container = styled.div`
  width: 240px;
  height: 100%;
  padding: 24px 8px;
`

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text.active};

  .options-icon-btn {
    opacity: 0.7;
  }
`

const VolumeBarWrapper = styled.div`

`

export default Options