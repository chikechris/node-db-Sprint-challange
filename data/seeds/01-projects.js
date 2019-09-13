exports.seed = function (knex) {
  // Inserts seed entries
  return knex('projects').insert([
    {
      project_name: 'build a house',
      project_description: 'The house has be a 4 bedroom house',
      completed: true
    },
    { project_name: 'build a react app',   completed: true },
    {
      project_name: 'build a model car',
      project_description: 'Has to be a two door coupe',
      completed: true
    }
  ])
}
