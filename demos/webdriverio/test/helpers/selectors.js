/*
  CSS Selector attribute cheat sheet
  Attribute:
    a[href]
  Attribute equals:
    a[href="www.google.com"]
  Attribute starts with
    a[href^="www"]
  Attribute ends with
    a[href$="com"]
  Attribute contains substring
    a[href*=""]
*/

module.exports = {
    basicExamples: 'a#basic_example',
    getExampleButtonByTarget(url) { return `.list-group-item[href*="${url}"]`; },
}
