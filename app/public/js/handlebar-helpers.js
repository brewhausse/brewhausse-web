var _  = require("underscore");
var register = function(Handlebars) {
    var helpers = {
        everyNth: function(context, every, options) {
            var fn = options.fn, inverse = options.inverse;
            var ret = "";
            if(context && context.length > 0) {
              for(var i=0, j=context.length; i<j; i++) {
                var modZero = i % every === 0;
                ret = ret + fn(_.extend({}, context[i], {
                  isModZero: modZero,
                  isModZeroNotFirst: modZero && i > 0,
                  isLast: i === context.length - 1,
                  json: every
                }));
              }
            } else {
              ret = inverse(this);
            }
            return ret;
          }
    };

    if (Handlebars && typeof Handlebars.registerHelper == "function") {
        for (var prop in helpers) {
            Handlebars.registerHelper(prop, helpers[prop]);
        }
    } else {
        // just return the helpers object if we can't register them
        return helpers;
    }

};

module.exports.register = register;
module.exports.helpers = register(null);