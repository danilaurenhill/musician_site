function hideshow(content1) {
  if (!document.getElementById) return
  if (content1.style.display == "none") content1.style.display = "block"
  else content1.style.display = "none"
}
