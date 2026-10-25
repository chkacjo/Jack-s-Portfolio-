---
title: Markdown 擴展功能
published: 1970-01-01
updated: 1970-01-01
description: "瞭解 Firefly 中的 Markdown 功能"
image: ""
tags: [演示, 示例, Markdown, Firefly]
category: "文章示例"
slug: markdown-extended
series: "Firefly 功能示例2"
seriesOrder: 2
---

## GitHub 倉庫卡片

您可以添加鏈接到 GitHub 倉庫的動態卡片，在頁面加載時，倉庫信息會從 GitHub API 獲取。

::github{repo="CuteLeaf/Firefly"}

使用代碼 `::github{repo="CuteLeaf/Firefly"}` 創建 GitHub 倉庫卡片。

```markdown
::github{repo="CuteLeaf/Firefly"}
```

## 提醒框(Admonitions)配置

Firefly 採用了 [rehype-callouts](https://github.com/lin-stephanie/rehype-callouts) 插件，支持了四種風格的提醒框主題：`GitHub`、`Obsidian`、`VitePress` 和 `Docusaurus`。您可以在 `src/config/siteConfig.ts` 中進行配置：

```typescript
// src/config/siteConfig.ts
export const siteConfig: SiteConfig = {
  // ...
  rehypeCallouts: {
    // 选项: "github" | "obsidian" | "vitepress" | "docusaurus"
    theme: "github",
  },
  // ...
};
```

注意：**更改配置後需要重啟開發服務器才能生效。**

以下是各個主題支持的類型列表，每個主題風格和語法不同，可根據喜好選擇。

### 1. GitHub 主題風格

這是 GitHub 官方支持的 5 種基本類型。

![GitHub](./images/github.avif)

**基本語法**

```markdown
> [!NOTE] NOTE
> 突出显示用户应该考虑的信息。

> [!TIP] TIP
> 可选信息，帮助用户更成功。

> [!IMPORTANT] IMPORTANT
> 用户成功所必需的关键信息。

> [!WARNING] WARNING
> 关键内容，需要立即注意。

> [!CAUTION] CAUTION
> 行动的负面潜在后果。

> [!NOTE] 自定义标题
> 这是一个带有自定义标题的示例。
```

---

### 2. Obsidian 主題風格

[Obsidian](https://obsidian.md/) 風格支持非常豐富的類型和別名。

<details>
<summary>點擊展開 Obsidian 語法列表</summary>

```markdown

> [!NOTE] NOTE
> 通用的笔记块。

> [!ABSTRACT] ABSTRACT
> 文章的摘要。

> [!SUMMARY] SUMMARY
> 文章的总结（同 Abstract）。

> [!TLDR] TLDR
> 太长不看（同 Abstract）。

> [!INFO] INFO
> 提供额外信息。

> [!TODO] TODO
> 需要完成的事项。

> [!TIP] TIP
> 实用技巧或提示。

> [!HINT] HINT
> 暗示（同 Tip）。

> [!IMPORTANT] IMPORTANT
> 重要信息（Obsidian 风格通常使用类似的图标）。

> [!SUCCESS] SUCCESS
> 操作成功。

> [!CHECK] CHECK
> 检查通过（同 Success）。

> [!DONE] DONE
> 已完成（同 Success）。

> [!QUESTION] QUESTION
> 提出问题。

> [!HELP] HELP
> 寻求帮助（同 Question）。

> [!FAQ] FAQ
> 常见问题（同 Question）。

> [!WARNING] WARNING
> 警告信息。

> [!CAUTION] CAUTION
> 注意事项（同 Warning）。

> [!ATTENTION] ATTENTION
> 引起注意（同 Warning）。

> [!FAILURE] FAILURE
> 操作失败。

> [!FAIL] FAIL
> 失败（同 Failure）。

> [!MISSING] MISSING
> 缺失内容（同 Failure）。

> [!DANGER] DANGER
> 危险操作警告。

> [!ERROR] ERROR
> 错误信息（同 Danger）。

> [!BUG] BUG
> 报告软件缺陷。

> [!EXAMPLE] EXAMPLE
> 展示一个例子。

> [!QUOTE] QUOTE
> 引用一段话。

> [!CITE] CITE
> 引证（同 Quote）。

> [!NOTE] 自定义标题
> 这是一个带有自定义标题的示例。
```
</details>

![Obsidian](./images/obsidian.avif)

---

### 3. VitePress 主題風格

[VitePress](https://vitepress.dev/) 風格提供了一套現代化的、扁平的默認樣式。目前僅包含與 GitHub 一致的 **5 種** 基礎類型。

<details>
<summary>點擊展開 VitePress 語法列表</summary>

```markdown
> [!NOTE] NOTE
> 对应 GitHub 的 Note。

> [!TIP] TIP
> 对应 GitHub 的 Tip。

> [!IMPORTANT] IMPORTANT
> 对应 GitHub 的 Important。

> [!WARNING] WARNING
> 对应 GitHub 的 Warning。

> [!CAUTION] CAUTION
> 对应 GitHub 的 Caution。

> [!TIP] 自定义标题
> VitePress 风格同样支持自定义标题。
```
</details>

![VitePress](./images/vitepress.avif)

---

### 4. Docusaurus 主題風格

[Docusaurus](https://docusaurus.io/docs/markdown-features/admonitions) 風格提供了一套現代化的提醒框樣式，支持 5 種類型。

<details>
<summary>點擊展開 Docusaurus 語法列表 </summary>

支持以下類型的提醒框：`note` `tip` `info` `warning` `danger`

```markdown
:::note
突出显示用户应该考虑的信息，即使在快速浏览时也是如此。
:::

:::tip
可选信息，帮助用户更成功。
:::

:::info
一般信息。
:::

:::warning
由于潜在风险需要用户立即注意的关键内容。
:::

:::danger
行动的负面潜在后果。
:::

:::tip[自定义标题]
可选信息，帮助用户更成功。
:::
```

</details>

![Docusaurus](./images/docusaurus.avif)

---

## 劇透

您可以為文本添加劇透。文本也支持 **Markdown** 語法。

內容 :spoiler[被隱藏了 **哈哈**]！

```markdown
内容 :spoiler[被隐藏了 **哈哈**]！
```

## 圖片畫廊網格 (Image Grid)

您可以使用 `[grid]` 和 `[/grid]` 標籤將多張圖片縱向並排展示。這對於展示照片畫廊或對比圖非常有用。系統會自動根據包裹在其中的圖片數量（最多支持並排展示4張）以響應式網格進行佈局。

**自動補齊圖片高度：** 同一排中如果有高度、大小或者比例不一的圖片，會像「九宮格畫廊相冊」一樣自動撐滿。較短或不協調的圖片會自動使用 object-cover 進行完美中心裁剪補充視野。圖片邊框水平徹底對齊無縫隙，但被裁剪後，只有點擊圖片通過燈箱才能查看完整圖片，所以建議儘量避免使用長寬比例不一致的圖片在同一排中。

**圖注恆定底端對齊：** 不論上面的圖片長寬如何變化，在同一行的所有圖像解釋文字（圖注）都會對標到一條完美的水平基線上了。

[grid]
![示例圖片一](./images/firefly1.avif)
![示例圖片二](./images/firefly2.avif)
![示例圖片二](./images/firefly3.avif)
[/grid]

**基本語法**

```markdown
[grid]
![示例图片一](./images/firefly1.avif)
![示例图片二](./images/firefly2.avif)
![示例图片二](./images/firefly3.avif)
[/grid]
```


---