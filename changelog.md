# 更新日志
## v1.2.0（2025-08-04）
### 新功能
- 新增对`命名空间代码块嵌套`的支持
- 新增对`解构语法`的支持
- 新增对`箭头函数`的支持
- 新增对`do-while`的支持
- 前端新增`更新日志`弹窗

### 功能优化
- 优化`goto`语句混淆逻辑
- 优化函数、字符串、数组、变量混淆的逻辑
- 数字混淆加入常量表达式
- 优化前端UI

### Bug修复
- 修复`抽象方法或接口方法`被混淆的BUG
- 修复特定场景下`while`会死循环的BUG

---
## v1.1.5（2025-07-30）
### 功能优化
- 调整字符串相关配置文件，以减小加密文件体积
- 在加密后的代码中添加`error_reporting(0)`语句
- 优化对 PHP 8 版本的兼容性支持
### Bug修复
- 优化文件类型判断逻辑
- 修复特定场景下`超全局变量`引用错误问题

---
## v1.1.0（2025-07-27）
### 新功能
- 新增数组混淆，增加混淆强度
- 实现goto语法混淆功能
- 新增「运行限制」配置选项

### 功能优化
- 优化全局错误处理机制
- 重构字符串混淆逻辑，增强混淆强度

### Bug修复
- 修复特定场景下函数调用报错

---

## v1.0.0（2025-07-24）
### 新功能
- MurkPHP正式上线发布

---

### 交流与支持
如有功能建议或问题反馈，欢迎通过以下渠道联系我
> - QQ交流群：[809513269](https://qun.qq.com/universal-share/share?ac=1&authKey=Uhprl8Pe3igXsFCXvdMK2m12fmtYLe%2FcYQFgVIOU0ZhKOg2XOGwoKHoYJWwTjsWo&busi_data=eyJncm91cENvZGUiOiI4MDk1MTMyNjkiLCJ0b2tlbiI6IkxXbDk2YlorNWp6b1h5a1A4c1FaQ1pwUWYvcTB1RzVIR1dpWDJlTW9nbWVubVc0b1UvTCtaSjZGcDlINmd3TGwiLCJ1aW4iOiIyNzcyNjU1OTQ2In0%3D&data=v5_MglrZ-1MaiIdHNk2cThwYNIwTS-fgez8gIaf-WjPn15CeAB5wck5Wkx1irhcczblMcG0xvbK5w9ukFISexg&svctype=4&tempid=h5_group_info)
> - 反馈邮箱：xiaojieapi@vip.qq.com