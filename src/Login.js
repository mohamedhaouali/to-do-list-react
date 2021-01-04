import React, { useState } from 'react';
 
function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/dashboard');
  }
 
  return (
    <div>
      Login<br /><br />
      <div class="col-sm-100">
        Adresse e-mail<br />
        <input type="email"  pattern=".+@globex.com" size="30" required class="form-control"  {...username} autoComplete="new-password" />
      </div>
      <div  class="col-sm-100" style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" class="form-control"{...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" class="btn btn-primary" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;