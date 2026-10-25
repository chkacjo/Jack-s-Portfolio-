# 部署至 GitHub Pages

此網站沿用 Firefly 的 GitHub Actions → GitHub Pages 靜態部署方式，不需要另租伺服器。

1. 在 `chkacjo/Jack-s-Portfolio-` 的 **Settings → Pages → Build and deployment**，將 **Source** 設為 **GitHub Actions**。
2. 將變更提交並推送至 `master`。現有的 **Deploy to GitHub Pages** 工作流程會建置及部署網站，也可以從 **Actions** 手動執行。
3. 等待部署成功後，網站位址為 `https://chkacjo.github.io/Jack-s-Portfolio-/`。

目前 `src/config/siteConfig.ts` 的 `site_url` 與 `astro.config.mjs` 的 `base` 均對應上述專案網址。若日後更改儲存庫名稱或改用自訂網域，請同步調整這兩項。

## 本機開發

使用 Node.js ≥ 22.23.0 及 pnpm 11.22.0：

```sh
pnpm install --frozen-lockfile
pnpm dev
```

開發時請開啟 `/Jack-s-Portfolio-/` 路徑。檢查及建置：

```sh
pnpm check
pnpm type-check
pnpm build
pnpm preview
```

介面預設語言為繁體中文（`zh_TW`）；範例文章的說明文字亦已轉為繁體中文，程式碼範例及網址保留原樣。GitHub 卡片與自訂字型可能需要存取外部 API；網路受限時會使用快取或備用字型。
