import styled from "styled-components";

export const Container = styled.section`
  height: 60px;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const ContainerSwitchTheme = styled.section`
  display: flex;
  align-items: center;
  & > div {
    margin: 0 4px 0 8px;
  }
`;
