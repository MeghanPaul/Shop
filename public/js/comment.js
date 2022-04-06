async function commentFormHandler(event) {
  event.preventDefault();

  const text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  const product_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        product_id,
        text,
      }),
      headers: { "content-type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);