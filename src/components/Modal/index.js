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
      <Content className={props.className}>
        <IconClose onClick={props.onButtonCloseClick}/>
        <MainWrap>
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
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom : 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
  }
}

const Content = styled.section`
  min-width: 350px; 
  height: 100px; 
  background-color: white;  
  border-radius: 5px;  
  padding: 20px;
  overflow: auto;
`

const IconClose = styled.img.attrs({src: IconCloseC})`
  width: 20px;
  height: 20px;
  float: right;
  cursor: pointer;
`

const MainWrap = styled.section`

`

export default ModalC
