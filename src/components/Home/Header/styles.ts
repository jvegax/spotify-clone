import styled from "styled-components/native";

export const ImageBackground = styled.ImageBackground.attrs({
    source: require('./album.png'),
  })`
    flex: 0.4;
    opacity: 0.8;
  `;
  
  export const TextContainer = styled.View`
    flex: 1;
    padding: 0 10px;
    justify-content: flex-end;
    align-items: flex-start;
  `;