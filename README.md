Express Bootable Test Helper
============================

This little module will help you to write Tests for express-apps, which use bootable for configuration.

Install
-------

    npm install --save express-bootable-test-helper

Example
-------

**src/routes/index.js**: 

    module.exports = function() {
      this.get('/', function(req, res) {
        res.send('hello world')
      });
    }

**test/unit/routes/index.js**:

    describe('index route', function() {
      var 
        api,
        req,
        res,
        app = require('express-bootable-test-helper');

      beforeEach(function() {
        api = require('../../../src/routes/index.js');
        api.call(app);
        reqSpy = jasmine.createSpyObj('req', ['next']);
        resSpy = jasmine.createSpyObj('res', ['send']);
      });

      it('should respond with hello world', function() {
        app.routes.get['/'](reqSpy, resSpy);

        expect(resSpy.send).toHaveBeenCalledWith('hello world');
      });
    });