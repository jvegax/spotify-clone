import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 22px;
    width: auto;
    min-width: 70px;
    height: 32px;
    margin-right: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
`