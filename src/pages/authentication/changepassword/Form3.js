import styled from "styled-components";

const InputContainer = styled.div`
  color: ${(props) => (props.gray ? "var(--Gray60, #9e9e9e)" : "#000")};
  letter-spacing: -0.16px;
  white-space: nowrap;
  align-items: start;
  border-radius: 8px;
  background-color: ${(props) =>
    props.gray ? "var(--Gray20, #f5f5f5)" : "transparent"};
  align-self: stretch;
  margin-top: ${(props) => (props.topMargin ? `${props.topMargin}px` : "8px")};
  padding: ${(props) => (props.gray ? "8px 60px 8px 12px" : "8px 12px")};
  font: 400 16px/150% Lato, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 991px) {
    white-space: initial;
    padding-right: ${(props) => (props.gray ? "20px" : "12px")};
  }
`;

const InputField = styled.input`
  border: none;
  outline: none;
  background-color: var(--Gray20, #f5f5f5);
  color: var(--Gray60, #9e9e9e);
  letter-spacing: -0.16px;
  padding: 8px 60px 8px 12px;
  font: 400 16px/150% Lato, sans-serif;
  white-space: nowrap;
  align-items: start;
  border-radius: 8px;
  align-self: stretch;
  width: 90%;
  height: 2em;
  gap: 20px;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-left: -2em;
`;

const Form3 = () => {
  return (
    <>
      <FormContainer>
        <InputContainer>
          New Password
          <InputField type="password" placeholder="********" />
        </InputContainer>
        <InputContainer>
          Confirm New Password
          <InputField type="password" placeholder="********" />
        </InputContainer>
      </FormContainer>
    </>
  );
};

export default Form3;
