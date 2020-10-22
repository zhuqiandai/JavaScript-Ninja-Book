// 1. a
// 2. Object.defineProperty() 通过get，set创建闭包，实现私有变量
// 3. 第一句、第二句和第四句  通过proxy访问get，返回proxy设置的属性值
// 4. 第一句、第二句和第四句  proxy没有get方法，返回对象对应的属性值
