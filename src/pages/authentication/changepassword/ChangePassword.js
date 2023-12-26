import * as React from "react";
import styled from "styled-components";
import Signin from "../../../pages/authentication/images/ChangePass.svg";
import SmartLogo from "../../../pages/authentication/images/Smartlogo.svg";
import Form from "./Form3.js";

function ChangePassword() {
  return (
    <Div>
      <Div2>
        <Column>
          <Div3>
            <Div4 loading="lazy" src={SmartLogo} />
            <Div5>Reset your password</Div5>
            <Form />
            <Div19> Reset Password</Div19>
          </Div3>
        </Column>
        <Column2>
          <Div21>
            <Img3 loading="lazy" src={Signin} />
          </Div21>
        </Column2>
      </Div2>
    </Div>
  );
}

export default ChangePassword;

const Div = styled.div`
  background-color: #fff;
  padding-left: 64px;
  height: 60% !important;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Div2 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 36%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div3 = styled.div`
  align-items: center;
  border-radius: 16px;
  background-color: var(--White, #fff);
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  width: 100%;
  padding: 38px 32px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Div4 = styled.img`
  color: var(--Secondary, #2f2e41);
  letter-spacing: -0.32px;
  align-self: center;
  white-space: nowrap;
  font: 700 32px/75% Lato, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div5 = styled.div`
  color: var(--Main-Text, #101828);
  align-self: center;
  margin-top: 19px;
  white-space: nowrap;
  font: 700 24px/140% Lato, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div19 = styled.div`
  color: var(--White, #fff);
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  background-color: var(--Primary, #6c63ff);
  align-self: stretch;
  margin-top: 32px;
  padding: 12px 60px;
  font: 600 14px/143% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 60%;
  margin-left: 90px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div21 = styled.div`
  disply: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 1024px;
  flex-grow: 1;
  padding: 50px 60px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Img3 = styled.img`
  position: absolute;
  inset: 0;
  height: fit;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
