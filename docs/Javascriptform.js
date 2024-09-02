document.getElementById('business-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const previewName = formData.get('businessName');
    const previewWebsite = formData.get('website');
    document.getElementById('preview-business-name').textContent = previewName || 'Business Name';
    document.getElementById('preview-website').textContent = previewWebsite || 'Website URL';
    
    const fileInput = document.getElementById('logo');
    const previewLogo = document.getElementById('preview-logo');
    
    if (fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = function(e) {
        previewLogo.src = e.target.result;
      };
      reader.readAsDataURL(fileInput.files[0]);
    } else {
      previewLogo.src = '';
    }
  });
  