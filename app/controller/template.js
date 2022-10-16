'use strict';

const Controller = require('egg').Controller;
const mongo = require('../utils/mongo');

class TemplateController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    const data = await mongo().query('template');
    ctx.body = data;
  }
}

module.exports = TemplateController;
