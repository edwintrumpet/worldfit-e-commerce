import { css, keyframes } from 'styled-components';

const menuKeyframes = keyframes`
    from{
        left: 100%;
        width: 0;
        opacity: 0;
    }
    to{
        left: 20%;
        witdh: 80%;
        opacity: 1;
    }
`;

const fadeInMenu = ({ time = '300ms', type = 'ease' } = {}) => css`animation: ${time} ${menuKeyframes} ${type}`;

export default fadeInMenu;
