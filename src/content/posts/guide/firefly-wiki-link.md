---
title: Firefly Wiki Link 內部鏈接示例
published: 1970-01-03
description: 在 Firefly 文章中使用 Obsidian 風格的 Wiki Link 內部鏈接，並自動生成文章鏈接卡片。
image: ""
tags: [Markdown, Obsidian, Wiki-Link, 文章示例]
category: 博客指南
slug: guide/firefly-wiki-link
series: "Firefly 功能示例"
seriesOrder: 3
---

Firefly 支持在 Markdown、MDX 文章中使用 Obsidian 風格的 Wiki Link 內部鏈接。鏈接目標填寫文章的 slug 或文件路徑，都不需要包含擴展名，具體匹配規則見下文「鏈接目標的三種寫法」。

## 文章鏈接卡片

`[[slug]]` 單獨成段時，會自動讀取目標文章的標題、描述、發佈時間、分類、標籤和封面，渲染為鏈接卡片：

```markdown
[[firefly]]

[[guide/index]]

[[markdown-extended]]
```

[[firefly]]

[[guide/index]]

[[markdown-extended]]

## 行內鏈接

`[[slug]]` 出現在正文中間時，渲染為普通鏈接，鏈接文字自動使用目標文章的標題

```markdown
请参阅 [[firefly]] 了解主题特性。
```

請參閱 [[firefly]] 瞭解主題特性。

## 自定義顯示標題

在 `|` 後填寫鏈接的顯示文字。行內鏈接會用它替換文章標題；單獨成段時依然渲染為卡片，卡片標題使用自定義文字，描述、時間、分類、標籤和封面仍然讀取目標文章：

```markdown
请参阅 [[firefly|主题介绍]] 了解主题特性。

[[firefly|Firefly 主题介绍]]
```

請參閱 [[firefly|主題介紹]] 瞭解主題特性。

[[firefly|Firefly 主題介紹]]

一個例外：如果 `|` 後的文字只是把鏈接目標又抄了一遍（`[[guide/index|index]]`），會被當作無效別名忽略，仍然顯示文章標題。Obsidian 在插入的鏈接時會自動補上這樣的別名，避免筆記裡顯示一長串路徑，這個例外就是為它準備的。

## 鏈接目標的三種寫法

用 Obsidian 管理文章時，把 `src/content/posts` 目錄本身作為 Obsidian 倉庫（vault）打開。下文提到的「倉庫根目錄」都指這個目錄，它正好也是 Firefly 解析鏈接路徑的起點。

鏈接目標按以下順序匹配：

| 寫法 | 示例 | 在 Obsidian 中 |
|---|---|---|
| frontmatter 的 `slug` | `[[firefly-wiki-link]]` | ✗ 不支持 |
| 文件路徑（相對倉庫根目錄） | `[[guide/firefly-layout-system]]` | ✓ 需改設置（推薦） |
| 裸文件名（倉庫內唯一時） | `[[firefly-layout-system]]` | ✓ 默認即是 |

### 第一種：slug

`slug` 寫法在 Obsidian 中不支持，`slug` 是 Firefly 自己的概念，Obsidian 不讀取 frontmatter 裡的 `slug`，所以按 slug 寫的鏈接在 Obsidian 裡既不會自動補全，也點不動，只有構建出的站點上能正常跳轉。如果你主要在 Obsidian 裡寫作，用下面兩種寫法。

### 第二種：文件路徑（推薦）

文件路徑寫法需要改 Obsidian 設置，在 `设置 → 文件与链接 → 链接 → 内部链接类型` 中選擇**基於倉庫根目錄的絕對路徑**，Obsidian 插入的鏈接才會帶上目錄：

```markdown
[[guide/firefly-layout-system|firefly-layout-system]]
```

[[guide/firefly-layout-system|firefly-layout-system]]

因為倉庫根目錄就是 `src/content/posts`，Obsidian 寫出的這個路徑和 Firefly 需要的路徑完全一致，不需要任何額外轉換。

上面這行末尾的 `|firefly-layout-system` 是 Obsidian 自動補的別名，Firefly 會忽略它，卡片標題仍然取文章的 title，除非你把它修改和文件名不一致，才會變成你修改後的別名。

內部鏈接類型下拉框裡的**基於當前筆記的相對路徑**只在同目錄內可用：它給同目錄文章生成的是裸文件名，能正常匹配；但跨目錄時會生成 `../` 前綴，Firefly 無法解析，鏈接會按原文顯示。

### 第三種：裸文件名

「內部鏈接類型」的默認值就是**儘可能簡短的形式**：只要文件名在整個倉庫裡唯一，Obsidian 插入的鏈接就只有文件名，不帶目錄。這種寫法不需要改任何設置，效果和寫完整路徑完全一致：

```markdown
[[firefly-layout-system]]
```

[[firefly-layout-system]]

文件名重名時這種寫法會失效，構建日誌裡會給出提示，改用完整文件路徑即可，所以推薦直接修改 Obsidian 內部鏈接類型設置為**基於倉庫根目錄的絕對路徑**，使用第二種文件路徑寫法，一勞永逸

## 鏈接到其他文章的標題

在文章 slug 後添加 `#标题`。帶標題錨點的鏈接始終渲染為普通鏈接：

[[code-examples#語法高亮|查看代碼塊語法高亮]]

[[guide/firefly-layout-system#相關鏈接|firefly-layout-system]]

```markdown
[[code-examples#语法高亮|查看代码块语法高亮]]

[[guide/firefly-layout-system#相关链接|firefly-layout-system]]
```

標題錨點使用與頁面標題相同的 slug 規則，因此中文、空格和大小寫都會按頁面實際生成的 ID 處理。

## 鏈接到本頁標題

省略文章 slug，只填寫標題即可鏈接到當前文章：

[[#本頁目標|跳轉到本頁目標]]

```markdown
[[#本页目标|跳转到本页目标]]
```

## 本頁目標

這是本頁 Wiki Link 指向的標題。

## 不支持附件嵌入

附件嵌入語法目前不會被轉換，會按原文顯示：

![[image.png]]

行內代碼和代碼塊中的 `[[firefly]]` 也不會被轉換。
