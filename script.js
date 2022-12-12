
/**
 * Plugin Name:       My Basics Plugin
 * Plugin URI:        https://example.com/plugins/the-basics/
 * Description:       Handle the basics with this plugin.
 * Version:           1.10.3
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            John Smith
 * Author URI:        https://author.example.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       my-basics-plugin
 * Domain Path:       /languages
*/
// plugin_name + plugin_desc + plugin_version + plugin_author
document.querySelector("body > form > input[type=submit]").onclick = function () {
    let plugin_name = document.querySelector("#plugin-name").value;
    let plugin_desc = document.querySelector("#plugin-desc").value;
    let plugin_version = document.querySelector("#plugin-version").value;
    let plugin_author = document.querySelector("#plugin-author").value;

    let plugin_uri = document.querySelector("#plugin-uri").value;
    let plugin_wpversion = document.querySelector("#plugin-wpversion").value;
    let plugin_phpversion = document.querySelector("#plugin-phpversion").value;
    let plugin_author_uri = document.querySelector("#plugin-author-uri").value;
    let plugin_license = document.querySelector("#plugin-license").value;
    let plugin_license_uri = document.querySelector("#plugin-license-uri").value;
    let plugin_upuri = document.querySelector("#plugin-upuri").value;
    let plugin_domain = document.querySelector("#plugin-domain").value;
    let plugin_domain_path = document.querySelector("#plugin-domain_path").value;

    let code_out = document.querySelector("#code_out");

    let result = (`
/**
 * Plugin Name:       ${plugin_name}
 * Plugin URI:        ${(!plugin_uri) ? "" : plugin_uri}
 * Description:       ${plugin_desc}
 * Version:           ${plugin_version}
 * Requires at least: ${(!plugin_wpversion) ? "" : plugin_wpversion}
 * Requires PHP:      ${(!plugin_phpversion) ? "" : plugin_phpversion}
 * Author:            ${plugin_author}
 * Author URI:        ${(!plugin_author_uri) ? "" : plugin_author_uri}
 * License:           ${(!plugin_license) ? "" : plugin_license}
 * License URI:       ${(!plugin_upuri) ? "" : plugin_upuri}
 * Update URI:        ${(!plugin_license_uri) ? "" : plugin_license_uri}
 * Update URI:        ${(!plugin_upuri) ? "" : plugin_upuri}
 * Text Domain:       ${(!plugin_domain) ? "" : plugin_domain}
 * Domain Path:       ${(!plugin_domain_path) ? "" : plugin_domain_path}
*/
    `);
    code_out.value = result;
    console.log(result);
    document.querySelector("#btn_copy").style.display = "block";
}

function copiando () {
    let copyText = document.getElementById("code_out");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}