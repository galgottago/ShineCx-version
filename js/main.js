(function () {
  var toggle = document.querySelector(".nav-toggle");
  var panel = document.querySelector(".nav-panel");
  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        panel.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  var form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var org = (data.get("org") || "").toString().trim();
      var email = (data.get("email") || "").toString().trim();
      var type = (data.get("type") || "").toString().trim();
      var message = (data.get("message") || "").toString().trim();
      var body = [
        "Name: " + name,
        "Organization: " + org,
        "Email: " + email,
        "Project type: " + type,
        "",
        message
      ].join("\n");
      var href =
        "mailto:71wagon@gmail.com?subject=" +
        encodeURIComponent("ShineCX project inquiry") +
        "&body=" +
        encodeURIComponent(body);
      window.location.href = href;
    });
  }
})();
