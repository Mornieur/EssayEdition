import styled from "styled-components";

interface IProps {
  mode: string;
}

export const Editor = styled.div<IProps>`
  /* padding: 1.7rem;
  padding-top: 0; */
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: -0.02em;
  color: #5e5e5e;
  * {
    transition: all 0.5s;
  }
  .rdw-editor-toolbar {
    display: ${({mode}) => mode === 'post' ? "none" : "flex"};
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
    box-shadow: 0px 9px 27px rgba(0, 0, 0, 0.07),
      0px 3.75998px 11.28px rgba(0, 0, 0, 0.0503198),
      0px 2.01027px 6.0308px rgba(0, 0, 0, 0.0417275),
      0px 1.12694px 3.38082px rgba(0, 0, 0, 0.035),
      0px 0.598509px 1.79553px rgba(0, 0, 0, 0.0282725),
      0px 0.249053px 0.747159px rgba(0, 0, 0, 0.0196802);
    .rdw-dropdown-carettoopen {
      display: none;
    }
    * {
      padding: 0.2rem;
      &:hover {
        background-color: #f8f8f8;
        transition: all 0.5s;
      }
    }
  }
  .rdw-editor-main {
    height: 26rem !important;
    background-color: #f0f0f0;
    overflow-y: scroll;
    @media (min-height: 535px) {
      height: 27vh;
    }
    @media (min-height: 580px) {
      height: 31vh;
    }
    @media (min-height: 630px) {
      height: 35vh;
    }
    @media (min-height: 700px) {
      height: 39vh;
    }
    @media (min-height: 760px) {
      height: 42vh;
    }
    @media (min-height: 840px) {
      height: 45vh;
    }
    @media (min-height: 910px) {
      height: 48vh;
    }
    @media (min-height: 1010px) {
      height: 51vh;
    }
    @media (max-width: 420px) {
      height: 18rem;
    }
  }
  .DraftEditor-root {
    padding: 1rem;
  }
  .rdw-dropdown-optionwrapper,
  .rdw-colorpicker-modal,
  .rdw-embedded-modal,
  .rdw-emoji-modal,
  .rdw-image-modal {
    position: absolute;
    background-color: white;
    * {
      list-style: none;
      text-decoration: none;
    }
  }
  .rdw-colorpicker-modal {
    overflow-y: scroll;
    height: 10rem;
    .rdw-colorpicker-modal-options {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .rdw-image-modal {
    img {
      max-height: 100px;
    }
  }
`;