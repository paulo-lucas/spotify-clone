// https://i.scdn.co/image/ab67616d00001e02ba26678947112dff3c3158bf

import React, { useState } from "react"
import styled from "styled-components"

import { AiFillUpCircle, AiFillDownCircle } from "react-icons/ai"

const SongInfo = () => {
  const [expanded, setExpanded] = useState(false)

  return <Container expanded={expanded} >
    <CollapseWrapper collapsed={expanded} >
      <AlbumMini bg="https://i.scdn.co/image/ab67616d00001e02ba26678947112dff3c3158bf" >
        <AiFillUpCircle
          className="expand-btn"
          size="32"
          onClick={() => setExpanded(true)} />
      </AlbumMini>

      <TextInfo>
        <h3>INDUSTRY BABY</h3>
        <h4>Lil Nas X, Jack Harlow</h4>
      </TextInfo>
    </CollapseWrapper>

    <AlbumExpanded
      bg="https://i.scdn.co/image/ab67616d00001e02ba26678947112dff3c3158bf"
      expanded={expanded} >
      <AiFillDownCircle
        className="collapse-btn"
        size="32"
        onClick={() => setExpanded(false)} />
    </AlbumExpanded>
  </Container>
}

const Container = styled.div`
  width: 240px;
  height: 100%;
  position: relative;
  overflow: ${({ expanded }) => expanded ? "visible" : "hidden"};
`

const CollapseWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 0px 16px 16px;
  position: absolute;
  top: 0;
  left: ${({ collapsed }) => collapsed ? "-74px" : "0"};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  transition: all .2s;
`

const AlbumMini = styled.div`
  background-image: url('${({ bg }) => bg}') ;
  background-size: contain;
  height: 100%;
  aspect-ratio: 1;
  box-shadow: 0 0 10px #00000099;
  margin-right: 16px;
  text-align: right;

  .expand-btn {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0;
    transition: all .2s ease;
  }

  &:hover {
    .expand-btn {
      opacity: 1;
      cursor: pointer;
    }
  }
`

const TextInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;

  h3 {
    font-weight: 500;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.active};
    margin-bottom: 2px;
  }

  h4 {
    font-weight: 500;
    font-size: 10px;
    color: ${({ theme }) => theme.colors.text.default};
  }

  h3:hover, h4:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const AlbumExpanded = styled.div`
  background-image: url('${({ bg }) => bg}') ;
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  bottom: ${({ expanded }) => expanded ? "90px" : "-240px"};
  transition: bottom .2s ease;
  text-align: right;

  .collapse-btn {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0;
    transition: all .2s ease;
  }

  &:hover {
    .collapse-btn {
      opacity: 1;
      cursor: pointer;
    }
  }
`

export default SongInfo