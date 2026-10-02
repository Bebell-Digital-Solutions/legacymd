

  // Create loader element
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.setAttribute('aria-busy', 'true');
  loader.setAttribute('aria-label', 'Loading page');
  loader.innerHTML = '<div class="progress" role="status"></div>';
  document.body.appendChild(loader);

  // Remove loader when page is loaded
  const loadTimeout = setTimeout(() => {
    hideLoader();
  }, 5000); // Fallback timeout

  window.addEventListener('load', function() {
    clearTimeout(loadTimeout);
    hideLoader();
  });

  function hideLoader() {
    loader.setAttribute('aria-busy', 'false');
    loader.classList.add('hidden');
    setTimeout(() => {
      loader.remove();
      document.body.setAttribute('aria-live', 'polite');
      document.body.insertAdjacentHTML('afterbegin', '<span class="sr-only">Page loading complete</span>');
    }, 500);
  }

  // For screen readers (add to your CSS)
  document.head.insertAdjacentHTML('beforeend', '<style>.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }</style>');
