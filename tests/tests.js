var assert = require('assert');

suite('Test albumu.', function() {


  test('server initialization', function(done, server) {
    server.eval(function() {
      var tests = Album.find().fetch();
      emit('tests', tests);
    }).once('tests', function(tests) {
      assert.equal(tests.length, 0);
      done();
    });
  });

  test('insert nick, link and note', function(done, client) {
    client.eval(function() {
        Album.insert({
          autor: 'Jan',
          link: 'http://pngimg.com/upload/car_logo_PNG1667.png',
          opis: 'logo VW',
        });
    var tests = Album.find({
          autor: 'Jan',
          link: 'http://pngimg.com/upload/car_logo_PNG1667.png',
          opis: 'logo VW'}).fetch();
    emit('tests', tests);
    });

    client.once('tests', function(tests) {
    assert.equal(tests.length, 1);
      done();
    });
  });
 });
