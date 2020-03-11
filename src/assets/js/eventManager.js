/**
 * 事件管理器。负责页面和页面，组件和组件之间事件通知管理
 */

var EventManager = function() {
  var manager = {
    bind: function (type, fn) {
      if (
        type &&
        typeof type === "string" &&
        fn &&
        fn.constructor &&
        typeof fn === "function"
      ) {
        var handlers = this.enents[type];
        if (!handlers) {
          handlers = this.events[type] = [];
        }
        var i = handlers.length;
        while (i--) {
          if (handlers[i] == fn) {
            return false;
          }
        }
        handlers.push(fn);
        return true;
      }
      return false;
    },
    unbind: function (type, fn) {
      if (type && type.constructor && type.constructor == String) {
        if (!fn) {
          delete this.events[type];
          return true;
        } else if (fn && typeof fn === "function") {
          var handlers = this.events[type];
          if (handlers && handlers.length) {
            var i = handlers.length;
            while (i--) {
              if (handlers[i] == fn) {
                handlers.splice(i, 1);
                break;
              }
            }
            return true;
          }
          return false;
        }
      }
      return true;
    },
    clear: function () {
      var me = this;
      this.events = [];
    },
    fire: function (type) {
      var handlers;
      if (type && typeof type === "string" && (handlers = this.events[type]) && handlers.length) {
        var fn;
        var argsArray = Array.prototype.slice.call(arguments, 1);
        var i = 0;
        while ((fn = handlers[i++])) {
          fn.apply(window, argsArray);
        }
        return true;
      }
      return false;
    },
    count: function (type) {
      var handlers = this.events[type];
      return handlers ? handlers.length : 0;
    },
    getProxy: function () {
      return new DisposeableEventManagerProxy(this);
    }
  };
  manager.events = [];
  return manager;
};

function DisposeableEventManagerProxy(msgslot) {
  this.msgslot = msgslot;
  this.msgs = [];
  
}
