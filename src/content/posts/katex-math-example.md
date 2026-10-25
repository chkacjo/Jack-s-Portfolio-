---
title: KaTeX 數學公式示例
published: 1970-01-02
description: 展示 Firefly 主題對 KaTeX 數學公式的支持，包括行內公式、塊級公式和複雜數學符號。
tags: [KaTeX, Math, 示例]
category: 文章示例
image: api
slug: katex-math-example
series: "Firefly 功能示例2"
seriesOrder: 6
---

本文展示了 [Firefly](https://github.com/CuteLeaf/Firefly) 主題對 KaTeX 數學公式的渲染支持。

## 行內公式 (Inline)

行內公式使用單個 `$` 符號包裹。

例如：歐拉公式 $e^{i\pi} + 1 = 0$ 是數學中最優美的公式之一。

質能方程 $E = mc^2$ 也是家喻戶曉。

## 塊級公式 (Block)

塊級公式使用兩個 `$$` 符號包裹，會居中顯示。

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

## 複雜示例

### 矩陣 (Matrices)

$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
\alpha & \beta \\
\gamma & \delta
\end{pmatrix} =
\begin{pmatrix}
a\alpha + b\gamma & a\beta + b\delta \\
c\alpha + d\gamma & c\beta + d\delta
\end{pmatrix}
$$

### 極限與求和 (Limits and Sums)

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

### 麥克斯韋方程組 (Maxwell's Equations)

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$

### 化學方程式 (Chemical Equations)

$$
\ce{CH4 + 2O2 -> CO2 + 2H2O}
$$

## 更多符號

| 符號 | 代碼 | 渲染結果 |
| :--- | :--- | :--- |
| Alpha | `\alpha` | $\alpha$ |
| Beta | `\beta` | $\beta$ |
| Gamma | `\Gamma` | $\Gamma$ |
| Pi | `\pi` | $\pi$ |
| Infinity | `\infty` | $\infty$ |
| Right Arrow | `\rightarrow` | $\rightarrow$ |
| Partial | `\partial` | $\partial$ |

更多 KaTeX 語法請參考 [KaTeX Supported Functions](https://katex.org/docs/supported.html)。
