---
title: Markdown Mermaid 圖表
published: 1970-01-01
pinned: false
description: 一個包含 Mermaid 的 Markdown 博客文章簡單示例。
tags: [Markdown, 博客, Mermaid, Firefly]
category: 文章示例
slug: markdown-mermaid
series: "Firefly 功能示例2"
seriesOrder: 3
---
## Markdown 中 Mermaid 圖表完整指南

本文演示如何在 Markdown 文檔中使用 Mermaid 創建各種複雜圖表，包括流程圖、時序圖、ER 圖、類圖、狀態圖、XY 圖、甘特圖、思維導圖等。

> Mermaid 圖表由 [Merman](https://github.com/Latias94/merman) 實現。Firefly 在 Astro 構建階段生成亮色和深色兩套靜態 SVG，無需在瀏覽器中加載 Mermaid 渲染運行時。可以前往 [Merman Playground](http://frankorz.com/merman/) 實時編輯語法並預覽渲染結果。

## 流程圖示例

流程圖非常適合表示流程或算法步驟。




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

## 時序圖示例

時序圖顯示對象之間隨時間的交互。

```mermaid
sequenceDiagram
    participant User as 用户
    participant WebApp as 网页应用
    participant Server as 服务器
    participant Database as 数据库

    User->>WebApp: 提交登录请求
    WebApp->>Server: 发送认证请求
    Server->>Database: 查询用户凭据
    Database-->>Server: 返回用户数据
    Server-->>WebApp: 返回认证结果
    
    alt 认证成功
        WebApp->>User: 显示欢迎页面
        WebApp->>Server: 请求用户数据
        Server->>Database: 获取用户偏好
        Database-->>Server: 返回偏好设置
        Server-->>WebApp: 返回用户数据
        WebApp->>User: 加载个性化界面
    else 认证失败
        WebApp->>User: 显示错误消息
        WebApp->>User: 提示重新输入
    end
```

## ER 圖示例

ER 圖（實體關係圖）非常適合表示數據庫結構。

```mermaid
erDiagram
    USER {
        int id PK
        string username
        string email
        datetime created_at
    }
    ARTICLE {
        int id PK
        string title
        text content
        datetime published
        int author_id FK
    }
    COMMENT {
        int id PK
        text content
        datetime created_at
        int user_id FK
        int article_id FK
    }
    CATEGORY {
        int id PK
        string name
        string description
    }
    USER ||--o{ ARTICLE : "writes"
    USER ||--o{ COMMENT : "posts"
    ARTICLE ||--o{ COMMENT : "has"
    ARTICLE }o--o{ CATEGORY : "belongs to"
```

## 類圖示例

類圖顯示系統的靜態結構，包括類、屬性、方法及其關係。

```mermaid
classDiagram
    class User {
        +String username
        +String password
        +String email
        +Boolean active
        +login()
        +logout()
        +updateProfile()
    }
    
    class Article {
        +String title
        +String content
        +Date publishDate
        +Boolean published
        +publish()
        +edit()
        +delete()
    }
    
    class Comment {
        +String content
        +Date commentDate
        +addComment()
        +deleteComment()
    }
    
    class Category {
        +String name
        +String description
        +addArticle()
        +removeArticle()
    }
    
    User "1" -- "*" Article : 写作
    User "1" -- "*" Comment : 发表
    Article "1" -- "*" Comment : 拥有
    Article "1" -- "*" Category : 属于
```

## 狀態圖示例

狀態圖顯示對象在其生命週期中經歷的狀態序列。

```mermaid
stateDiagram-v2
    [*] --> 草稿
    
    草稿 --> 审核中 : 提交
    审核中 --> 草稿 : 拒绝
    审核中 --> 已批准 : 批准
    已批准 --> 已发布 : 发布
    已发布 --> 已归档 : 归档
    已发布 --> 草稿 : 撤回
    
    state 已发布 {
        [*] --> 活跃
        活跃 --> 隐藏 : 临时隐藏
        隐藏 --> 活跃 : 恢复
        活跃 --> [*]
        隐藏 --> [*]
    }
    
    已归档 --> [*]
```

## XY 圖示例

XY 圖表非常適合展示趨勢和對比數據。

```mermaid
xychart-beta
    title "月度访问量趋势"
    x-axis [1月, 2月, 3月, 4月, 5月, 6月]
    y-axis "访问量" 0 --> 5000
    bar [2500, 3200, 4100, 3800, 4500, 4800]
    line [2500, 3200, 4100, 3800, 4500, 4800]
```

## 餅圖示例

餅圖適合直觀展示各部分在整體中的佔比。

```mermaid
pie showData
    title 内容类型占比
    "技术文章" : 45
    "项目记录" : 30
    "生活随笔" : 15
    "其他" : 10
```

## 甘特圖示例

甘特圖可以按時間軸展示項目階段、任務依賴和當前進度。

```mermaid
gantt
    title 博客版本发布计划
    dateFormat YYYY-MM-DD
    axisFormat %m/%d
    section 准备
    需求整理 :done, req, 2026-07-01, 3d
    视觉设计 :done, design, after req, 4d
    section 开发
    功能实现 :active, dev, after design, 7d
    内容迁移 :content, after design, 5d
    section 发布
    构建检查 :test, after dev, 2d
    正式上线 :milestone, release, after test, 0d
```

## 思維導圖示例

思維導圖適合梳理主題層級和知識結構。

```mermaid
mindmap
  root((Firefly))
    内容
      技术文章
      生活记录
    体验
      搜索
      深色模式
      图表
    工程
      Astro
      Svelte
      Merman
```

## 時間線示例

時間線用於按年份或階段呈現項目的重要事件。

```mermaid
timeline
    title Firefly 演进时间线
    2024 : 建立博客
         : 完成基础主题
    2025 : 加入搜索与图库
         : 完善内容系统
    2026 : 升级 Astro 7
         : 使用 Merman 渲染图表
```

## 用戶旅程圖示例

用戶旅程圖能夠描述用戶在不同階段的行為和體驗評分。

```mermaid
journey
    title 读者浏览文章的旅程
    section 发现内容
      打开首页: 5: 读者
      搜索主题: 4: 读者
    section 阅读文章
      浏览正文: 5: 读者
      查看图表: 5: 读者
    section 继续探索
      查看相关文章: 4: 读者
      分享文章: 3: 读者
```

## Git 圖示例

Git 圖可以清晰展示分支、提交和合並歷史。

```mermaid
gitGraph
    commit id: "init"
    branch feature
    checkout feature
    commit id: "add-diagrams"
    commit id: "polish-themes"
    checkout main
    merge feature id: "merge-feature"
    commit id: "release"
```

## 看板示例

看板適合展示任務在不同工作階段之間的分佈。

```mermaid
kanban
  todo[待办]
    task1[整理需求]
    task2[准备示例]
  doing[进行中]
    task3[接入 Merman]
  done[已完成]
    task4[服务端渲染]
    task5[亮暗主题]
```

## Sankey 圖示例

Sankey 圖通過連線寬度展示流量在不同節點之間的流向。

```mermaid
sankey-beta
Home,Post list,1200
Home,Search,450
Post list,Post detail,900
Search,Post detail,320
Post detail,Related posts,260
Post detail,External shares,180
```

## 總結

Mermaid 是在 Markdown 文檔中創建各種類型圖表的強大工具。本文演示了流程圖、時序圖、ER 圖、類圖、狀態圖、XY 圖、餅圖、甘特圖、思維導圖、時間線、用戶旅程圖、Git 圖、看板和 Sankey 圖。這些圖表可以幫助您更清晰地表達複雜的概念、流程和數據結構。

要使用 Mermaid，只需在代碼塊中指定 mermaid 語言，並使用簡潔的文本語法描述圖表。圖表會在構建時自動渲染為 SVG，無需客戶端 JavaScript 加載。

可以前往 [Merman Playground](http://frankorz.com/merman/) 嘗試更多語法，再將圖表代碼粘貼到文章中。
