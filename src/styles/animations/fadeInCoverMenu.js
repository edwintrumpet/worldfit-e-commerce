import { css, keyframes } from 'styled-components';

const coverKeyframes = keyframes`
    from{
        background-color: rgba(0, 0, 0, 0);
    }
    to{
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

const fadeInCover = ({ time = '300ms', type = 'ease' } = {}) => css`animation: ${time} ${coverKeyframes} ${type}`;

export default fadeInCover;
