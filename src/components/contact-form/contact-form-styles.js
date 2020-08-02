import styled from "@emotion/styled";

export const FormWrapper = styled.section`
  display: flex;
  justify-content: flex-start;

  h2 {
    color: #fff;
    padding-right: 50px;
  }

  input[type="text"],
  textarea {
    background: #333;
    border: none;
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    font-style: italic;
    color: #fff;
  }
  input[type="text"]:focus,
  textarea:focus {
    box-shadow: none;
  }
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #909090;
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #909090;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #909090;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #909090;
  }
  form {
    width: 60%;
    max-width: 400px;

    @media (max-width: 500px) {
      width: 90%;
    }
  }
  input[type="text"] {
    height: 40px;
    line-height: 40px;
    padding: 0 19px;
    width: 100%;
    margin-bottom: 15px;
  }

  textarea {
    padding: 15px 19px;
    width: 100%;
    height: 120px;
    resize: none;
  }

  input[type="text"].error,
  textarea.error {
    border-color: red;
  }
  .note {
    font-size: 10px;
    color: #333;
    line-height: 13px;
    margin-bottom: 10px;
    margin-right: 30px;
  }
  .note span {
    font-size: 12px;
    color: #660000;
    font-weight: bold;
  }
  input[type="submit"] {
    border: 0;
    height: 40px;
    width: 100px;
    text-transform: uppercase;
    background-color: #000;
    color: #fff;
    border: 1px solid #fff;
    font-size: 14px;
    margin: 30px 0 0;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #333;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 40px #333 inset !important;
    -webkit-text-fill-color: #fff;
    color: #fff !important;
    appearance: none;
  }

  .hidden {
    display: none;
  }
`;
