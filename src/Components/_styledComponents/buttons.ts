import styled from "styled-components";

export type ButtonProps = {
  noBorder: boolean;
  btnColor: string;
  size: string;
  block: boolean;
};

const Button = styled.button<ButtonProps>`
  margin-top: 30px;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  border: ${({ noBorder }) => (noBorder ? "0" : "1px solid white")};
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
    cursor: pointer;
  }
  ${({ btnColor }) => {
    switch (btnColor) {
      case "info":
        return "background-color: #00d4ff;";
      case "success":
        return "background-color: #00ff84;";
      case "danger":
        return "background-color: #ff0038;";
      default:
        return "background-color: #878e8f;";
    }
  }}
  ${({ size }) => {
    switch (size) {
      case "lg":
        return "font-size: 15px;";
      case "sm":
        return "font-size: 12px;";
      default:
        return "font-size: 8px;";
    }
  }}
${({ block }) => {
  if (block) {
    return `
            display:block;
        `;
  }
}}
`;

export default Button;
