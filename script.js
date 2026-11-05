const notice = document.querySelector("#notice");
const pageLinks = document.querySelectorAll('a[href^="#"]');

let noticeTimer;

pageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (targetId === "#") {
      event.preventDefault();
      notice.textContent = "You’re already on the BIGGO AI home page.";
      showNotice();
    }
  });
});

function showNotice() {
  notice.classList.add("is-visible");
  window.clearTimeout(noticeTimer);

  noticeTimer = window.setTimeout(() => {
    notice.classList.remove("is-visible");
  }, 2800);
}
