import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RightContainer = styled.View`
    width: 40%;
    flex-direction: row;
    justify-content: flex-start;
    gap: 12px;
    padding-left: 18px;
`
export const LeftContainer = styled.View`
    width: 60%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    padding-right: 18px;
`
