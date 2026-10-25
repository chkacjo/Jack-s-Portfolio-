---
title: Firefly 簡單使用指南
published: 1970-01-02
pinned: true
description: "如何使用 Firefly 博客模板。"
image: "./cover.avif"
tags: ["Firefly", "博客", "Markdown", "指南"]
category: 博客指南
series: "Firefly 功能示例"
seriesOrder: 1
---



這個博客模板是基於 [Astro](https://astro.build/) 構建的。對於本指南中未提及的內容，您可以在 [Astro 文檔](https://docs.astro.build/) 中找到答案。

## 文章的 Front-matter

```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
description: 这是我新 Astro 博客的第一篇文章。
image: ./cover.jpg
tags: [前端, 开发]
category: 前端开发
draft: false
---
```




| 屬性          | 描述                                                                                                                                                                                                 |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | 文章標題。                                                                                                                                                                                          |
| `published`   | 文章發佈日期。                                                                                                                                                                                      |
| `updated`     | 文章更新日期。如果未設置，將默認使用發佈日期。                                                                                                                                                      |
| `pinned`      | 是否將此文章置頂在文章列表頂部。                                                                                                                                                                    |
| `description` | 文章的簡短描述。顯示在首頁上。                                                                                                                                                                      |
| `image`       | 文章封面圖片路徑。<br/>1. 以 `http://` 或 `https://` 開頭：使用網絡圖片<br/>2. 以 `/` 開頭：`public` 目錄中的圖片<br/>3. 不帶任何前綴：相對於 markdown 文件的路徑 |
| `tags`        | 文章標籤。                                                                                                                                                                                          |
| `category`    | 文章分類。                                                                                                                                                                                          |
| `lang`        | 文章語言代碼（如 `zh-CN`）。僅當文章語言與站點默認語言不同時設置。                                                                                                                                    |
| `licenseName` | 文章內容的許可證名稱。                                                                                                                                                                              |
| `licenseUrl`  | 文章內容的許可證鏈接。                                                                                                                                                                              |
| `author`      | 文章作者。                                                                                                                                                                                          |
| `sourceLink`  | 文章內容的來源鏈接或參考。                                                                                                                                                                          |
| `draft`       | 如果這篇文章仍是草稿，則不會顯示。                                                                                                                                                                  |
| `comment`     | 是否啟用此文章的評論功能。默認為 `true`。                                                                                                                                                           |
| `slug`        | 自定義文章 URL 路徑。如果不設置，將使用文件名作為 URL。                                                                                                                                              |
| `password`    | 文章密碼。設置後文章內容將被 AES-256-GCM 加密，訪客需輸入密碼才能查看。                                                                                                                              |
| `passwordHint`| 密碼提示。顯示在密碼輸入框上方，幫助訪客回憶密碼，也可以不加。                                                                                                                                                    |

## 文章文件的放置位置

您的文章文件應放置在 `src/content/posts/` 目錄中。您也可以創建子目錄來更好地組織您的文章和資源。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

## 自定義文章 URL (Slug)

### 什麼是 Slug？

Slug 是文章 URL 路徑的自定義部分。如果不設置 slug，系統將使用文件名作為 URL。

### Slug 使用示例

#### 示例 1：使用文件名作為 URL
```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
---
```
文件：`src/content/posts/my-first-blog-post.md`

URL：`/posts/my-first-blog-post`

#### 示例 2：自定義 Slug
```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
slug: hello-world
---
```
文件：`src/content/posts/my-first-blog-post.md`

URL：`/posts/hello-world`

#### 示例 3：其他語言文件名使用Slug
```yaml
---
title: 如何使用 Firefly 博客主题
published: 2023-09-09
slug: how-to-use-firefly-blog-theme
---
```
文件：`src/content/posts/如何使用Firefly博客主题.md`

URL：`/posts/how-to-use-firefly-blog-theme`

### Slug 使用建議

1. **使用英文和連字符**：`my-awesome-post` 而不是 `my awesome post`
2. **保持簡潔**：避免過長的 slug
3. **具有描述性**：讓 URL 能夠反映文章內容
4. **避免特殊字符**：只使用字母、數字和連字符
5. **保持一致性**：在整個博客中使用相似的命名模式

### 注意事項

- Slug 一旦設置併發布，建議不要隨意更改，以免影響 SEO 和已存在的鏈接
- 如果多個文章使用相同的 slug，後面的文章會覆蓋前面的
- Slug 會自動轉換為小寫