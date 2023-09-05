import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0;

  height: 100%;
  width: 100%;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 640px) {
    padding: 0
  }

  &::-webkit-scrollbar {
      width: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #0007;
    }
`