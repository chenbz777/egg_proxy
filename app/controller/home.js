'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg_proxy';
  }

  async proxy() {
    const { ctx } = this;

    /**
     * @param user {object} 用户对象
     */
    const reqData = ctx.request.body;

    // 数据格式
    const rules = {
      url: {
        type: 'string',
        required: true,
        desc: '请求地址',
      },
      method: {
        type: 'string',
        required: true,
        desc: '请求类型 GET POST PUT DELETE',
      },
      data: {
        type: 'object',
        required: false,
        desc: '参数',
      },
      headers: {
        type: 'object',
        required: false,
        desc: '请求头',
      },
    };

    // 拿到验证结果
    const validateError = this.app.validator.validate(rules, reqData);
    if (validateError) {
      // 参数校验错误
      ctx.status = 400;
      ctx.body = { validateError };

      // 验证不通过时，阻止后面的代码执行
      return false;
    }

    const { url = '', method = 'GET', data = {}, headers = {} } = ctx.request.body;


    try {
      const res = await ctx.curl(url, {
        contentType: 'json',
        dataType: 'json',
        method,
        data,
        headers,
        timeout: 6 * 1000,
      })

      ctx.status = res.status;
      ctx.body = res.data;
    } catch (e) {
      ctx.status = e.status;
      ctx.body = e.data;
    }
  }
}

module.exports = HomeController;
