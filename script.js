function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key.toLowerCase() === 'q') {
    alert("Opening Admin Portal...");
    window.location.href = 'admin.html';
  }

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('admin') === '1') {
    window.location.href = 'admin.html'; // rename to your actual admin file
  }


});
