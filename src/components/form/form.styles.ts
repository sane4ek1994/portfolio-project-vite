import styled from "styled-components";

const FormSection = styled.section`
  padding: 30px 0;
  background-color: blueviolet;
  border: 1px solid red;
`

const FormTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;
  border: 1px solid red;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  border: 1px solid red;
`

const Input = styled.input`
  margin-bottom: 10px;
  padding: 0 8px;
  color: red;
  background-color: dimgrey;
`
const Textarea = styled.textarea`
  width: 214px;
  padding: 0 8px;
  margin-bottom: 30px;
  color: red;
  resize: none;
  background-color: dimgrey;
`

export const s = {FormSection, FormTitle, Form, Input, Textarea}