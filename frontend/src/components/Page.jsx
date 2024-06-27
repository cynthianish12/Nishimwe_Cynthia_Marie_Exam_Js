import React from 'react';

  return (
    <div className="page">
      <h1 className="title">fill the form</h1>
      <div className="modal-content">
        <button className="close-button" onClick={() => navigate('/home')}>X</button>
        <h2>General Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">title </label>
            <input type="text" id="title" />
          </div>
          <div className="form-group">
            <label htmlFor="fname">fname</label>
            <input type="text" id="fname" />
          </div>
          <div className="form-group">
            <label htmlFor="sname">sname</label>
            <input type="text" id="sname" />
          </div>
          <div className="form-group">
            <label htmlFor="position">position</label>
            <input type="text" id="position" />
          </div>
          <div className="form-group">
            <label htmlFor="company">company</label>
            <input type="text" id="company" />
          </div>
          <div className="form-group">
            <label htmlFor="arena">arena</label>
            <input type="text" id="arena" />
          </div>
          <div className="form-group">
            <label htmlFor="employees">employees</label>
            <input type="text" id="employees" />
          </div>
          <div className="form-group">
            <label htmlFor="street">street</label>
            <input type="text" id="street" />
          </div>
          <div className="form-group">
            <label htmlFor="info">info</label>
            <input type="text" id="info" />
          </div>
          <div className="form-group">
            <label htmlFor="code">code</label>
            <input type="text" id="code" />
          </div>
           <div className="form-group">
            <label htmlFor="number">number</label>
            <input type="text" id="number" />
          </div>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input type="text" id="email" />
          </div>
          <button type="submit" className="login-button"><a href="fetch.js">Register Badge</a></button>
          <button className='login-button'><a href="fetch.js">View the details</a></button>
        </form>
        <div className="modal-footer">
          <p>Don't have an account? <a href="#">Sign up</a></p>
          <p>Forgot your password? <a href="#">Reset</a></p>
        </div>
      </div>
    </div>
  );

export default Page;
