import styled from 'styled-components';

const ButtonBg = styled.div`
    padding: 10px;
`;

const ButtonShadow = styled.div`
    position: relative;
    width: ${(props) => (props.small ? '300px' : '400px')};
    height: 40px;
    box-shadow: -3px -3px 7px white;
    border-radius: 24px;
`;

const ButtonCont = styled.button`
    background-color: ${(props) =>
        props.primary
            ? '#FF7549'
            : props.google
            ? '#CC3731'
            : props.kakao
            ? '#FFEA01'
            : props.naver
            ? '#1FC702'
            : 'white'};
    color: ${(props) => (props.primary ? 'white' : '#371F21')};
    border: '2px solid #FF7549'};
    position: absolute;
    width: ${(props) => (props.small ? '300px' : '400px')};
    height: 45px;
    box-shadow: 7px 7px 7px rgba(80, 29, 0, 0.16);
    font-size: 16px;
    font-weight: 600;
    border-radius: 24px;
`;

export const Button = ({ children, ...rest }) => {
    return (
        <ButtonBg>
            <ButtonShadow {...rest}>
                <ButtonCont {...rest}>{children}</ButtonCont>
            </ButtonShadow>
        </ButtonBg>
    );
};