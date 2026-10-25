---
title: "示例項目"
slug: example-project
published: 1970-01-01
draft: false
order: 100
description: "本文檔介紹項目集合的 Frontmatter 字段與狀態鍵值，供你在 src/content/projects/ 下編寫項目時參考。"
image: ""
status: "planning"
tags:
  - 文檔
  - 指南
---

## 項目展示頁使用指南

在 `src/content/projects/` 下新建一個 `.md` 或 `.mdx` 文件即可創建一個項目。**正文就是項目 README**，渲染在詳情頁底部；**frontmatter** 裡的字段則用於列表卡片與詳情頁頂部展示。

## Frontmatter 字段

| 字段 | 類型 | 說明 |
|---|---|---|
| `title` | string | 必填。項目名稱。 |
| `slug` | string | 可選，和文章一樣使用。 |
| `published` | date | 必填。發佈/更新日期，如 `2025-10-01`。用於排序（配合 `order`）。 |
| `draft` | boolean | 可選，默認 `false`。設為 `true` 時生產構建會隱藏該頁，預覽可見。 |
| `order` | number | 可選。手動排序權重，**越大越靠前**；未設置則按 `published` 降序。 |
| `description` | string | 可選。卡片簡介 + 詳情頁描述。 |
| `image` | string | 可選。封面圖。支持完整 URL、公共根路徑（`/images/xxx.png`）、相對路徑（相對本文件目錄，如 `images/xxx.png`）。留空則不顯示封面。 |
| `tags` | string[] | 可選。標籤，列表頁與詳情頁顯示為 `#标签`。 |
| `link` | array | 可選。外鏈按鈕數組：`{ label, icon, value }`。`icon` 可用 astro-icon 名（如 `fa7-brands:github`）、圖片 URL，或留空用 `label` 首字母。 |
| `status` | string | 可選。項目狀態，用標準 key（見下表）。 |
| `lang` | string | 可選。頁面語言，如 `zh_CN`。 |

### 完整示例

````yaml
---
title: "Firefly"
slug: firefly
published: 2025-10-01
draft: false
order: 100
description: "一个功能丰富的开源博客主题。"
image: "images/firefly.avif"
status: "published"
tags:
  - Astro
  - Svelte
link:
  - label: "GitHub"
    icon: "fa7-brands:github"
    value: "https://github.com/CuteLeaf/Firefly"
  - label: "文档"
    icon: "material-symbols:menu-book"
    value: "https://docs-firefly.cuteleaf.cn"
lang: ""
---
````

## 狀態鍵值（status）

`status` 使用**標準 key**，前臺會按站點語言顯示本地化文案，並按狀態自動配色 + 圖標：

| key | 含義 | 本地化示例 |
|---|---|---|
| `planning` | 計劃中 | 計劃中 / Planning |
| `developing` | 開發中 | 開發中 / In Development |
| `published` | 已發佈 | 已發佈 / Published |
| `archived` | 已歸檔 | 已歸檔 / Archived |

- 只寫標準 key 即可：`status: "published"`。
- 未知或自定義字符串會原樣顯示（中性灰），且不參與列表頁的狀態篩選。

> 列表頁頂部支持**按狀態篩選**（全部 / 各狀態），並可按名稱、描述、標籤**搜索**項目。
