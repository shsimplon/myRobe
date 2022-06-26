import Button from 'app/components/atoms/button/Button';
// import * as React from 'react';
// import { createRenderer } from 'react-test-renderer/shallow';

// import {
//   RenderResult,
//   screen,
//   render as rtlRender,
// } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import store from 'app/store/store';
// import FormLogin from './FormLogin';
// import { fireEvent } from '@testing-library/react';
// import axios from 'axios';
// const axiosGetTest = axios.create({
//   baseURL: 'http://localhost:3000',
//   timeout: 15000,
//   headers: {},
// });

// const render = component =>
//   rtlRender(<Provider store={store}>{component}</Provider>);

// describe('<FormLogin />', () => {
//   it('should render envoyer', () => {
//     render(<FormLogin />);

//     const Envoyer = screen.getByText('Envoyer');
//     expect(Envoyer).toBeInTheDocument();
//   });

//   it('should render length of input', () => {
//     render(<FormLogin />);

//     const input = screen.getAllByRole('textbox');
//     expect(input).toHaveLength(1);
//   });
//   it('should render length of button', () => {
//     render(<FormLogin />);

//     const button = screen.getAllByRole('button');
//     expect(button).toHaveLength(1);
//   });

//   it('Email input should be rendered', () => {
//     render(<FormLogin />);

//     const emailInputEl = screen.getByPlaceholderText(/Email/i);

//     const testValue = 'test';

//     const change = fireEvent.change(emailInputEl, {
//       target: { value: testValue },
//     });

//     expect(emailInputEl).toBeInTheDocument();

//     expect(change).toBe(true);
//   });
//   it('password input should be rendered', () => {
//     render(<FormLogin />);

//     const passwordInputEl = screen.getByPlaceholderText('Mot de passe');
//     expect(passwordInputEl).toBeInTheDocument();
//   });

//   it('value of input should be rendered', () => {
//     render(<FormLogin />);

//     const valueInputEl = screen.getByPlaceholderText('Mot de passe');

//     expect(valueInputEl.textContent).toBe('');
//   });
//   it('button  should be disalbed', () => {
//     render(<FormLogin />);

//     const buttonDisalbed = screen.getByRole('button');

//     expect(buttonDisalbed).toBeDisabled();
//   });

//   it('error message in span should not be visible', () => {
//     render(<FormLogin />);

//     const errorEl = screen.getByTestId('error');

//     expect(errorEl).not.toBeVisible();
//   });

//   it('button  should be disalbed', () => {
//     render(<FormLogin />);

//     const buttonDisalbed = screen.getByRole('button');
//     const emailInputEl = screen.getByPlaceholderText(/Email/i);
//     const passwordInputEl = screen.getByPlaceholderText('Mot de passe');
//     const testValue = 'test';

//     fireEvent.change(emailInputEl, { target: { value: testValue } });

//     fireEvent.change(passwordInputEl, { target: { value: testValue } });

//     expect(buttonDisalbed).not.toBeDisabled();
//   });

//   test('user should be rendered after fetching', async () => {
//     render(<FormLogin />);
//     const buttonEl = screen.getByRole('button');
//     const emailInputEl = screen.getByPlaceholderText(/email/i);
//     const passwordInputEl = screen.getByPlaceholderText(/Mot de passe/i);

//     const testValue = 'test';

//     fireEvent.change(emailInputEl, { target: { value: testValue } });
//     fireEvent.change(passwordInputEl, { target: { value: testValue } });
//     fireEvent.click(buttonEl);

//     const userItem = await screen.queryByText('amelia.aissou@gmail.com');
//     console.log('userItem', userItem);

//     expect(userItem).not.toBeInTheDocument();
//   });
// });
