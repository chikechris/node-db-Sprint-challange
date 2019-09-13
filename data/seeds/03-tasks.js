
exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      description: 'wake up early',
      notes: 'go to sleep on time',
      project_id: 3,
      resource_id: 3
    },
    {
      description: 'make early appointments',
      notes: 'visit the site',
      project_id: 3,
      resource_id: 1
    },
    { description: 'feel confident', project_id: 3, resource_id: 4 },
    { description: 'saty strong', project_id: 1, resource_id: 2 },
    { description: 'be resourceful', project_id: 1, resource_id: 5 },
    {
      description: 'achieve your goals',
      project_id: 1,
      resource_id: 4,
      completed: true
    }
  ])
}

