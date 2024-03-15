import AppLayout from "../component/AppLayout";
import React, { useCallback, useState } from "react";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { SIGN_UP_REQUEST } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";

const ErrorMessage = styled.div`
  color: red;
`;
const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state) => state.user);

  const [email, onChangeEmail] = useInput("");
  const [gender, onChangeGender] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);

  dispatch({
    type: SIGN_UP_REQUEST,
    data: { email, password, nickname, gender },
  });

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );
  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(email, nickname, password);
  }, [password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>내 프로필 | jwitter</Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input
            name="user-email"
            value={email}
            type="email"
            onChange={onChangeEmail}
            required
          />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input
            name="user_nickname"
            value={nickname}
            type="nickname"
            onChange={onChangeNickname}
            required
          />
        </div>
        <div>
          <label htmlFor="user-gender">성별</label>
          <br />
          <Input
            name="user_gender"
            value={gender}
            type="gender"
            onChange={onChangeGender}
            required
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user_password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 체크</label>
          <br />
          <Input
            name="user_password_check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            약관에 동의합니다.
          </Checkbox>
          {termError && (
            <ErrorMessage>
              약관에 동의하지 않으시면 회원가입 하실 수 없습니다.
            </ErrorMessage>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
