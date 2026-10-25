---
title: Firefly 佈局系統詳解
published: 1970-01-03
description: 深入瞭解 Firefly 的佈局系統，包括側邊欄佈局（左側/雙側）和文章列表佈局（列表/網格），以及自適應網格列數。
image: ../images/firefly1.avif
tags: [Firefly, 佈局, 博客, 指南]
category: 博客指南
slug: guide/firefly-layout-system
series: "Firefly 功能示例"
seriesOrder: 2
---

## 📖 概述

Firefly 提供了靈活的佈局系統，允許您根據內容需求和個人喜好自定義博客的視覺呈現方式。佈局系統主要包括**側邊欄佈局**和**文章列表佈局**兩個維度，它們相互配合，共同決定了頁面的整體結構。

本文將詳細介紹 Firefly 的各種佈局模式、它們的特點、使用場景，以及不同佈局組合的效果。

---

[grid]
![左側邊欄+列表佈局](../images/left-list.avif)
![右側邊欄+網格佈局](../images/right-grid2.avif)
![左側邊欄+三列網格佈局](../images/left-grid3.avif)
[/grid]

[grid]
![雙側邊欄+列表佈局](../images/both-list.avif)
![雙側邊欄+網格佈局](../images/both-grid.avif)
![雙側邊欄+網格瀑布流佈局](../images/masonry.avif)
[/grid]


## 一、側邊欄佈局系統

側邊欄是博客頁面的重要組成部分，用於展示導航、分類、標籤、統計信息等輔助內容。Firefly 支持兩種側邊欄佈局模式。

### 1.1 單側邊欄模式

#### 左側邊欄 (position: "left")

![左側邊欄佈局](../images/left-list.avif)

#### 右側邊欄 (position: "right")

![右側邊欄佈局](../images/right-grid2.avif)

#### 特點

- 側邊欄固定在頁面其中一側
- 文章閱讀區域體驗更佳，更寬敞
- 更加簡約，沒有那麼緊湊

#### 適用場景

- 傳統博客風格
- 強調導航和分類的博客
- 需要突出用戶資料的個人博客
- 內容為主，輔助信息次之的場景

:::tip
文章詳情頁顯示哪幾側，由**各組件的 `showOnPostPage`（以及 `hideOnNonPostPage`）**決定：某一側在當前頁型下沒有任何可見組件時，該列會自動收起，把空間讓給內容欄。

如果想在文章頁同時顯示雙側邊欄，把 `position` 設為 `"both"`，並給兩側組件配好 `showOnPostPage` 即可。
:::


#### 配置示例

```typescript
// src/config/sidebarConfig.ts
export const sidebarLayoutConfig: SidebarLayoutConfig = {
  enable: true,
  position: "left", // 左侧边栏
};
```

---

### 1.2 雙側邊欄模式 (position: "both")

#### 特點

- 左右兩側同時存在側邊欄
- 主內容區域位於中間
- 最大化利用屏幕空間
- 可以展示更多輔助信息
- 適合寬屏顯示器

#### 佈局結構

![雙側邊欄+列表佈局](../images/both-list.avif)

![雙側邊欄+網格佈局](../images/both-grid.avif)
#### 適用場景

- 寬屏桌面端瀏覽
- 信息密集型博客
- 需要展示大量輔助內容
- 專業性強的技術博客


#### 配置示例

```typescript
// src/config/sidebarConfig.ts
export const sidebarLayoutConfig: SidebarLayoutConfig = {
  enable: true,
  position: "both", // 双侧边栏
```

---

## 二、文章列表佈局系統

文章列表是博客首頁和歸檔頁的核心內容，Firefly 提供兩種展示方式，並支持多種網格配置。

### 2.1 列表模式 (defaultMode: "list")

#### 特點

- 單列縱向排列
- 顯示文章封面圖，可配置在左側或右側
- 展示更多文章摘要
- 適合深度閱讀

#### 列表佈局結構

![列表模式佈局](../images/left-list.avif)

#### 封面位置

列表模式的封面圖默認在卡片右側，可以通過 `coverPosition` 改到左側。改到左側後，標題前的主題色豎線會自動隱藏（它是貼著卡片左邊緣的設計），騰出的間距留給正文。

網格模式的封面固定在卡片頂部，不受這項配置影響。

#### 優點

- ✅ 視覺衝擊力強，封面圖吸引眼球
- ✅ 可以展示更多文章信息（摘要、標籤等）
- ✅ 適合圖片內容豐富的博客
- ✅ 移動端友好，單列更易閱讀
- ✅ 兼容所有側邊欄配置（單側、雙側）

#### 配置示例

```typescript
// src/config/siteConfig.ts
export const siteConfig: SiteConfig = {
  postListLayout: {
    defaultMode: "list",    // 列表模式
    coverPosition: "right", // 封面图位置："right" 右侧，"left" 左侧
  },
};
```

---

### 2.2 網格模式 (defaultMode: "grid")

#### 特點

- 自適應列數，根據瀏覽器寬度自動調整
- 緊湊佈局，信息密度高
- 適合快速瀏覽

#### 自適應網格

網格模式通過 `columnWidth` 配置卡片的最小寬度（單位 px），瀏覽器會根據容器可用寬度自動計算能容納多少列。

![網格佈局](../images/left-grid3.avif)

#### 配置示例

```typescript
// src/config/siteConfig.ts
export const siteConfig: SiteConfig = {
  postListLayout: {
    defaultMode: "grid",
    grid: {
      masonry: true,      // 开启瀑布流
      columnWidth: 320,   // 卡片最小宽度(px)，浏览器自动计算列数
    },
  },
};
```

---

### 2.3 瀑布流佈局 (Masonry)

Firefly 的網格模式內置了智能瀑布流佈局支持，解決了網格佈局中因圖文混合文章導致的卡片高度不一致導致的空白問題。

![瀑布流佈局](../images/masonry.avif)

- **智能排版**：自動將卡片放置到最短的列，最大化利用垂直空間。
- **消除空白**：通過絕對定位精確計算每個卡片的位置，讓卡片緊貼上方卡片，消除垂直方向的空白間隙。
- **自適應列數**：瀑布流同樣根據 `columnWidth` 和容器寬度動態計算列數，無需固定配置。
- **配置靈活**：您可以在 `siteConfig.ts` 中通過 `postListLayout.grid.masonry` 選項自由開啟或關閉此功能。

---

## 三、佈局組合指南

Firefly 允許您自由組合側邊欄和文章列表佈局。以下是各種組合的效果說明。

| 側邊欄模式 | 文章列表模式 | 推薦度 | 適用場景 |
|-----------|------------|--------|---------|
| 單側邊欄   | 列表模式    | ⭐⭐⭐⭐⭐ | 攝影、設計、生活類博客，強調圖片和沉浸感 |
| 單側邊欄   | 網格模式    | ⭐⭐⭐⭐⭐ | 技術、筆記類博客，平衡閱讀與檢索效率 |
| 雙側邊欄   | 列表模式    | ⭐⭐⭐⭐⭐ | 需要展示大量側邊欄信息的站點 |
| 雙側邊欄   | 網格模式    | ⭐⭐⭐⭐⭐ | 極客風格，追求最高信息密度 |

---

## 四、響應式佈局行為

Firefly 的佈局系統具有智能的響應式設計，會根據屏幕尺寸自動調整。

為了保證最佳閱讀體驗，系統會在屏幕變窄時自動調整佈局：

1. **網格列數自動減少**：網格模式的列數由 `columnWidth` 和容器寬度自動決定，屏幕越窄列數越少。
2. **列表模式 -> 網格模式**：當屏幕寬度小於 380px（超小屏設備）時，列表模式會自動切換為網格模式，以保證卡片內容的可讀性。
3. **雙側邊欄 -> 單側邊欄**：當屏幕寬度小於 1280px 時，會根據`tabletSidebar`配置顯示單側邊欄，隱藏其中一個側邊欄，文章目錄導航會切換成浮動目錄導航。

---

## 五、常見問題

### Q1: 如何調整網格列數？

**A**: 通過 `columnWidth` 配置卡片最小寬度即可。值越小，同等寬度下列數越多；值越大，列數越少。瀏覽器會自動根據可用寬度計算最佳列數。

---

## 六、總結

Firefly 的佈局系統給予了您更大的自由度，您都可以通過簡單的配置實現。

我們建議您根據自己的內容類型和目標讀者的設備偏好，嘗試不同的組合，找到最適合您的博客形態。

---

## 相關鏈接

- 📚 [側邊欄配置文檔](https://docs-firefly.cuteleaf.cn/config/sidebarConfig-usage/)
- 📚 [站點配置文檔](https://docs-firefly.cuteleaf.cn/config/siteConfig-usage/)
- 🏠 [Firefly 官方文檔](https://docs-firefly.cuteleaf.cn/)
- ⭐ [Firefly GitHub](https://github.com/CuteLeaf/Firefly)
