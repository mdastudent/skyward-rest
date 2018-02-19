
const { objectify } = require('../lib/helpers').modifiers
const { compose }   = require('../lib/helpers').structures
const { ensure }    = require('../lib/helpers').traversers

const grabScores = tr => (tr && tr.children)
  ? tr.children.map(td => ensure(td, 0).get('data'))
  : []

const formScores = tr => ({
  scores: grabScores(tr)
})

module.exports = compose(
  objectify('strip'),
  formScores
)