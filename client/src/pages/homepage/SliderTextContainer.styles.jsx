import styled from 'styled-components';
export const SliderTextContainer = styled.div`
    /* position: absolute; */
    /* margin: auto; */
    text-align: center;
    align-content: center;
    margin: auto;
    margin-top: -40vh;
    margin-bottom: 20vh;

    @media (max-width: 768px) {
        margin-top: -45vh;
        margin-bottom: 20vh;
        font-size: small;
        h1 {
            font-size: 1.5em;
        }
    }
`;
