
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    { resource_name: 'read the plan', description: 'consult professionals' },
    { resource_name: 'do research' },
    {
      resource_name: 'visit the library',
      description: 'allocate enough time'
    },
    { resource_name: 'utilize google search', description: 'pay attention to advice' },
    { resource_name: 'plan' },
    { resource_name: 'blueprint' },
    { resource_name: 'auto-cad' }
  ])
}

