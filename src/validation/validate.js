import R from 'ramda'

const createPredicate = ([test, errorMsg]) => a => test(a) ? null : errorMsg
const createPredicates = R.map(createPredicate)
const runPredicates = ([input, validations]) => R.map(predFn => predFn(input), createPredicates(validations))

const validate = R.compose(
  R.map(R.head),
  R.filter(R.length),
  R.map(data => R.filter(R.identity, runPredicates(data))),
  R.mergeWithKey((k, l, r) => [l, r])
)

export default validate
