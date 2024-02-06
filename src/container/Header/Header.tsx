import React, { FC } from "react";
import { HeaderContainer, Heading, Wrapper } from "./Header.style";

interface HeaderTypes {}
const Header: FC<HeaderTypes> = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Heading textLevel={"p"}>
          Fortell oss hvordan du bruker banktjenester, så vil vi anbefale en
          konto som passer for deg. Våre anbefalinger vil endre seg basert på
          informasjonen du gir.
        </Heading>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
