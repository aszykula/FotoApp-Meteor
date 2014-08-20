var assert = require('assert');

suite('Test albumu.', function() {

//testy jako server
  test('server - initialization', function(done, server) {
    server.eval(function() {
      var testinit = Album.find().fetch();
      emit('testinit', testinit);
    }).once('testinit', function(testinit) {
      assert.equal(testinit.length, 0);
      done();
    });
  });

  test('server - insert nick, link and note', function(done, server) {
    server.eval(function() {
        Album.insert({
          autor: 'Artur 3',
          link: 'http://obrazek.png',
          opis: 'logo',
        });
    var dane = Album.find({
          autor: 'Artur 3',
          link: 'http://obrazek.png',
          opis: 'logo'}).fetch();
    emit('dane', dane);
    });

    client.once('dane', function(dane) {
    assert.equal(dane.length, 1);
      done();
    });
  });
    
  test('server - insert nick, link', function(done, server) {
    server.eval(function() {
        Album.insert({
          autor: 'Artur 2',
          link: 'http://obrazek.png',
        });
    var dane = Album.find({
          autor: 'Artur 2',
          link: 'http://obrazek.png'}).fetch();
    emit('dane', dane);
    });

    client.once('dane', function(dane) {
    assert.equal(dane.length, 0);
      done();
    });
  });

  test('server - insert nick', function(done, server) {
    server.eval(function() {
        Album.insert({
          autor: 'Artur 1',
        });
    var dane = Album.find({
          autor: 'Artur 1'}).fetch();
    emit('dane', dane);
    });

    client.once('dane', function(dane) {
    assert.equal(dane.length, 0);
      done();
    });
  });


    //testy jako klient
  test('insert nick, link and note', function(done, client) {
    client.eval(function() {
        Album.insert({
          autor: 'Bart',
          link: 'http://pngimg.com/upload/car_logo_PNG1667.png',
          opis: 'logo',
        });
    var dane = Album.find({
          autor: 'Bart',
          link: 'http://pngimg.com/upload/car_logo_PNG1667.png',
          opis: 'logo'}).fetch();
    emit('dane', dane);
    });

    client.once('dane', function(dane) {
    assert.equal(dane.length, 1);
      done();
    });
  });
 });
