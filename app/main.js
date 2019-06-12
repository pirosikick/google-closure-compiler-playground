goog.module("app.run"); // 提供するオブジェクトの宣言
const sayHi = goog.require("app.sayHi"); // 必要とするオブジェクトの宣言

window.onload = () => sayHi();
