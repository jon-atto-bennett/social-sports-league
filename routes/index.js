var express = require('express')

var db = require('../db')

module.exports = {
  get: get
}

function get (req, res) {
  db.getTeams()
    .then(function (teams) {
      res.render('index', { teams: teams })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
