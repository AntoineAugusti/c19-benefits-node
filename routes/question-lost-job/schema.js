/* istanbul ignore file */

const Schema = {
  lost_job: {
    isIn: {
      errorMessage: 'errors.multipleChoiceGeneric',
      options: [['1', '2', '3']],
    },
  },
}

module.exports = {
  Schema,
}