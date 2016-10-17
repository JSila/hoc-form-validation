import React, {PropTypes} from 'react';

const LoginForm = ({ onSubmit, errors }) => (
  <form onSubmit={onSubmit}>
    <div>
      <input type="text" id="username" name="username" placeholder="Username" /> {errors.username && <span>{errors.username}</span>}
    </div>
    <div>
      <input type="password" id="password" name="password" placeholder="Password" /> {errors.password && <span>{errors.password}</span>}
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
)

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default LoginForm
