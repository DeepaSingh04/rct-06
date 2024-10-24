// CustomSubmissionForm.js
import React, { useRef } from 'react';

const CustomSubmissionForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log("Form Data:", formData);
    alert(`Form Submitted: ${JSON.stringify(formData)}`);
  };

  return (
    <div>
      <h2>Custom Form Submission Handling</h2>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="Name" />
        <br /><br />
        
        <input ref={emailRef} type="email" placeholder="Email" />
        <br /><br />
        
        <input ref={passwordRef} type="password" placeholder="Password" />
        <br /><br />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomSubmissionForm;
