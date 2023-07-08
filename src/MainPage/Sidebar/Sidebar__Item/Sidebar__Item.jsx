import * as styled from './Sidebar__ItemStyled';

export const Sidebar__Item = ({ img, description, loadingClass }) => {
  return (
    <styled.sidebar__item className={loadingClass}>
      <a href="#">
        <img src={img} alt={description} />
      </a>
    </styled.sidebar__item>
  );
};
export default Sidebar__Item;
