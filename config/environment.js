/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'duty-twist',
    environment: environment,
    contentSecurityPolicy: {
      'connect-src': "'self' api.backendless.com",
      'style-src': "'self' data: fonts.googleapis.com 'unsafe-inline'",
      'font-src': "'self' data: fonts.gstatic.com",
    },
    backendless: {
      applicationId: "A45F23CD-607E-BEFA-FF52-7E23D2D61300",
      secretKey: "00DD5751-3B66-11CF-FF10-8CDB468AC800",
      host: "https://api.backendless.com",
      namespace: "v1/data"
    },
    baseURL: '/',
    assetHost: "/",
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    moment: {
      includeLocales: ["en"]
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.baseURL = '/duty-twist/';
    ENV.assetHost = '/duty-twist/';
  }

  ENV.serviceWorker = {
    enabled: environment === 'production',
    includeRegistration: false,
    skipWaiting: true
  };

  ENV.forceHttps = environment === 'production';

  return ENV;
};
