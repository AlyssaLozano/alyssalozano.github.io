document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = form.querySelector('.form-message');
    if (msg) {
      msg.textContent = 'Thanks. This GitHub Pages version stores no data. Connect your form to Formspree, Basin, or Google Forms to receive submissions.';
    }
  });
});
