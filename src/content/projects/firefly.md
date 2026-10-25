---
title: "Firefly 主題模版"
slug: firefly
published: 2025-10-01
order: 100
description: "一款清新美觀且現代化個人博客主題模板，專為技術愛好者和內容創作者設計。該主題融合了現代 Web 技術棧，提供了豐富的功能模塊和高度可定製的界面，讓您能夠輕鬆打造出專業且美觀的個人博客網站。"
image: "images/firefly.avif"
status: "published"
tags:
  - Astro
  - Svelte
  - TailwindCSS
  - Typescript
link:
  - label: "GitHub"
    icon: "fa7-brands:github"
    value: "https://github.com/CuteLeaf/Firefly"
  - label: "文檔"
    icon: "material-symbols:menu-book"
    value: "https://docs-firefly.cuteleaf.cn"
---

## 功能特性

⚡ 靜態站點生成: 基於 Astro 的超快加載速度和 SEO 優化

🎨 現代化設計: 簡潔美觀的界面，支持自定義主題色

📱 移動友好: 完美的響應式體驗，移動端專項優化

🔧 高度可配置: 大部分功能模塊均可通過配置文件自定義

### 核心功能

- [x] **Astro + Tailwind CSS** - 基於現代技術棧的超快靜態站點生成
- [x] **流暢動畫** - Swup 頁面過渡動畫，提供絲滑的瀏覽體驗
- [x] **響應式設計** - 完美適配桌面端、平板和移動設備
- [x] **多語言支持** - i18n 國際化，UI 支持簡體中文、繁體中文、英文、日文、俄語、韓文
- [x] **全文搜索** - 基於 Pagefind 的客戶端搜索，支持文章內容索引

### 個性化
- [x] **動態側邊欄** - 支持配置單側邊欄、雙側邊欄
- [x] **文章佈局** - 支持配置(單列)列表、網格(多列/瀑布流)佈局
- [x] **字體管理** - 支持自定義字體，豐富的字體選擇器
- [x] **頁腳配置** - HTML 內容注入，完全自定義
- [x] **亮暗色模式** - 支持亮色/暗色/跟隨系統三種模式
- [x] **導航欄自定義** - Logo、標題、鏈接全面自定義
- [x] **壁紙模式切換** - 橫幅壁紙、全屏壁紙、全屏透明壁紙、純色背景
- [x] **主題色自定義** - 360° 色相調節

如果你有好用的功能和優化，請提交 [Pull Request](https://github.com/CuteLeaf/Firefly/pulls)

## 快速開始

### 環境要求

- Node.js ≥ 22
- pnpm ≥ 11

### 本地開發部署

1. **克隆倉庫：**
   ```bash
   git clone https://github.com/Cuteleaf/Firefly.git
   cd Firefly
   ```
   
   **先 [Fork](https://github.com/CuteLeaf/Firefly/fork) 到自己倉庫再克隆（推薦），記得先點 Star 再 Fork 哦！**

   ```bash
   git clone https://github.com/you-github-name/Firefly.git
   cd Firefly
   ```
3. **安裝依賴：**
   ```bash
   # 如果没有安装 pnpm，先安装
   npm install -g pnpm
   
   # 安装项目依赖
   pnpm install
   ```

4. **配置博客：**
   - 編輯 `src/config/` 目錄下的配置文件自定義博客設置

5. **啟動開發服務器：**
   ```bash
   pnpm dev
   ```
   博客將在 `http://localhost:4321` 可用

### 平臺託管部署
- **參考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)將博客部署至 Vercel, Netlify, Cloudflare Pages, EdgeOne Pages 等。**
- **Vercel**、**Netlify** 等主流平臺自動部署，會根據環境自動選擇適配器。

   框架預設： `Astro`

   根目錄： `./`

   輸出目錄： `dist`

   構建命令： `pnpm run build`

   安裝命令： `pnpm install`
