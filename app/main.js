goog.provide("app.run"); // 提供するオブジェクトの宣言

goog.require("app.sayHi"); // 必要とするオブジェクトの宣言

app.run = function() {
  this.sayHi();
};
