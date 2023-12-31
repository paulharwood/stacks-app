import styled from "styled-components";
import { colors } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: fit-content;
  min-height: calc(100vh - 100px);
  max-height: fit-content;
  width: calc((100% / 3));
  min-width: 270px;
  background: ${colors.glass};
  border-radius: 0px;
  border-left:3px solid rgba(33,33,33,0.3);

  @media (max-width: 900px) {
    width: calc((100% / 2) - 10px);
  }
  
  @media (max-width: 640px) {
    width: 90%;
  }
  
  @media (max-width: 432px) {
    width: 380px;
  }
  
  header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    text-transform: uppercase;
    
    border-radius: 0 0 0 0;
    background: ${colors.background};
  }
  
 ul {
    height: 100%;
    min-height: calc(100vh - 80px - 64px);

    button {
      background: none;
      border-radius: 0;
    }
    
    &::-webkit-scrollbar {
      width: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #fff5;
    }
  }
  
  footer {
    height: 10px;
    border-radius: 0 0 0 0;
    background: ${colors.background};
  }
`