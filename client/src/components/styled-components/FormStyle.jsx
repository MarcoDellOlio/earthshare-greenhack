import styled from 'styled-components'


export const FormWrapper = styled.div`

  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 440px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;

`

export const FormHeader = styled.header`

padding-top: 32px;
padding-bottom: 32px;
`

export const FormHeading = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`
export const FormBody = styled.form`
    padding-right: 32px;
    padding-left: 32px;
`
export const FormField = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 20px;
  }

  &:last-of-type {
    text-align: center;
  }
`

export const FormInput = styled.input`
padding: 7px 0;
width: 100%;
font-family: inherit;
font-size: 18px;
border-top: 0;
border-right: 0;
border-bottom: 1px solid #ddd;
border-left: 0;
transition: border-bottom-color .25s ease-in;
border-radius: 5px;
&:focus {
  border-bottom-color: #ff9a00;
  outline: 0;
}
`

export const FormButton = styled.button`

  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #63a0c8;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);
  &:hover {
    background: #45799b;
  }

`
export const FormInputButton = styled.input`
display: block;
width: 100%;
padding: 12px 0;
font-family: inherit;
font-size: 14px;
font-weight: 700;
color: #fff;
background-color: rgba(0, 255, 255, .25);
border: 0;
border-radius: 5px;
box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
cursor: pointer;
transition: all .25s cubic-bezier(.02, .01, .47, 1);

&:hover {
  box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
  transform: translate(0, -5px);
}
`

export const UserFormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const TextArea = styled.textarea`
  width: 100%;
`

export default {
  TextArea, UserFormContainer, FormWrapper, FormHeader, FormHeading, FormBody, FormField, FormInput, FormButton, FormInputButton
}