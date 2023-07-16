import * as styled from './MainNavStyled'
import MainNav__Link from './MainNavLink/MainNavLink';
import sprite from 'img/icon/sprite.svg';
import { useState } from 'react';

const MainNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClickBurger = () => setIsVisible(!isVisible);
  return (
    <styled.mainNav>
      <styled.burgerSvg onClick={handleClickBurger}>
        <use xlinkHref={`${sprite}#icon-burger`} />
      </styled.burgerSvg>
      <styled.navListContainer>
        <styled.navList $isVisible = {isVisible}>
          <MainNav__Link linkName={'Главное'} link='/' />
          <MainNav__Link linkName={'Мой плейлист'} link='/favorites' />
          <MainNav__Link linkName={'Выйти'} link='/authorization' />
        </styled.navList>
      </styled.navListContainer>
    </styled.mainNav>
  );
};

export default MainNav;
