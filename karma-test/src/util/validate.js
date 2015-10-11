/**
 * @module validate
 */
define(function (require, exports, module) {
    'use strict';

    var validate = module.exports = {};

    /**
     * Validate IPV4 address.
     *
     * @param {String} ip
     * @returns {boolean} result of validation
     */
    validate.ipv4 = function(ip) {
        var pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return pattern.test(ip);
    };

});
