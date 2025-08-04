# HandwritingLodash

手写实现Lodash库的核心功能，使用TypeScript开发。

## 项目结构

```
src/
├── array.ts      // 数组相关函数
├── collection.ts // 集合相关函数
├── function.ts   // 函数相关工具
├── index.ts      // 入口文件
├── lang.ts       // 语言相关函数
├── object.ts     // 对象相关函数
├── string.ts     // 字符串相关函数
└── util.ts       // 实用工具函数
```

## 安装依赖

```bash
npm install
```

## 开发

```bash
npm run dev
```

## 构建

```bash
npm run build
```

## 已实现的函数

### Array
- uniq: 创建一个新数组，包含原数组中所有不重复的元素
- slice: 创建一个切片数组，从start位置开始到end位置结束

### Collection
- forEach: 遍历集合的元素，为每个元素执行iteratee函数
- filter: 创建一个新数组，这个数组包含通过predicate函数检查的所有元素

### Function
- bind: 创建一个函数，该函数调用func时，this绑定到指定的对象
- debounce: 创建一个函数，该函数延迟执行func直到等待wait毫秒后

### Lang
- isArray: 检查值是否为数组
- isObject: 检查值是否为对象
- isString: 检查值是否为字符串

### Object
- get: 获取对象的指定路径的值
- omit: 创建一个对象，忽略指定的属性

### String
- camelCase: 转换字符串为驼峰格式
- capitalize: 转换字符串为首字母大写
- endsWith: 检查字符串是否以给定的目标字符串结尾

### Util
- property: 创建一个函数，该函数返回第一个参数的属性值
- random: 创建一个函数，该函数返回一个随机数
- cloneDeep: 创建一个深拷贝的值