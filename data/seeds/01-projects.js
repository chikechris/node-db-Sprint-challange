
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('projects').insert([
    {
      project_name: 'Build a house',
      description: 'The house has be a 4 bedroom house'
    },
    { project_name: 'build a react app', completed: true },
    { project_name: 'build a model car', description: 'Has to be a two door coupe' }
  ])
}

