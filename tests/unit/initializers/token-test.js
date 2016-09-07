import Ember from 'ember';
import TokenInitializer from 'sugar-portal/initializers/token';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | token', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  TokenInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
