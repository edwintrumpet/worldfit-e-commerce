import styled from 'styled-components';
import fadeInMenu from '../../styles/animations/fadeInMenu';
import fadeInCover from '../../styles/animations/fadeInCoverMenu';

export const Ul = styled.ul`
    display: none;

    @media (min-width: 890px){
        display: flex;
    }
`;

export const Li = styled.li`
    padding: 0.5rem;
    text-transform: uppercase;
    white-space: nowrap;
    font-weight: 600;
`;

export const Img = styled.img`
    height: 13px;
    transform: translateY(2px);
`;

export const Movil = styled.div`
    display: flex;

    @media (min-width: 890px){
        display: none;
    }
`;

export const SmallMenu = styled.div`
    cursor: pointer;
`;

export const Bar = styled.div`
    background-color: #FFF;
    height: 2px;
    width: 25px;
    margin: 6px;
`;

export const ImgMovil = styled.img`
    height: 25px;
    margin: 0 10px;
    transform: translateY(2px);

    &:nth-child(2){
        @media (min-width: 600px){
            display: none;
        }
    }
`;

export const MenuMovil = styled.ul`
    position: absolute;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    top: 0;
    left: 20%;
    padding: 1rem 2rem;
    background-color: #FFF;
    color: #000;
    width: 80%;
    height: 100%;
    animation: intro 5s ease;
    z-index:1000;
    ${fadeInMenu()}
`;

export const Exit = styled.div`
    position: absolute;
    height: 25px;
    width: 25px;
    top: 1rem;
    left: 2rem;
`;

export const Line = styled.div`
    position: absolute;
    top: 11.5px;
    left: 0;
    width: 25px;
    height: 2px;
    background-color: #000;
    transform: rotate(45deg);
    pointer-events: none;

    &:nth-child(2){
        transform: rotate(135deg)
    }
`;

export const Cover = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    ${fadeInCover()}
`;
