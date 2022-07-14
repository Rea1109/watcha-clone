import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { CgSearch } from 'react-icons/cg';
import { AiFillCloseCircle } from 'react-icons/ai';

const Header = () => {
    const handelSubmit = (e: any) => {
        e.preventDefault();
        console.log(e);
    };
    return (
        <HeaderWrapper>
            <Navigation>
                <MenuWrapper>
                    <Link to={'/'}>
                        <HomeButton>
                            <span style={{ color: '#ed1a59' }}>WATCHA</span>
                            <span>CLONE</span>
                        </HomeButton>
                    </Link>
                    <Link to={'/movie'}>
                        <MenuButton active={true}>영화</MenuButton>
                    </Link>
                    <Link to={'/tv'}>
                        <MenuButton>TV</MenuButton>
                    </Link>
                </MenuWrapper>
                <MenuWrapper>
                    <SearchForm onSubmit={handelSubmit}>
                        <SearchIcon>
                            <CgSearch />
                        </SearchIcon>
                        <SearchInput name="search" type="text" placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요." />
                        <ResetIcon>
                            <AiFillCloseCircle />
                        </ResetIcon>
                    </SearchForm>
                    <SignIn>로그인</SignIn>
                    <SignUp>회원가입</SignUp>
                </MenuWrapper>
            </Navigation>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0px;
    width: 100%;
    height: 62px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    height: 62px;
    margin: auto;
`;

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const HomeButton = styled.button`
    margin-right: 30px;
    border: none;
    background-color: transparent;
    font-size: 32px;
    font-weight: bold;
`;

const MenuButton = styled.button<{ active?: boolean }>`
    margin-right: 15px;
    border: none;
    background-color: transparent;
    font-size: 18px;
    color: ${({ active }) => (active ? 'black' : '#bbbabb')};
`;

const SearchForm = styled.form`
    position: relative;
`;

const SearchIcon = styled.div`
    position: absolute;
    top: 9px;
    left: 2px;
    font-size: 25px;
    color: #c8c8cc;
`;

const ResetIcon = styled.div`
    position: absolute;
    top: 13px;
    right: 7px;
    font-size: 15px;
    color: black;
`;

const SearchInput = styled.input`
    outline: none;
    width: 245px;
    height: 40px;
    padding-left: 35px;
    padding-right: 30px;
    border: none;
    border-radius: 4px;
    background-color: #f5f4f6;
    font-size: 14px;
`;

const SignIn = styled.button`
    margin: 0px 15px;
    border: none;
    background-color: transparent;
    font-size: 14px;
    color: #313131;
`;

const SignUp = styled.button`
    height: 60%;
    padding: 0px 15px;
    border: 1px solid black;
    border-radius: 4px;
    background-color: transparent;
    font-size: 14px;
    color: black;
`;
