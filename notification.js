export function createNotification(type) {
  let body = document.body;
  let ntf_con = document.getElementById("ntf_con");

  // Create notification container only once
  if (!ntf_con) {
    ntf_con = document.createElement("div");
    ntf_con.id = "ntf_con";
    ntf_con.style.position = "fixed";
    ntf_con.style.top = "20px";
    ntf_con.style.left = "50%";
    ntf_con.style.transform = "translateX(-50%)";
    ntf_con.style.zIndex = "1000";
    ntf_con.style.display = "flex";
    ntf_con.style.flexDirection = "column";
    ntf_con.style.gap = "10px"; // Space between notifications
    body.appendChild(ntf_con);
  }

  // Create new notification
  let ntf = document.createElement("div");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let ul = document.createElement("ul");
  let close = document.createElement("button");

  // Default styles
  ntf.style.display = "flex";
  ntf.style.justifyContent = "space-between";
  ntf.style.alignItems = "center";
  ntf.style.padding = "0 30px";
  ntf.style.width = "400px";
  ntf.style.height = "80px";
  ntf.style.borderRadius = "32px";
  ntf.style.position = "relative";
  ntf.style.opacity = "0"; // Start invisible
  ntf.style.transform = "translateX(100%)"; // Start off-screen (right side)
  ntf.style.transition = "opacity 0.5s ease, transform 0.5s ease-out"; // Smooth transition

  ul.style.listStyleType = "none";
  h3.style.fontSize = "34px";
  h3.style.fontWeight = "500";
  close.innerHTML = "✖️";
  close.style.fontSize = "20px";
  close.style.cursor = "pointer";

  ul.appendChild(h3);
  ntf.appendChild(ul);
  ntf.appendChild(close);
  ntf_con.appendChild(ntf);

  // Animate notification in (after appending)
  setTimeout(() => {
    ntf.style.opacity = "1";
    ntf.style.transform = "translateX(0)"; // Move to normal position
  }, 10);

  // Handle notification types
  switch (type) {
    case "success":
      ntf.style.backgroundColor = "#4CAF50";
      h3.innerHTML = "Success!";
      break;
    case "warning":
      ntf.style.backgroundColor = "#FF9800";
      h3.innerHTML = "Warning!";
      break;
    case "fail":
      ntf.style.backgroundColor = "#F44336";
      h3.style.fontSize = "20px";
      h3.innerHTML = "Oh snap!";
      p.style.fontSize = "12px";
      p.innerHTML = "Change a few things up submitting again.";
      ul.appendChild(p);
      break;
    default:
      ntf.style.backgroundColor = "#2196F3";
      h3.innerHTML = "Info!";
      break;
  }

  // Close notification when clicked
  close.addEventListener("click", () => {
    ntf.style.opacity = "0";
    ntf.style.transform = "translateX(100%)"; // Slide out to the right
    setTimeout(() => ntf.remove(), 500); // Remove after animation
  });

  // Auto-remove after 3 seconds
  setTimeout(() => {
    ntf.style.opacity = "0";
    ntf.style.transform = "translateX(100%)"; // Slide out to the right
    setTimeout(() => ntf.remove(), 500); // Remove after animation
  }, 3000);
}
