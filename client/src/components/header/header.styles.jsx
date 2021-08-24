import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/noirNonly.svg';
// Logo2;
const HeaderContainerFixed = css`
    position: sticky;
    z-index: 5;
    background: #2d3445;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.09);
    color: #fff;
    top: 0;
    .st0 {
        fill: #f1b904;
    }
`;
const CartIconFixed = css`
    div > svg > g > path {
        fill: white !important;
    }
    span {
        color: white;
    }
`;

export const HeaderContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    background: white;
    position: sticky;
    padding: 0 1rem;
    transition: all 0.8s ease 0s;
    flex-wrap: wrap;
    z-index: 3;
    ${({ fixed }) => (fixed === 'fixed' ? HeaderContainerFixed : '')}
`;
export const LogoContainer = styled.svg`
    height: auto;
    width: auto;
    @media screen and (max-width: 800px) {
        width: auto;
        padding: 0px;
    }
`;
export const LogoImage = styled(Logo)`
    width: 5vw;
    height: auto;
    min-width: 70px;
    min-height: auto;
    margin-right: auto;
`;
export const OptionsContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 320px) {
        width: 50%;
    }
    ${({ fixed }) => (fixed ? CartIconFixed : '')}
`;
export const Title = styled.h1`
    padding: 8px 8px;
    cursor: pointer;
    color: #f1b904;
    margin: 5px;
    text-align: center;
    font-size: 1.5em;
    &:hover {
        text-decoration: none;
    }
`;
export const OptionLink = styled(Link)`
    padding: 10px 8px;
    cursor: pointer;
    color: ${({ fixed }) => (fixed ? '#F1B904' : 'black')};
    margin: 5px;
`;
