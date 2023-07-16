import * as styled from './HeaderSearchStyled';
import sprite from 'img/icon/sprite.svg';
const HeaderSearch = () => {
  return (
    <styled.search>
      <styled.searchSvg>
        <use xlinkHref={`${sprite}#icon-search`} />
      </styled.searchSvg>
      <styled.searchInput type="search" placeholder="Поиск" name="search" />
    </styled.search>
  );
};

export default HeaderSearch;
