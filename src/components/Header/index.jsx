import React, { useCallback, useState } from "react";
import Switch from "react-switch";
import { Container, ContainerSwitchTheme } from "components/Header/styles";
import { useTheme } from "utils/hook/useTheme";
function Header() {
  const { toogleTheme, theme } = useTheme();
  const [checked, setChecked] = useState(false);

  const handleChangeTheme = useCallback(() => {
    toogleTheme();
    setChecked(!checked);
  });
  return (
    <Container>
      <ContainerSwitchTheme>
        <span className="title">Tema</span>
        <Switch
          onChange={handleChangeTheme}
          checked={checked}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={40}
          handleDiameter={20}
          offColor="#95a5a6"
          onColor="#3498db"
        />
        <span className="type">{theme.title}</span>
      </ContainerSwitchTheme>
    </Container>
  );
}

export default Header;
