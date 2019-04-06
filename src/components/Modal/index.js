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
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      contentLabel="Example Modal"
      onClick={() => console.log("onclick")}
    >
      <Content width={props.width || 100} height={props.height || 100}>
        <IconClose onClick={props.onButtonCloseClick}/>
        <MainWrap className={props.className}>
          {props.children}
        </MainWrap>
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
  overflow: auto;
  padding-left: 35px;
  margin-top: 10px;
`

const IconClose = styled.img.attrs({src: IconCloseC})`
  width: 15px;
  height: 15px;
  float: right;
  cursor: pointer;
`

const MainWrap = styled.section`
  
`

export default ModalC
