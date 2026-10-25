---
title: Markdown 教程
published: 1970-01-01
pinned: false
description: 一個簡明的 Markdown 博客示例。
tags: [Markdown, 文章示例]
category: 文章示例
licenseName: "未授權"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
slug: markdown-tutorial
series: "Firefly 功能示例2"
seriesOrder: 1
---

這是一個展示如何編寫 Markdown 文件的示例。本文檔彙總了核心語法與常見擴展（GFM）。

- [塊級元素](#block-elements)
    - [段落與換行](#paragraphs-and-line-breaks)
    - [標題](#headers)
    - [引用](#blockquotes)
    - [列表](#lists)
    - [代碼塊](#code-blocks)
    - [分割線](#horizontal-rules)
    - [表格](#table)
- [內聯元素](#span-elements)
    - [鏈接](#links)
    - [強調](#emphasis)
    - [行內代碼](#code)
    - [圖片](#images)
    - [刪除線](#strikethrough)
- [雜項](#miscellaneous)
    - [自動鏈接](#automatic-links)
    - [反斜槓轉義](#backslash-escapes)
- [內聯 HTML](#inline-html)

<a id="block-elements"></a>
## 塊級元素

<a id="paragraphs-and-line-breaks"></a>
### 段落與換行

#### 段落

HTML 標籤：`<p>`

使用一個或多個空行分隔段落。（僅包含**空格**或**製表符**的行也視為空行。）

代碼：

    This will be
    inline.

    This is second paragraph.

預覽：

---

This will be
inline.

This is second paragraph.

---

#### 換行

HTML 標籤：`<br />`

在行末添加**兩個或更多空格**來產生換行。

代碼：

    This will be not
    inline.

預覽：

---

This will be not  
inline.

---

<a id="headers"></a>
### 標題

Markdown 支持兩種標題樣式：Setext 與 atx。

#### Setext

HTML 標籤：`<h1>`，`<h2>`

使用**等號 (=)** 表示 `<h1>`、使用**短橫線 (-)** 表示 `<h2>`，數量不限，作為“下劃線”。

代碼：

    This is an H1
    =============
    This is an H2
    -------------

預覽：

---

# This is an H1

## This is an H2

---

#### atx

HTML 標籤：`<h1>`，`<h2>`，`<h3>`，`<h4>`，`<h5>`，`<h6>`

在行首使用 1-6 個**井號 (#)**，對應 `<h1>` 至 `<h6>`。

代碼：

    # This is an H1
    ## This is an H2
    ###### This is an H6

預覽：

---

# This is an H1

## This is an H2

###### This is an H6

---

可選：你可以在行尾“閉合” atx 標題。末尾的井號數量**不必與**開頭一致。

代碼：

    # This is an H1 #
    ## This is an H2 ##
    ### This is an H3 ######

預覽：

---

# This is an H1

## This is an H2

### This is an H3

---

<a id="blockquotes"></a>
### 引用

HTML 標籤：`<blockquote>`

Markdown 使用郵件風格的 **>** 作為引用符號。若手動換行並在每行前加 >，顯示效果最佳。

代碼：

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    > consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    > Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
    >
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    > id sem consectetuer libero luctus adipiscing.

預覽：

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

Markdown 允許“偷懶”：在一個硬換行段落中，只在第一行前加 > 即可。

代碼：

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    id sem consectetuer libero luctus adipiscing.

預覽：

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

引用可以嵌套（引用中的引用），通過增加 > 層級實現。

代碼：

    > This is the first level of quoting.
    >
    > > This is nested blockquote.
    >
    > Back to the first level.

預覽：

---

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

---

引用內可包含其他 Markdown 元素，包括標題、列表與代碼塊。

代碼：

    > ## This is a header.
    >
    > 1.   This is the first list item.
    > 2.   This is the second list item.
    >
    > Here's some example code:
    >
    >     return shell_exec("echo $input | $markdown_script");

預覽：

---

> ## This is a header.
>
> 1.  This is the first list item.
> 2.  This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");

---

<a id="lists"></a>
### 列表

Markdown 支持有序（數字）與無序（圓點）列表。

#### 無序列表

HTML 標籤：`<ul>`

無序列表可使用 **星號 (\*)**、**加號 (+)** 或 **短橫線 (-)**。

代碼：

    *   Red
    *   Green
    *   Blue

預覽：

---

- Red
- Green
- Blue

---

等價於：

代碼：

    +   Red
    +   Green
    +   Blue

或者：

代碼：

    -   Red
    -   Green
    -   Blue

#### 有序列表

HTML 標籤：`<ol>`

有序列表使用數字加英文句點：

代碼：

    1.  Bird
    2.  McHale
    3.  Parish

預覽：

---

1.  Bird
2.  McHale
3.  Parish

---

注意：像下面這樣可能會“意外觸發”有序列表：

代碼：

    1986. What a great season.

預覽：

---

1986. What a great season.

---

你可以用**反斜槓轉義 (\\)** 句點：

代碼：

    1986\. What a great season.

預覽：

---

1986\. What a great season.

---

#### 列表中的縮進內容

##### 列表項裡的引用

在列表項內放置引用，需要將 > 符號整體縮進：

代碼：

    *   A list item with a blockquote:

        > This is a blockquote
        > inside a list item.

預覽：

---

- A list item with a blockquote:

  > This is a blockquote
  > inside a list item.

---

##### 列表項裡的代碼塊

在列表項內放置代碼塊，需要縮進兩層——**8 個空格**或**兩個 Tab**：

代碼：

    *   A list item with a code block:

            <code goes here>

預覽：

---

- A list item with a code block:

      <code goes here>

---

##### 嵌套列表

代碼：

    * A
      * A1
      * A2
    * B
    * C

預覽：

---

- A
  - A1
  - A2
- B
- C

---

<a id="code-blocks"></a>
### 代碼塊

HTML 標籤：`<pre>`

將代碼塊中的每行縮進至少**4 個空格**或**1 個製表符**。

代碼：

    This is a normal paragraph:

        This is a code block.

預覽：

---

This is a normal paragraph:

    This is a code block.

---

代碼塊會一直持續，直到遇到未縮進的行（或文末）。

在代碼塊內，**與號 (&)** 和尖括號 **(< >)** 會自動轉為 HTML 實體。

代碼：

        <div class="footer">
            &copy; 2004 Foo Corporation
        </div>

預覽：

---

    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>

---

下文的“圍欄代碼塊”和“語法高亮”屬於擴展語法，你也可以用它們來書寫代碼塊。

#### 圍欄代碼塊

使用成對的反引號圍起來（如下所示），就不需要四空格縮進了。

代碼：

    Here's an example:

    ```
    function test() {
      console.log("notice the blank line before this function?");
    }
    ```

預覽：

---

Here's an example:

```
function test() {
  console.log("notice the blank line before this function?");
}
```

---

#### 語法高亮

在圍欄代碼塊後添加可選的語言標識，即可啟用語法高亮（參見支持語言列表）。

代碼：

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

預覽：

---

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

---

<a id="horizontal-rules"></a>
### 分割線（水平線）

HTML 標籤：`<hr />`
一行中放置**三個或以上的短橫線 (-)、星號 (\*) 或下劃線 (\_)**。符號之間允許有空格。

代碼：

    * * *
    ***
    *****
    - - -
    ---------------------------------------
    ___

預覽：

---

---

---

---

---

---

---

---

<a id="table"></a>
### 表格

HTML 標籤：`<table>`

這是擴展語法。

用**豎線 (|)** 分隔列，用**短橫線 (-)** 分隔表頭，使用**冒號 (:)** 指定對齊方式。

兩側的**豎線 (|)** 與對齊可選。用於表頭分隔時，每列至少需要 **3 個短橫線**。

代碼：

```
| Left | Center | Right |
|:-----|:------:|------:|
|aaa   |bbb     |ccc    |
|ddd   |eee     |fff    |

 A | B
---|---
123|456


A |B
--|--
12|45
```

預覽：

---

| Left | Center | Right |
| :--- | :----: | ----: |
| aaa  |  bbb   |   ccc |
| ddd  |  eee   |   fff |

| A   | B   |
| --- | --- |
| 123 | 456 |

| A   | B   |
| --- | --- |
| 12  | 45  |

---

<a id="span-elements"></a>
## 內聯元素

<a id="links"></a>
### 鏈接

HTML 標籤：`<a>`

Markdown 支持兩種鏈接樣式：行內鏈接與引用式鏈接。

#### 行內鏈接

行內鏈接格式：`[文本](URL "标题")`

標題可選。

代碼：

    This is [an example](http://example.com/ "Title") inline link.

    [This link](http://example.net/) has no title attribute.

預覽：

---

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

---

如果引用同一站點的本地資源，可以使用相對路徑：

代碼：

    See my [About](/about/) page for details.

預覽：

---

See my [About](/about/) page for details.

---

#### 引用式鏈接

可以預定義鏈接引用。定義格式：`[id]: URL "标题"`

標題同樣可選。引用時使用：`[文本][id]`

代碼：

    [id]: http://example.com/  "Optional Title Here"
    This is [an example][id] reference-style link.

預覽：

---

[id]: http://example.com/ "Optional Title Here"

This is [an example][id] reference-style link.

---

說明：

- 方括號中包含鏈接標識（**不區分大小寫**，可在左側縮進最多三格空格）；
- 隨後是冒號；
- 再跟一個或多個空格（或 tab）；
- 然後是鏈接 URL；
- URL 可選地用尖括號包裹；
- 可選地跟隨標題屬性，用引號或圓括號包裹。

以下三種定義等價：

代碼：

    [foo]: http://example.com/  "Optional Title Here"
    [foo]: http://example.com/  'Optional Title Here'
    [foo]: http://example.com/  (Optional Title Here)
    [foo]: <http://example.com/>  "Optional Title Here"

如果使用空的方括號，則鏈接文本本身會作為名稱。

代碼：

    [Google]: http://google.com/
    [Google][]

預覽：

---

[Google]: http://google.com/

[Google][]

---

<a id="emphasis"></a>
### 強調

HTML 標籤：`<em>`，`<strong>`

Markdown 使用 **星號 (\*)** 或 **下劃線 (\_)** 表示強調。**一個分隔符**對應 `<em>`；**兩個分隔符**對應 `<strong>`。

代碼：

    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

預覽：

---

_single asterisks_

_single underscores_

**double asterisks**

**double underscores**

---

但如果兩側有空格，則會被視作普通字符而非強調語法。

你可以使用反斜槓進行轉義：

代碼：

    \*this text is surrounded by literal asterisks\*

預覽：

---

\*this text is surrounded by literal asterisks\*

---

<a id="code"></a>
### 行內代碼

HTML 標籤：`<code>`

用**反引號 (`)** 包裹。

代碼：

    Use the `printf()` function.

預覽：

---

Use the `printf()` function.

---

若行內代碼中需要包含反引號字符，可使用**多重反引號**作為定界符：

代碼：

    ``There is a literal backtick (`) here.``

預覽：

---

``There is a literal backtick (`) here.``

---

行內代碼兩側的定界符允許包含空格（開頭一個、結尾一個），方便在代碼起始或結尾放置反引號字符：

代碼：

    A single backtick in a code span: `` ` ``

    A backtick-delimited string in a code span: `` `foo` ``

預覽：

---

A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``

---

<a id="images"></a>
### 圖片

HTML 標籤：`<img />`

Markdown 的圖片語法與鏈接類似，支持行內與引用兩種方式。

#### 行內圖片

行內圖片語法：`![替代文本](URL "标题")`

標題可選。

代碼：

    ![Alt text](/path/to/img.jpg)

    ![Alt text](/path/to/img.jpg "Optional title")

預覽：

---

![Alt text](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp)

![Alt text](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "Optional title")

---

說明：

- 一個感嘆號 !；
- 後接方括號，放置圖片的替代文本；
- 再接圓括號，內含圖片 URL/路徑，及可選的標題（引號包裹）。

#### 引用式圖片

引用式圖片語法：`![替代文本][id]`

代碼：

    [img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp  "Optional title attribute"
    ![Alt text][img id]

預覽：

---

[img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "Optional title attribute"

![Alt text][img id]

---

<a id="strikethrough"></a>
### 刪除線

HTML 標籤：`<del>`

這是擴展語法。

GFM 增加了刪除線語法。

代碼：

```
~~Mistaken text.~~
```

預覽：

---

~~Mistaken text.~~

---

<a id="miscellaneous"></a>
## 雜項

<a id="automatic-links"></a>
### 自動鏈接

Markdown 支持一種便捷寫法來創建“自動鏈接”（URL 與郵箱地址）：只需用尖括號將其包住即可。

代碼：

    <http://example.com/>

    <address@example.com>

預覽：

---

<http://example.com/>

<address@example.com>

---

GFM 會自動識別標準 URL 並轉換為鏈接。

代碼：

```
https://github.com/emn178/markdown
```

預覽：

---

https://github.com/emn178/markdown

---

<a id="backslash-escapes"></a>
### 反斜槓轉義

Markdown 允許使用反斜槓來轉義那些本用於 Markdown 語法的特殊字符，使其按字面顯示。

代碼：

    \*literal asterisks\*

預覽：

---

\*literal asterisks\*

---

以下字符可通過反斜槓轉義以按字面量輸出：

Code:

    \   backslash
    `   backtick
    *   asterisk
    _   underscore
    {}  curly braces
    []  square brackets
    ()  parentheses
    #   hash mark
    +   plus sign
    -   minus sign (hyphen)
    .   dot
    !   exclamation mark

<a id="inline-html"></a>
## 內聯 HTML

對於 Markdown 語法未覆蓋的標記，直接使用原生 HTML 即可。無需特別聲明從 Markdown 切換到 HTML，直接寫標籤就行。

代碼：

    This is a regular paragraph.

    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>

    This is another regular paragraph.

預覽：

---

This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.

---

請注意：在**塊級 HTML 標籤**內不會處理 Markdown 語法。

與塊級標籤不同，在**行內級標籤**內會處理 Markdown 語法。

代碼：

    <span>**Work**</span>

    <div>
        **No Work**
    </div>

預覽：

---

<span>**Work**</span>

<div>
  **No Work**
</div>
***