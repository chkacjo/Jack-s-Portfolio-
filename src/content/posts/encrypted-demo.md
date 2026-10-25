---
title: Firefly 文章加密
published: 1970-01-02
description: 這是一篇密碼保護的示例文章，用於演示文章加密功能。
tags: [示例, 密碼保護]
category: 文章示例
password: "123456"
passwordHint: "示例文章密碼123456"
slug: encrypted-demo
series: "Firefly 功能示例"
seriesOrder: 6
---

## 成功解鎖了這篇文章！

如果你能看到這段內容，說明密碼輸入正確，文章已成功解密。

### 功能說明

- **構建時加密**：文章內容在構建時使用 AES-256-GCM 算法加密，頁面源碼中不包含任何明文。
- **客戶端解密**：訪客輸入正確密碼後，瀏覽器通過 Web Crypto API 在本地完成解密。
- **會話緩存**：同一瀏覽器會話內，密碼會被緩存到 `sessionStorage`，刷新頁面無需重複輸入。
- **關閉即失效**：關閉瀏覽器後緩存清除，再次訪問需要重新輸入密碼。

> 密碼為 `123456`，僅供測試使用。

## 圖片

![Firefly](./images/1.avif)

## GitHub 倉庫卡片

::github{repo="CuteLeaf/Firefly"}

## 提示框

> [!NOTE] NOTE
> 突出顯示用戶應該考慮的信息。

> [!TIP] TIP
> 可選信息，幫助用戶更成功。

> [!NOTE] 自定義標題
> 這是一個帶有自定義標題的示例。

## 數學公式
### 行內公式 (Inline)

歐拉公式 $e^{i\pi} + 1 = 0$ 是數學中最優美的公式之一。

質能方程 $E = mc^2$ 也是家喻戶曉。

### 塊級公式 (Block)

塊級公式使用兩個 `$$` 符號包裹，會居中顯示。

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

### 化學方程式 (Chemical Equations)

$$
\ce{CH4 + 2O2 -> CO2 + 2H2O}
$$

## 代碼塊
#### 常規語法高亮

```js
console.log('此代码有语法高亮!')
```

#### 渲染 ANSI 轉義序列

```ansi
ANSI colors:
- Regular: [31mRed[0m [32mGreen[0m [33mYellow[0m [34mBlue[0m [35mMagenta[0m [36mCyan[0m
- Bold:    [1;31mRed[0m [1;32mGreen[0m [1;33mYellow[0m [1;34mBlue[0m [1;35mMagenta[0m [1;36mCyan[0m
- Dimmed:  [2;31mRed[0m [2;32mGreen[0m [2;33mYellow[0m [2;34mBlue[0m [2;35mMagenta[0m [2;36mCyan[0m

256 colors (showing colors 160-177):
[38;5;160m160 [38;5;161m161 [38;5;162m162 [38;5;163m163 [38;5;164m164 [38;5;165m165[0m
[38;5;166m166 [38;5;167m167 [38;5;168m168 [38;5;169m169 [38;5;170m170 [38;5;171m171[0m
[38;5;172m172 [38;5;173m173 [38;5;174m174 [38;5;175m175 [38;5;176m176 [38;5;177m177[0m

Full RGB colors:
[38;2;34;139;34mForestGreen - RGB(34, 139, 34)[0m

Text formatting: [1mBold[0m [2mDimmed[0m [3mItalic[0m [4mUnderline[0m
```


## 流程圖

```mermaid
graph TD
    A[开始] --> B{条件检查}
    B -->|是| C[处理步骤 1]
    B -->|否| D[处理步骤 2]
    C --> E[子过程]
    D --> E
    subgraph E [子过程详情]
        E1[子步骤 1] --> E2[子步骤 2]
        E2 --> E3[子步骤 3]
    end
    E --> F{另一个决策}
    F -->|选项 1| G[结果 1]
    F -->|选项 2| H[结果 2]
    F -->|选项 3| I[结果 3]
    G --> J[结束]
    H --> J
    I --> J
```