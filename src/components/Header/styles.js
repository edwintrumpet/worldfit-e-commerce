import styled from 'styled-components';

export const Box = styled.header`
    background-color: #000;
    color: #FFF;
    padding: 0 1.5rem;
    font-size: 13px;
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
`;

export const Ul = styled.ul`
    display: none;
    justify-content: flex-end;
    padding: 0.5rem 0;

    @media (min-width: 600px){
        display: flex;
    }
`;

export const Li = styled.li`
    margin-left: 1rem;
`;

export const Img = styled.img`
    height: 13px;
    transform: translateY(2px);
`;

export const Span = styled.span`
    margin-left: 0.5rem;
`;

export const Logo = styled.img`
    height: 85px;
`;

export const Promo = styled.p`
    text-align: center;
    font-size: 14px;
    padding: 0.5rem;
`;
