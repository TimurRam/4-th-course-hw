
import * as Styled from './NotFoundStyled';


export const NotFound = () => {
  return (
    <Styled.Container>
      <Styled.Heading>404</Styled.Heading>
      <Styled.Lead>
        Страница не найдена
      </Styled.Lead>
      <Styled.Text>Возможно, она была удалена или перенесена на другой адрес</Styled.Text>
      {/* <Btn value="Вернуться на главную" $isColored={true} link="/" /> */}
    </Styled.Container>
  );
};