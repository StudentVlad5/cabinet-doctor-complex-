import {
  HeaderContainer,
  Link,
  Headline,
  HeaderSection,
  HeadLogo,
} from './Header.styled';
import logo from 'images/svg/logo.svg';

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <Link to="/">
          <HeadLogo src={logo} aria-label="Logo" loading="lazy" />
        </Link>
        <Headline>
          Институт безопасности человека
          <br />
          Кабинет Врача
        </Headline>
      </HeaderContainer>
    </HeaderSection>
  );
};
