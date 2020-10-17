import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import SignUp from './SignUp';
import theme from '../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const signUpSetUp = () => {
    const utils = render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <SignUp/>
    </ThemeProvider>
    );
    const email = utils.getByLabelText('Email');
    const name = utils.getByLabelText('Name');
    const password = utils.getByLabelText('Password');
    const passwordConfirm = utils.getByLabelText('Password Confirmation');
    const submit = utils.getByTestId('submit-button')
    return {
        email,
        name,
        password,
        passwordConfirm,
        submit,
        ...utils,
    }
}


test('It should keep a $ in front of the input', () => {
    //我这里的都说没有formcontrol，可能需要老师晚上的时候讲解一下，我也再调查一下
  const { email,name,password,passwordConfirm, } = signUpSetUp()
  fireEvent.change(email, { target: { value: '23@qq.com' } })
  expect(email.value).toBe('23@qq.com')
  fireEvent.change(name, { target: { value: 'qq' } })
  expect(name.value).toBe('qq')
  fireEvent.change(password, { target: { value: 'Pp1234' } })
  expect(password.value).toBe('Pp1234')
  fireEvent.change(passwordConfirm, { target: { value: 'Pp1234' } })
  expect(passwordConfirm.value).toBe('Pp1234')
  fireEvent.change(passwordConfirm, { target: { value: 'Pp1234' } })
  expect(passwordConfirm.value).toBe('Pp1234')
  fireEvent.click(submit)//这个的expect不知道该怎么写，
})
