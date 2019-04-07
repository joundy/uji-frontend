import React from "react"
import Modal from "react-modal";
import styled from "styled-components"

import "./modal.css"

import IconCloseC from "../../images/icon-close.svg"

const ModalC = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      // onAfterOpen={this.afterOpenModal}
      // onRequestClose={this.closeModal}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      contentLabel="Example Modal"
      onClick={() => console.log("onclick")}
    >
      <Content width={props.width || 100} height={props.height || 100}>
        <MainWrap className={props.className}>
          {props.children}
        </MainWrap>
        <IconClose onClick={props.onButtonCloseClick}/>
      </Content>
    </Modal>
  )
}

const customStyles = {  
  content : {
    backgroundColor: "transparent",
    border: "none",
    display: "flex",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
  }
}

const Content = styled.section`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: white;  
  border-radius: 5px;  
  padding: 20px;
  // overflow: auto;
  margin-top: 50px;
  position: relative;
`

const IconClose = styled.img.attrs({src: IconCloseC})`
  width: 15px;
  height: 15px;
  cursor: pointer;
  position: absolute;
  z-index: 2
  right: 20px;
`

const MainWrap = styled.section`
  position: absolute;  
  z-index: 0
  margin-left: auto; 
  margin-right: auto;
  // right: 1px;
`

export default ModalC
