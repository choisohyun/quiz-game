import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

import Text from "@Style/Text";
import Button from "@Style/Button";
import Avatar from "@Style/Avatar";
import { media } from "@Style/util";

interface IHeader {
  type: string;
}

const Header = ({ type }: IHeader) => {
  let history = useHistory();

  const onPassMain = () => history.push("/");

  return (
    <>
      <Wrapper>
        <LeftWrapper>
          <Text color="white" fontSize="xxl" fontWeight="extraBold" isClick onClick={onPassMain}>
            QUIZY
          </Text>
          <SearchBar>
            <SearchInputIcon />
            <SearchInput placeholder="Search" />
          </SearchBar>
        </LeftWrapper>
        <RightWrapper>
          {type === "none" ? (
            <UserButton>Login</UserButton>
          ) : (
            <LogoutWrapper>
              <UserButton>Logout</UserButton>
              <Avatar src="" />
            </LogoutWrapper>
          )}
        </RightWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.light.green};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
`;

const LeftWrapper = styled.div`
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  ${media.tablet} {
    display: flex;
    width: 50%;
  }
  ${media.phone} {
    display: table;
    width: 100%;
  }
`;

const RightWrapper = styled.div`
  margin-right: 30px;
  ${media.phone} {
    margin-top: -40px;
    height: 34px;
  }
`;

const SearchBar = styled.form`
  position: relative;
  height: 100%;
  width: 100%;
`;

const SearchInput = styled.input`
  padding-left: 30px;
  background: none;
  color: ${({ theme }) => theme.light.white};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.light.white};
  outline: none;
  height: 30px;
  width: inherit;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.light.blue1};
    box-shadow: inset 0 1px 2px ${({ theme }) => theme.light.blue3}, 0 0 0 0.2em ${({ theme }) => theme.light.blue2};
  }
  ${media.tablet} {
    margin-left: 5px;
  }
  ${media.phone} {
    margin-top: 5px;
    margin-left: 0px;
    width: 89.1%;
  }
`;

const SearchInputIcon = styled(SearchIcon)`
  display: block;
  color: ${({ theme }) => theme.light.white};
  text-align: center;
  pointer-events: none;
  position: absolute;
  top: 6px;
  left: 8px;
  ${media.phone} {
    top: 10px;
  }
`;

const UserButton = styled(Button)`
  height: 34px;
  ${media.phone} {
    position: absolute;
    top: 12px;
    right: 30px;
  }
`;

const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
