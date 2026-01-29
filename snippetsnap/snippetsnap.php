<?php
/**
 * Plugin Name: SnippetSnap
 * Description: Premium Clipboard Integration for Technical Documentation.
 * Version: 1.0.0
 * Author: Francisco Garay
 */

if (!defined('ABSPATH')) exit;

class SnippetSnap {
    public function __construct() {
        add_action('admin_menu', [$this, 'add_settings_page']);
        add_action('admin_init', [$this, 'register_settings']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_assets']);
    }

    public function add_settings_page() {
        add_options_page('SnippetSnap Settings', 'SnippetSnap', 'manage_options', 'snippetsnap', [$this, 'render_settings']);
    }

    public function register_settings() {
        register_setting('snippetsnap_group', 'snippetsnap_post_types');
    }

    public function render_settings() {
        $selected_types = get_option('snippetsnap_post_types', ['post']);
        $post_types = get_post_types(['public' => true], 'objects');
        ?>
        <div class="wrap">
            <h1>SnippetSnap Settings</h1>
            <form method="post" action="options.php">
                <?php settings_fields('snippetsnap_group'); ?>
                <table class="form-table">
                    <tr>
                        <th>Enable for Post Types:</th>
                        <td>
                            <?php foreach ($post_types as $type): ?>
                                <label>
                                    <input type="checkbox" name="snippetsnap_post_types[]" value="<?php echo $type->name; ?>" <?php checked(in_array($type->name, (array)$selected_types)); ?>>
                                    <?php echo $type->label; ?>
                                </label><br>
                            <?php endforeach; ?>
                        </td>
                    </tr>
                </table>
                <?php submit_button(); ?>
            </form>
        </div>
        <?php
    }

    public function enqueue_assets() {
        $selected_types = get_option('snippetsnap_post_types', ['post']);
        if (is_singular($selected_types)) {
            wp_enqueue_style('snippetsnap-css', plugins_url('assets/css/style.css', __FILE__));
            wp_enqueue_script('snippetsnap-js', plugins_url('assets/js/clipboard.js', __FILE__), [], '1.0.0', true);
        }
    }
}
new SnippetSnap();