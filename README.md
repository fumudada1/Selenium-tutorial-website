# Selenium-tutorial-website

供 Selenium 自動化測試練習用的靜態網站，以 HP 14 吋商用筆電的商品頁與產品詢問單為情境，不需要後端或建置步驟。

## 頁面說明

| 頁面 | 檔案 | 練習重點 |
| --- | --- | --- |
| 產品介紹頁 | `index.html`、`style.css`、`script.js` | 定位元素（Locator）、點擊按鈕（加入購物車、收藏）、頁面導覽連結、文字驗證 |
| 產品詢問單 | `inquiry.html`、`inquiry.css`、`inquiry.js` | `send_keys()`、`click()`、`clear()`、下拉選單（Select）、表單驗證訊息、送出結果表格 |

## 使用方式

直接以瀏覽器開啟 `index.html` 即可，或在專案目錄啟動簡易伺服器：

```bash
python -m http.server 8000
```

接著瀏覽 <http://localhost:8000/index.html>。

## Selenium 練習範例（Python）

```python
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("http://localhost:8000/inquiry.html")

driver.find_element(By.ID, "customer-name").send_keys("王小明")
driver.find_element(By.ID, "customer-phone").send_keys("0912-345-678")
driver.find_element(By.ID, "btn-submit").click()

driver.quit()
```

## 常用元素定位

- 產品頁：`#btn-add-cart`、`#btn-favorite`、`#cart-count`、`#action-message`、`#price`
- 詢問單：`#customer-name`、`#customer-phone`、`#product-select`、`#btn-submit`、`#form-error`、`#inquiry-body`

## 專案結構

```
.
├── index.html      # 產品介紹頁
├── style.css       # 共用樣式
├── script.js       # 產品頁互動邏輯
├── inquiry.html    # 產品詢問單
├── inquiry.css     # 詢問單樣式
└── inquiry.js      # 詢問單互動邏輯
```
