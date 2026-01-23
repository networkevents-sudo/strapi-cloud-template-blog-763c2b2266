'use strict';

/**
 * main-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-blog.main-blog');
