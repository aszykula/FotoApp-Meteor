var assert = require('assert');

suite('Test albumu.', function() {

//testy jako server
    test('server #01 - initialization', function(done, server) {
        server.eval(function() {
            var testinit = Album.find().fetch();
            emit('testinit', testinit);
        }).once('testinit', function(testinit) {
            assert.equal(testinit.length, 0);
            done();
        });
    });

    test('server #02 - insert autor, link and opis - poprawne dane', function(done, server) {
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

        server.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('server #03 - insert autor, link and opis - bledne dane, link', function(done, server) {
        server.eval(function() {
            Album.insert({
                autor: 'Artur 3',
                link: 'obrazek.png',
                opis: 'logo',
            });
            var dane = Album.find({
                autor: 'Artur 3',
                link: 'obrazek.png',
                opis: 'logo'}).fetch();
            emit('dane', dane);
        });

        server.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('server #04 - insert autor, link and opis - bledne dane, autor', function(done, server) {
        server.eval(function() {
            Album.insert({
                autor: '',
                link: 'http://obrazek.png',
                opis: 'logo',
            });
            var dane = Album.find({
                autor: '',
                link: 'http://obrazek.png',
                opis: 'logo'}).fetch();
            emit('dane', dane);
        });

        server.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('server #05- insert autor, link - niekompletne dane', function(done, server) {
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

        server.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('server #06 - insert autor, opis - niekompletne dane', function(done, server) {
        server.eval(function() {
            Album.insert({
                autor: 'Artur 3',
                opis: 'logo',
            });
            var dane = Album.find({
                autor: 'Artur 3',
                opis: 'logo'}).fetch();
            emit('dane', dane);
        });

        server.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('server #07 - insert link, opis - niekompletne dane', function(done, server) {
        server.eval(function() {
            Album.insert({
                link: 'http://obrazek.png',
                opis: 'logo',
            });
            var dane = Album.find({
                link: 'http://obrazek.png',
                opis: 'logo'}).fetch();
            emit('dane', dane);
        });

        server.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('server #08 - insert link - niekompletne dane', function(done, server) {
        server.eval(function() {
            Album.insert({
                link: 'http://obrazek.png',
            });
            var dane = Album.find({
                link: 'http://obrazek.png'}).fetch();
            emit('dane', dane);
        });

        server.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('server #09 - insert autor - niekompletne dane', function(done, server) {
        server.eval(function() {
            Album.insert({
                autor: 'Artur 1',
            });
            var dane = Album.find({
                autor: 'Artur 1'}).fetch();
            emit('dane', dane);
        });

        server.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('server #10 - insert opis - niekompletne dane', function(done, server) {
        server.eval(function() {
            Album.insert({
                opis: 'logo',
            });
            var dane = Album.find({
                opis: 'logo'}).fetch();
            emit('dane', dane);
        });

        server.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });


//testy jako klient
    test('client #11 - insert autor, link and opis', function(done, client) {
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

    test('client #12 - insert autor, link and opis - poprawne dane', function(done, client) {
        client.eval(function() {
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

    test('client #13 - insert autor, link and opis - bledne dane, link', function(done, client) {
        client.eval(function() {
            Album.insert({
                autor: 'Artur 3',
                link: 'obrazek.png',
                opis: 'logo',
            });
            var dane = Album.find({
                autor: 'Artur 3',
                link: 'obrazek.png',
                opis: 'logo'}).fetch();
            emit('dane', dane);
        });

        client.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('client #14 - insert autor, link and opis - bledne dane, autor', function(done, client) {
        client.eval(function() {
            Album.insert({
                autor: '',
                link: 'http://obrazek.png',
                opis: 'logo',
            });
            var dane = Album.find({
                autor: '',
                link: 'http://obrazek.png',
                opis: 'logo'}).fetch();
            emit('dane', dane);
        });

        client.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('client #15 - insert autor, link - niekompletne dane', function(done, client) {
        client.eval(function() {
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
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('client #16 - insert autor, opis - niekompletne dane', function(done, client) {
        client.eval(function() {
            Album.insert({
                autor: 'Artur 3',
                opis: 'logo',
            });
            var dane = Album.find({
                autor: 'Artur 3',
                opis: 'logo'}).fetch();
            emit('dane', dane);
        });

        client.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('client #17 - insert link, opis - niekompletne dane', function(done, client) {
        client.eval(function() {
            Album.insert({
                link: 'http://obrazek.png',
                opis: 'logo',
            });
            var dane = Album.find({
                link: 'http://obrazek.png',
                opis: 'logo'}).fetch();
            emit('dane', dane);
        });

        client.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('client #18 - insert link - niekompletne dane', function(done, client) {
        client.eval(function() {
            Album.insert({
                link: 'http://obrazek.png',
            });
            var dane = Album.find({
                link: 'http://obrazek.png'}).fetch();
            emit('dane', dane);
        });

        client.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('client #19 - insert autor - niekompletne dane', function(done, client) {
        client.eval(function() {
            Album.insert({
                autor: 'Artur 1',
            });
            var dane = Album.find({
                autor: 'Artur 1'}).fetch();
            emit('dane', dane);
        });

        client.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

    test('client #20 - insert opis - niekompletne dane', function(done, client) {
        client.eval(function() {
            Album.insert({
                opis: 'logo',
            });
            var dane = Album.find({
                opis: 'logo'}).fetch();
            emit('dane', dane);
        });

        client.once('dane', function(dane) {
            assert.equal(dane.length, 1);
            done();
        });
    });

});
