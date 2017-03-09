
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {team_id: 99001, name: 'Monkey United', email: 'mu@socsport.com'},
        {team_id: 99002, name: 'Westy Hammers', email: 'westy@socsport.com'},
        {team_id: 99003, name: 'Chelski', email: 'chelski@socsport.com'},
        {team_id: 99004, name: 'Tootem Spuds', email: 'tootem@socsport.com'},
        {team_id: 99005, name: 'Aardvaark', email: 'aardy@socsport.com'},
        {team_id: 99006, name: 'Loverpill', email: 'loverpill@socsport.com'},
      ]);
    });
};
