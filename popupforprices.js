document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('priceInquiryPopup');
    const form = document.getElementById('inquiryForm');
    const span = document.getElementsByClassName('close')[0];

    // Function to open the popup
    function openPopup(section, package) {
        document.getElementById('section').value = section;
        document.getElementById('package').value = package;
        popup.style.display = 'block';
    }

    // Function to close the popup
    span.onclick = () => {
        popup.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    };

    // Handle form submission
    form.onsubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        fetch('submit_inquiry.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Inquiry submitted successfully!');
                popup.style.display = 'none';
                form.reset();
            } else {
                alert('Failed to submit inquiry.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    };
    
    // Example to open popup (use this where needed)
    // openPopup('Section Name', 'Package Name');
});