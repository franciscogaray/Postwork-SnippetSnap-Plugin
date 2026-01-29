# SnippetSnap: Premium Clipboard Integration

SnippetSnap is a high-performance WordPress plugin designed for technical DTC brands. It automatically injects a sleek, "Dark Mode" copy-to-clipboard utility into code blocks and inline snippets to enhance the developer user experience.

---

## 🚀 Installation

### From the ZIP File
1. Download the `snippetsnap.zip` file.
2. Log in to your WordPress Admin Dashboard.
3. Navigate to **Plugins > Add New > Upload Plugin**.
4. Choose the `snippetsnap.zip` file and click **Install Now**.
5. Click **Activate**.

### Post-Installation Setup
1. Go to **Settings > SnippetSnap**.
2. Select the Post Types (Posts, Pages, Products, etc.) where you want the copy buttons to appear.
3. Click **Save Changes**.

---

## 🛠 Features
- **Zero Dependencies:** Written in Vanilla JS; no jQuery required.
- **Context Aware:** Automatically detects if code is a multi-line block (`<pre>`) or inline snippet (`<code>`).
- **Visual Feedback:** Swaps the Copy icon for a success checkmark upon successful execution.
- **Performance Optimized:** Assets are only loaded on the specific post types you select.

---

## 🔌 Hooks & Filters

SnippetSnap is built to be extensible. Developers can use the following filters to customize the plugin behavior without modifying the core files.

### 1. Filter: `snippetsnap_post_types`
Modify the list of available post types programmatically.
```php
add_filter('snippetsnap_post_types', function($post_types) {
    $post_types[] = 'documentation'; // Add a custom post type
    return $post_types;
});