import styled from "styled-components";

export const BodyContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 30px;
  background: #bbdac7;

  width: 100%;
  max-height: 90vh;

  overflow-y: auto;
`;

export const Title = styled.p`
  font-family: "Jacques Francois Shadow";
  font-weight: 400;
  font-size: 35px;
  line-height: 53px;
  color: #303030;
  /* padding-top: 20px; */
`;

export const Text = styled.p`
  margin: 0 auto;
  font-family: "Katibeh";
  font-weight: 400;
  font-size: 30px;
  color: #303030;
  padding: 0 50px;
`;

export const Picture = styled.img`
  width: 350px;
  height: 280.02px;
`;
