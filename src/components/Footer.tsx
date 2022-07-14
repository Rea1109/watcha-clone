import styled from '@emotion/styled';
import { BsGithub } from 'react-icons/bs';
import { SiNotion } from 'react-icons/si';

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterSection>
                <InfoSection>
                    <span>©2022 by Rea All rights reserved.</span>
                </InfoSection>
                <LinkSection>
                    <BsGithub onClick={() => window.open('https://github.com/Rea1109/watcha-clone')} />
                    <SiNotion onClick={() => window.open('https://readevenote.notion.site/Dev_note-c836f3307b0d460b8fc2488b58e0ab67')} />
                </LinkSection>
            </FooterSection>
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.footer`
    background-color: #1b1d1f;
    color: white;
`;

const FooterSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1200px;
    height: 100%;
    padding: 50px 0px;
    margin: auto;
`;

const InfoSection = styled.div`
    margin-bottom: 50px;
`;

const LinkSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100px;
    font-size: 25px;

    svg {
        cursor: pointer;
    }
`;
