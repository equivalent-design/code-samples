(function () {
  function iconMarkup() {
    return (
      '<svg class="icon-copy" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
      '<rect x="5.5" y="5.5" width="8" height="8" rx="1.3" stroke="currentColor" stroke-width="1.3"/>' +
      '<path d="M10.5 5V3.7A1.2 1.2 0 0 0 9.3 2.5H3.2A1.2 1.2 0 0 0 2 3.7v6.1a1.2 1.2 0 0 0 1.2 1.2H4.5" stroke="currentColor" stroke-width="1.3"/>' +
      "</svg>" +
      '<svg class="icon-check" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" hidden>' +
      '<path d="M3 8.3 6.2 11.5 13 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      "</svg>"
    );
  }

  function showCopied(button) {
    button.classList.add("copied");
    button.querySelector(".icon-copy").hidden = true;
    button.querySelector(".icon-check").hidden = false;
    window.clearTimeout(button._copyResetTimer);
    button._copyResetTimer = window.setTimeout(function () {
      button.classList.remove("copied");
      button.querySelector(".icon-copy").hidden = false;
      button.querySelector(".icon-check").hidden = true;
    }, 1500);
  }

  function copyText(text, button) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showCopied(button);
      });
      return;
    }
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      showCopied(button);
    } catch (e) {
      /* clipboard unavailable — silently ignore */
    }
    document.body.removeChild(textarea);
  }

  document.querySelectorAll("main pre").forEach(function (pre) {
    var code = pre.querySelector("code") || pre;

    var wrapper = document.createElement("div");
    wrapper.className = "code-block";
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    var button = document.createElement("button");
    button.type = "button";
    button.className = "copy-btn";
    button.setAttribute("aria-label", "Copy code to clipboard");
    button.innerHTML = iconMarkup();
    button.addEventListener("click", function () {
      copyText(code.textContent, button);
    });
    wrapper.appendChild(button);
  });
})();
