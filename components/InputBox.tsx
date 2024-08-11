"use client";
import { useState } from "react";

export default function InputBox({
  placeholder,
  type,
  error,
  autoFocus,
  id,
  name,
  list,
}: {
  placeholder: string;
  type: string;
  error: string;
  autoFocus: boolean;
  id: string;
  name: string;
  list: string;
}) {
  const [focus, setFocus] = useState(false);

  return (
    <div className="auth__container__left__form__input">
      <div className="auth__container__left__form__input__header">
        {error != "" ? (
          <div className="auth__container__left__form__input__header__label">
            {placeholder}
          </div>
        ) : focus ? (
          <div className="auth__container__left__form__input__header__label">
            {placeholder}
          </div>
        ) : null}
        <div className="auth__container__left__form__input__header__error">
          {error}
        </div>
      </div>
      <input
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
        className="auth__container__left__form__input__field"
        id={id ? id : placeholder}
        list={list}
        name={name ? name : placeholder}
        placeholder={placeholder}
        type={type}
        onBlur={() => {
          setFocus(false);
        }}
        // onChange={onChange}
        onFocus={() => {
          setFocus(true);
        }}
        // onKeyDown={onKeyDown}
      />
    </div>
  );
}
