// DynamicFocusForm.js
import React, { useRef } from 'react';

const DynamicFocusForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const focusInput = (inputRef) => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Dynamic Form Input Focus</h2>
      <form>
        <input ref={nameRef} type="text" placeholder="Enter your name" />
        <button type="button" onClick={() => focusInput(emailRef)}>Focus Email</button>
        <br /><br />
        
        <input ref={emailRef} type="email" placeholder="Enter your email" />
        <button type="button" onClick={() => focusInput(passwordRef)}>Focus Password</button>
        <br /><br />
        
        <input ref={passwordRef} type="password" placeholder="Enter your password" />
        <button type="button" onClick={() => focusInput(nameRef)}>Focus Name</button>
      </form>
    </div>
  );
};

export default DynamicFocusForm;
