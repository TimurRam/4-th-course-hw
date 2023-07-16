import * as styled from './Header__SearchStyled';
import sprite from 'img/icon/sprite.svg';
const Header__Search = () => {
  return (
    <styled.search>
      <styled.searchSvg>
        <use xlinkHref={`${sprite}#icon-search`} />
      </styled.searchSvg>
      <styled.searchInput type="search" placeholder="Поиск" name="search" />
    </styled.search>
  );
};

export default Header__Search;
