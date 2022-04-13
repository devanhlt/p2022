'use strict';

/**
 * bookmaster service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bookmaster.bookmaster');
