goog.module("app.sayHi"); // 提供するオブジェクトの宣言

const dom = goog.require("goog.dom");
const TagName = goog.require("goog.dom.TagName");

exports = function sayHi() {
  var newHeader = dom.createDom(
    TagName.H1,
    { style: "background-color:#EEE" },
    "Hello world!"
  );
  dom.appendChild(document.body, newHeader);
};
