// Contact Form Submission
const handleContactSubmit = async (formData) => {
  try {
    const response = await fetch('https://your-django-api.com/api/contact/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) throw new Error('Failed to send');
    return { success: true };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: error.message };
  }
};

// Example for other endpoints (optional)
export const fetchItems = async () => {
  const response = await fetch('https://your-django-api.com/api/items/');
  return await response.json();
};
