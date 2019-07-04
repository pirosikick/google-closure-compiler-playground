goog.module("app.hello"); // 提供するオブジェクトの宣言

const dom = goog.require("goog.dom");
const TagName = goog.require("goog.dom.TagName");

exports.sayHi = function sayHi() {
  var newHeader = dom.createDom(
    TagName.H1,
    { style: "background-color:#EEE" },
    "Hello world!"
  );
  dom.appendChild(document.body, newHeader);
};
