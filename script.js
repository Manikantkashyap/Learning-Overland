function uploadContent(event) {
  const file = event.target.files[0];
  if (file) {
    alert(`Uploaded: ${file.name}`);
    // You can implement backend/GitHub upload logic here
  }
}

