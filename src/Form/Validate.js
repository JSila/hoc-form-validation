import withState from 'recompose/withState'
import mapProps from 'recompose/mapProps'
import compose from 'recompose/compose'

import validate from '../validation/validate'

const Validate = (fields, rules) => compose(
  withState('errors', 'setErrors', {}),
  mapProps(({ setErrors, ...rest}) => ({
    ...rest,
    onSubmit: e => {
      console.log('lool');
      e.preventDefault()

      let form = fields.reduce((form, {name, selector}) => {
        form[name] = e.target.querySelector(selector).value
        return form
      }, {})

      return setErrors(() => validate(form, rules))
    }
  }))
)

export default Validate
