goog.provide("app.sayHi"); // 提供するオブジェクトの宣言

goog.require("goog.dom");
goog.require("goog.dom.TagName");

app.sayHi = function sayHi() {
  var newHeader = goog.dom.createDom(
    goog.dom.TagName.H1,
    { style: "background-color:#EEE" },
    "Hello world!"
  );
  goog.dom.appendChild(document.body, newHeader);
};
