import { Link } from 'react-router-dom';
import * as styled from './SidebarItemStyled';

export const SidebarItem = ({ img, description, loadingClass }) => {
  return (
    <styled.sideBarItem className={loadingClass}>
      
        <img src={img} alt={description} />
    
    </styled.sideBarItem>
  );
};
export default SidebarItem;
