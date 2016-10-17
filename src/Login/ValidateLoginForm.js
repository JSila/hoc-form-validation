import setDisplayName from 'recompose/setDisplayName'
import wrapDisplayName from 'recompose/wrapDisplayName'

import LoginForm from './LoginForm'

import Validate from '../Form/Validate'

import isRequired from '../validation/isRequired'
import hasMinLength from '../validation/hasMinLength'

const rules = {
  username: [
    [isRequired, 'Username is required']
  ],
  password: [
    [isRequired, 'Password is required'],
    [hasMinLength(6), 'Password is too short']
  ]
}

const fields = [
  {name: 'username', selector: '#username'},
  {name: 'password', selector: '#password'},
]

const ValidateLoginForm = Validate(fields, rules)(LoginForm)

setDisplayName(wrapDisplayName(LoginForm.displayName, 'Validate'))(ValidateLoginForm)

export default ValidateLoginForm
