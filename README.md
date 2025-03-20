# int-anm - Number Animation JS

**Effortless Number Animations with a Single Class!** ✨  Bring your website to life with smooth, animated number transitions. Simply add the `int-anm` class to your HTML elements and watch your numbers animate automatically. No JavaScript coding required!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Repo](https://img.shields.io/github/stars/sakibweb/int-anm?style=social)](https://github.com/sakibweb/int-anm)

## ✨ Key Features

*   **One-Class Integration:** Animate numbers by simply adding the `int-anm` class to your HTML elements.
*   **Automatic Initialization:**  The script automatically finds and animates all elements with the `int-anm` class on page load.
*   **Viewport Triggered:** Animations intelligently start when elements become visible in the viewport, optimizing performance.
*   **Dynamic Step Animation:**  Animation speed adjusts dynamically based on the number difference, ensuring smooth transitions for all value ranges.
*   **Smart Value Parsing:**  Understands and animates various number formats including decimals, commas, percentages, negative numbers, and currencies within text.
*   **Preserves Text Formatting:**  Maintains surrounding text, currency symbols, and original formatting while animating the numbers.
*   **Lightweight & Fast:**  Built for performance with a small footprint and efficient JavaScript.
*   **Pure JavaScript:**  No external dependencies required.
*   **MIT Licensed:**  Free for personal and commercial use.

## 📦 Installation

### CDN (Content Delivery Network)

For the quickest setup, use the CDN link to include `int-anm` directly in your HTML.

```html
<script src="https://cdn.jsdelivr.net/gh/sakibweb/int-anm@latest/int-anm.min.js"></script>
```

> **Note:** The above CDN link is a placeholder.  To use a stable CDN link in production, you should:
>
> 1.  **Create a Release on GitHub:** Tag and release a version of your `int-anm` repository on GitHub.
> 2.  **Use jsDelivr or unpkg:**  These services can serve files directly from GitHub releases.  A typical jsDelivr link format would be: `https://cdn.jsdelivr.net/gh/username/repository@version/int-anm.min.js` (replace `username`, `repository`, and `version` with your actual details).

### Local Installation

1.  **Download Files:** Download both `int-anm.js` and `int-anm.min.js` from the [GitHub repository](https://github.com/sakibweb/int-anm).
2.  **Include in Project:** Place the downloaded files in your project's JavaScript directory.
3.  **Add to HTML:** Link either `int-anm.js` (for development) or `int-anm.min.js` (for production) in your HTML file:

    ```html
    <script src="path/to/int-anm.min.js"></script>
    ```

## 🚀 Simple Usage

Animate your numbers in seconds!

1.  **Add `int-anm` Class:**  Simply add the `int-anm` class to any HTML element containing the number you want to animate.

    ```html
    <div class="int-anm">Total Customers: 2500+</div>
    <span class="int-anm">Current Discount: -10%</span>
    <p class="int-anm">Price: $99.99</p>
    <li class="int-anm">Items Sold: 12,456</li>
    ```

2.  **Automatic Animation:** That's all! When your webpage loads, `int-anm` will automatically find these elements and animate the numbers when they come into view. No JavaScript code is needed to initiate the animation!

## 📄 License

`int-anm` is open-source software licensed under the [MIT License](LICENSE).

## 🤝 Contribute

We welcome contributions! If you have ideas for improvements or find any issues, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/sakibweb/int-anm).

## ⭐ Support This Project

If you find `int-anm` useful, please consider giving it a star on [GitHub](https://github.com/sakibweb/int-anm). Your support is greatly appreciated!

**Made with ❤️ by [sakibweb](https://github.com/sakibweb)**
