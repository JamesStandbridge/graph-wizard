import styled from 'styled-components';

export const MenuApplicationContainer = styled.div`
    height: 100%;
    width: 500px;
    border-left: solid 1px lightgrey;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: white;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const MenuHeader = styled.div`
    background-color: #f2f2f2;
    color: #525252;
    font-size: 15px;
    display: flex;
    align-items: center;
`;

export const MenuHeaderIcon = styled.div`
    padding: 10px 15px;
    font-size: 25px;
    display: flex;
    background-color: ${(props) => props.color};
    color: white;
    margin-right: 10px;
`;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 15px 20px;
`;

export const SectionTitle = styled.h3`
    color: #4582c1;
    font-weight: 100;
    font-size: 17px;
    margin: 0;
`;

export const MenuSection = styled.div`
    border-bottom: solid 1px lightgrey;
`;

export const SectionBody = styled.div`
    padding: 0 20px 20px 20px;
    display: flex;
    align-items: center;
    gap: 25px;
`;
