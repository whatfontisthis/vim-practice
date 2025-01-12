// Function to highlight the current page link in the side panel
function highlightCurrentPage() {
  const currentPage = window.location.pathname;
  const links = document.querySelectorAll(".curriculum-list a");
  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

// Initialize CodeMirror (only for chapter1.html)
function initializeCodeMirror() {
  const editorElement = document.getElementById("editor");
  if (editorElement) {
    const editor = CodeMirror.fromTextArea(editorElement, {
      lineNumbers: true,
      keyMap: "vim", // Enable Vim mode
      mode: "text/plain",
      theme: "default",
    });
  }
}

// Run functions when the page loads
document.addEventListener("DOMContentLoaded", () => {
  highlightCurrentPage();
  initializeCodeMirror();
});
