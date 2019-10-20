import styled from 'styled-components';

export const Box = styled.header`
    background-color: #000;
    color: #FFF;
    padding: 0 1.5rem;
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    font-size: 13px;

    &:first-child {
        @media (max-width: 760px) {
            display: none;
        }
    }
`;

export const Ul = styled.ul`
    display: flex;
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
