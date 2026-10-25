---
title: Firefly 代碼塊示例
published: 1970-01-03
pinned: false
description: 在Firefly中使用表達性代碼的代碼塊在 Markdown 中的外觀。
tags: [Markdown, Firefly]
category: 文章示例
image: ./images/firefly3.avif
slug: code-examples
series: "Firefly 功能示例2"
seriesOrder: 5
---

在這裡，我們將探索如何使用 [Expressive Code](https://expressive-code.com/) 展示代碼塊。提供的示例基於官方文檔，您可以參考以獲取更多詳細信息。

## 表達性代碼

### 語法高亮

[語法高亮](https://expressive-code.com/key-features/syntax-highlighting/)

#### 常規語法高亮

```js
console.log('此代码有语法高亮!')
```

#### 渲染 ANSI 轉義序列

```ansi
[1;4mStandard ANSI colors:[0m
- Dimmed:     [2;30m Black [2;31m Red [2;32m Green [2;33m Yellow [2;34m Blue [2;35m Magenta [2;36m Cyan [2;37m White [0m
- Foreground: [30m Black [31m Red [32m Green [33m Yellow [34m Blue [35m Magenta [36m Cyan [37m White [0m
- Background: [40m Black [41m Red [42m Green [43m Yellow [44m Blue [45m Magenta [46m Cyan [47m White [0m
- Reversed:   [7;30m Black [7;31m Red [7;32m Green [7;33m Yellow [7;34m Blue [7;35m Magenta [7;36m Cyan [7;37m White [0m

[1;4m8-bit colors (showing colors 160-171 as an example):[0m
- Dimmed:     [2;38;5;160m 160 [2;38;5;161m 161 [2;38;5;162m 162 [2;38;5;163m 163 [2;38;5;164m 164 [2;38;5;165m 165 [2;38;5;166m 166 [2;38;5;167m 167 [2;38;5;168m 168 [2;38;5;169m 169 [2;38;5;170m 170 [2;38;5;171m 171 [0m
- Foreground: [38;5;160m 160 [38;5;161m 161 [38;5;162m 162 [38;5;163m 163 [38;5;164m 164 [38;5;165m 165 [38;5;166m 166 [38;5;167m 167 [38;5;168m 168 [38;5;169m 169 [38;5;170m 170 [38;5;171m 171 [0m
- Background: [48;5;160m 160 [48;5;161m 161 [48;5;162m 162 [48;5;163m 163 [48;5;164m 164 [48;5;165m 165 [48;5;166m 166 [48;5;167m 167 [48;5;168m 168 [48;5;169m 169 [48;5;170m 170 [48;5;171m 171 [0m
- Reversed:   [7;38;5;160m 160 [7;38;5;161m 161 [7;38;5;162m 162 [7;38;5;163m 163 [7;38;5;164m 164 [7;38;5;165m 165 [7;38;5;166m 166 [7;38;5;167m 167 [7;38;5;168m 168 [7;38;5;169m 169 [7;38;5;170m 170 [7;38;5;171m 171 [0m

[1;4m24-bit colors (full RGB):[0m
- Dimmed:     [2;38;2;34;139;34m ForestGreen - RGB(34,139,34) [2;38;2;102;51;153m RebeccaPurple - RGB(102,51,153) [0m
- Foreground: [38;2;34;139;34m ForestGreen - RGB(34,139,34) [38;2;102;51;153m RebeccaPurple - RGB(102,51,153) [0m
- Background: [48;2;34;139;34m ForestGreen - RGB(34,139,34) [48;2;102;51;153m RebeccaPurple - RGB(102,51,153) [0m
- Reversed:   [7;38;2;34;139;34m ForestGreen - RGB(34,139,34) [7;38;2;102;51;153m RebeccaPurple - RGB(102,51,153) [0m

[1;4mFont styles:[0m
- Default
- [1mBold[0m
- [2mDimmed[0m
- [3mItalic[0m
- [4mUnderline[0m
- [7mReversed[0m
- [9mStrikethrough[0m
```

### 編輯器和終端框架

[編輯器和終端框架](https://expressive-code.com/key-features/frames/)

#### 代碼編輯器框架

```js title="my-test-file.js"
console.log('标题属性示例')
```

---

```html
<!-- src/content/index.html -->
<div>文件名注释示例</div>
```

#### 終端框架

```bash
echo "此终端框架没有标题"
```

---

```powershell title="PowerShell 终端示例"
Write-Output "这个有标题!"
```

#### 覆蓋框架類型

```sh frame="none"
echo "看，没有框架!"
```

---

```ps frame="code" title="PowerShell Profile.ps1"
# 如果不覆盖，这将是一个终端框架
function Watch-Tail { Get-Content -Tail 20 -Wait $args }
New-Alias tail Watch-Tail
```

### 文本和行標記

[文本和行標記](https://expressive-code.com/key-features/text-markers/)

#### 標記整行和行範圍

```js {1, 4, 7-8}
// 第1行 - 通过行号定位
// 第2行
// 第3行
// 第4行 - 通过行号定位
// 第5行
// 第6行
// 第7行 - 通过范围 "7-8" 定位
// 第8行 - 通过范围 "7-8" 定位
```

#### 選擇行標記類型 (mark, ins, del)

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
  console.log('此行标记为已删除')
  // 此行和下一行标记为已插入
  console.log('这是第二个插入行')

  return '此行使用中性默认标记类型'
}
```

#### 為行標記添加標籤

```jsx {"1":5} del={"2":7-8} ins={"3":10-12}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}
  value={value}
  className={buttonClassName}
  disabled={disabled}
  active={active}
>
  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

#### 在單獨行上添加長標籤

```jsx {"1. Provide the value prop here:":5-6} del={"2. Remove the disabled and active states:":8-10} ins={"3. Add this to render the children inside the button:":12-15}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}

  value={value}
  className={buttonClassName}

  disabled={disabled}
  active={active}
>

  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

#### 使用類似 diff 的語法

```diff
+此行将标记为已插入
-此行将标记为已删除
这是常规行
```

---

```diff
--- a/README.md
+++ b/README.md
@@ -1,3 +1,4 @@
+this is an actual diff file
-all contents will remain unmodified
 no whitespace will be removed either
```

#### 結合語法高亮和類似 diff 的語法

```diff lang="js"
  function thisIsJavaScript() {
    // 整个块都会以 JavaScript 高亮显示，
    // 并且我们仍然可以为其添加 diff 标记！
-   console.log('要删除的旧代码')
+   console.log('新的闪亮代码！')
  }
```

#### 標記行內的單獨文本

```js "given text"
function demo() {
  // 标记行内的任何给定文本
  return '支持给定文本的多个匹配项';
}
```

#### 正則表達式

```ts /ye[sp]/
console.log('单词 yes 和 yep 将被标记。')
```

#### 轉義正斜槓

```sh /\/ho.*\//
echo "Test" > /home/test.txt
```

#### 選擇內聯標記類型 (mark, ins, del)

```js "return true;" ins="inserted" del="deleted"
function demo() {
  console.log('这些是插入和删除的标记类型');
  // return 语句使用默认标记类型
  return true;
}
```

### 自動換行

[自動換行](https://expressive-code.com/key-features/word-wrap/)

#### 為每個塊配置自動換行

```js wrap
// 启用换行的示例
function getLongString() {
  return '这是一个非常长的字符串，除非容器极宽，否则很可能无法适应可用空间'
}
```

---

```js wrap=false
// wrap=false 的示例
function getLongString() {
  return '这是一个非常长的字符串，除非容器极宽，否则很可能无法适应可用空间'
}
```

#### 配置換行的縮進

```js wrap preserveIndent
// preserveIndent 示例（默认启用）
function getLongString() {
  return '这是一个非常长的字符串，除非容器极宽，否则很可能无法适应可用空间'
}
```

---

```js wrap preserveIndent=false
// preserveIndent=false 的示例
function getLongString() {
  return '这是一个非常长的字符串，除非容器极宽，否则很可能无法适应可用空间'
}
```

## 可摺疊部分

[可摺疊部分](https://expressive-code.com/plugins/collapsible-sections/)

```js collapse={1-5, 12-14, 21-24}
// 所有这些样板设置代码将被折叠
import { someBoilerplateEngine } from '@example/some-boilerplate'
import { evenMoreBoilerplate } from '@example/even-more-boilerplate'

const engine = someBoilerplateEngine(evenMoreBoilerplate())

// 这部分代码默认可见
engine.doSomething(1, 2, 3, calcFn)

function calcFn() {
  // 您可以有多个折叠部分
  const a = 1
  const b = 2
  const c = a + b

  // 这将保持可见
  console.log(`计算结果: ${a} + ${b} = ${c}`)
  return c
}

// 直到块末尾的所有代码将再次被折叠
engine.closeConnection()
engine.freeMemory()
engine.shutdown({ reason: '示例样板代码结束' })
```

## 行號

[行號](https://expressive-code.com/plugins/line-numbers/)

### 為每個塊顯示行號

```js showLineNumbers
// 此代码块将显示行号
console.log('来自第2行的问候!')
console.log('我在第3行')
```

---

```js showLineNumbers=false
// 此块禁用行号
console.log('你好?')
console.log('抱歉，你知道我在第几行吗?')
```

### 更改起始行號

```js showLineNumbers startLineNumber=5
console.log('来自第5行的问候!')
console.log('我在第6行')
```

## Tab 代碼塊

由 [rehype-code-group](https://github.com/ITZSHOAIB/rehype-code-group) 提供，語法與 [VitePress 代碼組](https://vitepress.dev/guide/markdown#code-groups) 一致：用 `::: code-group labels=[...]` 包裹多個代碼塊，即可合併成一組標籤頁。

> [!NOTE]
> `labels=[...]` 中的標籤按順序對應組內的代碼塊，用英文逗號分隔；`:::` 與 `code-group` 之間的空格不能省略。

### 基本用法

````markdown
::: code-group labels=[code.js, code.py, code.html]

```js
export function greet(name) {
  return `Hello, ${name}!`;
}
```

```py
def greet(name):
    return f"Hello, {name}!"
```

```html
<p>Hello, world!</p>
```

:::
````

渲染效果：

::: code-group labels=[code.js, code.py, code.html]

```js
export function greet(name) {
  return `Hello, ${name}!`;
}
```

```py
def greet(name):
    return f"Hello, {name}!"
```

```html
<p>Hello, world!</p>
```

:::

### 標籤中使用 Emoji

標籤支持 [emoji 短代碼](https://github.com/omnidan/node-emoji#readme)，構建時會自動轉換成 emoji：

````markdown
::: code-group labels=[:package: npm, :package: pnpm, :yarn: yarn]
````

::: code-group labels=[:package: npm, :package: pnpm, :yarn: yarn]

```bash
npm create astro@latest
```

```bash
pnpm create astro@latest
```

```bash
yarn create astro
```

:::

### 與其他代碼塊特性組合

組內仍是普通的 Expressive Code 代碼塊，標題、行號、行標記、摺疊、終端框架等特性都可以照常使用。

::: code-group labels=[配置文件, 終端, 摺疊]

```js title="astro.config.mjs" showLineNumbers {2} ins={3}
export default {
  theme: "firefly",
  codeGroup: true,
};
```

```bash title="部署"
pnpm build && pnpm preview
```

```js collapse={1-3}
// 这三行默认折叠
import { a } from "a";
import { b } from "b";

console.log(a, b);
```

:::

### 不止是代碼塊

標籤頁內可以放任意內容，例如文字、列表或圖片：

::: code-group labels=[說明, 列表]

這是一段普通的段落內容。

- 列表項一
- 列表項二

:::

> [!TIP]
> 標籤欄在構建期生成，默認展開第一項；支持鼠標點擊與鍵盤 <kbd>←</kbd> / <kbd>→</kbd> / <kbd>Home</kbd> / <kbd>End</kbd> 切換。

### 在提醒框內使用（MDX 組件）

`::: code-group` 和 `::: tip` 等 Docusaurus 風格提醒框都使用 `:::` 容器語法，而 micromark-directive 規定父子容器的冒號數必須不同，因此 `::: code-group` **無法嵌套在 `::: tip` 等提醒框內**（整塊會失效）。

這種情況改用 MDX 組件 [`TabGroup`](@/components/common/TabGroup.svelte)：MDX 組件不經過 `:::` 指令解析，在提醒框內外都能正常使用，也方便日後擴展更多 UI 組件。把文章後綴改為 `.mdx`，從統一入口 [`@/components/firefly-mdx`](@/components/firefly-mdx.ts) 引入（可一次引入多個組件）：

````mdx
import { TabGroup } from "@/components/firefly-mdx";

:::tip

<TabGroup labels={["test.js", "test.py"]} client:load>
  ```js
  console.log(1)
  ```

  ```py
  print("hello world")
  ```
</TabGroup>

:::
````

:::tip
- `labels` 數組給每個代碼塊聲明標籤，順序一一對應
- 組件用 `client:load` 激活標籤切換
:::
