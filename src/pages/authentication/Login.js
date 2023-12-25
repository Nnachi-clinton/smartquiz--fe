import * as React from "react";
import styled from "styled-components";
import Signin from "../../pages/authentication/images/Signin.svg";
// import SmartLogo from "../../pages/authentication/images/Smartlogo.svg";

function Login() {
  return (
    <Div>
      <Div2>
        <Column>
          <Div3>
            <Div4>Smart Quiz</Div4>
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
            <Div13>Email Address</Div13>
            <Div14>deborahologun@gmail.com</Div14>
            <Div15>Password</Div15>
            <Div16>
              <Div17>**********</Div17>
              <Img2
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d14111f88505ffe416e034173b3986e7b27290a40e40735d3156735aa9f48e72?"
              />
            </Div16>
            <Div18>Forgot password</Div18>
            <Div19>Login</Div19>
            <Div20>
              Already have an account ? <SignUpLink>Sign up here</SignUpLink>
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
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;
const SignUpLink = styled.span`
  font-weight: 600;
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

const Div4 = styled.div`
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
  width: 100%;
  flex-direction: column;
  padding: 12px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div7 = styled.div`
  display: flex;
  gap: 8px;
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

const Div13 = styled.div`
  color: #000;
  letter-spacing: -0.16px;
  align-self: stretch;
  margin-top: 29px;
  font: 400 16px/150% Lato, sans-serif;
`;

const Div14 = styled.div`
  color: var(--Gray60, #9e9e9e);
  letter-spacing: -0.16px;
  white-space: nowrap;
  align-items: start;
  border-radius: 8px;
  background-color: var(--Gray20, #f5f5f5);
  align-self: stretch;
  margin-top: 8px;
  justify-content: center;
  padding: 8px 60px 8px 12px;
  font: 400 16px/150% Lato, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Div15 = styled.div`
  color: #000;
  letter-spacing: -0.16px;
  align-self: stretch;
  margin-top: 24px;
  font: 400 16px/150% Lato, sans-serif;
`;

const Div16 = styled.div`
  border-radius: 8px;
  background-color: var(--Gray20, #f5f5f5);
  align-self: stretch;
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
  gap: 20px;
  padding: 8px 12px;
`;

const Div17 = styled.div`
  color: var(--Gray60, #9e9e9e);
  letter-spacing: -0.16px;
  font: 400 16px/150% Lato, sans-serif;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

const Div18 = styled.div`
  color: var(--Blue-600, #1570ef);
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  align-self: stretch;
  margin-top: 4px;
  font: 400 16px/140% Inter, sans-serif;
`;

const Div19 = styled.div`
  color: var(--White, #fff);
  white-space: nowrap;
  justify-content: center;
  align-items: center;
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
  width: 64%;
  margin-left: 20px;
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
  height: 30;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
