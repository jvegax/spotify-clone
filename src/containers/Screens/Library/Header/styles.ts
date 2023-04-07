import styled from "styled-components/native";

export const Container = styled.View`
    height: 150px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.black};
`;

export const ProfileContainer = styled.View`
    margin-top: 40px;
    flex: 0.7;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.black};
`;

export const SearchContainer = styled.View`
    flex: 0.3;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.green};
`;

export const ProfileImage = styled.Image`
    width: 36px;
    height: 36px;
    border-radius: 50px;
    border: none;
`;

export const RightContainer = styled.View`
    width: 50%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;

export const LeftContainer = styled.View`
    width: 50%;
    padding-right: 10px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;

