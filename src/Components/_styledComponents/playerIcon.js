import styled from "styled-components";

export const PlayerIconWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 20px;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;
export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;
export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;
export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-size: 200px 200px;
  background-image: url(${(props) => props.imgUrl});
  margin-bottom: 35px;
`;
export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;
export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;
