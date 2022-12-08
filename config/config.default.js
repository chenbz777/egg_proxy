/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1670494068564_8826';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 关闭crsf,开启跨域
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [],
  };
  // 允许跨域方法
  config.cors = {
    origin: '*',
    allowMethods: 'GET, PUT,  POST, DELETE, PATCH',
  };

  // 参数校验
  config.validate = {
    convert: true,
    widelyUndefined: true,
  };

  return {
    ...config,
    ...userConfig,
  };
};
