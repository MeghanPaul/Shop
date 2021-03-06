const logoutBtn = document.getElementById("logout");

const handleLogout = async (event) => {
  console.log("try to logout");
  event.preventDefault();

  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert("Oops! There was an issue logging you out.");
  }
};

logoutBtn.addEventListener("click", handleLogout);
