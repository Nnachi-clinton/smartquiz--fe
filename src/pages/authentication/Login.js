import * as React from "react";
import styled from "styled-components";
import Signin from "../../pages/authentication/images/Signin.svg";
import SmartLogo from "../../pages/authentication/images/Smartlogo.svg";
import Form from "./Form.js";

function Login() {
  return (
    <Div>
      <Div2>
        <Column>
          <Div3>
            <Div4 loading="lazy" src={SmartLogo} />
            <Div5>Welcome back to Smart Quiz</Div5>
            <Div6>
              <Div7>
                <Img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e873898d712faffd9267d46082abc28915ee1fdb8966e76bce618430c7bcb8b?"
                />
                <Div8>Sign up with Google</Div8>
              </Div7>
            </Div6>
            <Div9>
              <Div10 />
              <Div11>OR</Div11>
              <Div12 />
            </Div9>
            <Form />
            <Div18>Forgot password</Div18>
            <Div19>Login</Div19>
            <Div20>
              Don't have an account ? <SignUpLink>Sign up here</SignUpLink>
            </Div20>
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

export default Login;

const Div = styled.div`
  background-color: #fff;
  padding-left: 64px;
  height: 60% !important;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;
const SignUpLink = styled.span`
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  color: rgba(108, 99, 255, 1);
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

const Div6 = styled.div`
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background-color: var(--White, #fff);
  display: flex;
  margin-top: 32px;
  margin-left: 0px;
  width: 75%;
  flex-direction: column;
  padding: 12px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div7 = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  max-width: 100%;
`;

const Div8 = styled.div`
  color: var(--Grey-400, #98a2b3);
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 14px/143% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div9 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 29px;
  justify-content: space-between;
  gap: 17px;
`;

const Div10 = styled.div`
  background-color: #eaebec;
  align-self: center;
  width: 173px;
  height: 1px;
  margin: auto 0;
`;

const Div11 = styled.div`
  color: var(--Grey-400, #98a2b3);
  font: 400 14px/143% Inter, sans-serif;
`;

const Div12 = styled.div`
  background-color: #eaebec;
  align-self: center;
  width: 173px;
  height: 1px;
  margin: auto 0;
`;

const Div18 = styled.div`
  color: var(--Blue-600, #1570ef);
  letter-spacing: 0.15px;
  cursor: pointer;
  text-decoration-line: underline;
  align-self: stretch;
  margin-top: 4px;
  font: 400 16px/140% Inter, sans-serif;
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

const Div20 = styled.div`
  color: var(--Primary, #6c63ff);
  text-decoration-line: underline;
  align-self: center;
  margin-top: 32px;
  white-space: nowrap;
  font: 400 14px/20px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
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
