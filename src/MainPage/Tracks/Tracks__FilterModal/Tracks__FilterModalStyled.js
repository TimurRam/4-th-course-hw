import { styled } from 'styled-components';
export const modalWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  margin-top: 10px;
  width: 248px;
  height: 305px;
  padding: 20px 32px;
  background-color: #313131;
  overflow: hidden;
  border-radius: 12px;
`;
export const modalList = styled.ul`
  box-sizing: border-box;
  height: 241px;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  scrollbar-color: white, gray;
}
& li {
  padding: 12px 0;
}
& a {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  line-height: 24px;
}

& a:hover {
  text-decoration: underline;
  color: #b672ff;
}
&::-webkit-scrollbar {
  background-color: #313131;
  width: 4px;
  border-radius: 4px;
}

&::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #ffffff;
}

&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #4b4949;
}
`;
