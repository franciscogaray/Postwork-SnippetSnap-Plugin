(function() {
    // Modern SVG Icons
    const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
    const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

    const initSnippetSnap = () => {
        const codeElements = document.querySelectorAll('code:not(.snippetsnap-processed)');

        codeElements.forEach((code) => {
            code.classList.add('snippetsnap-processed');
            
            const isBlock = code.parentElement.tagName === 'PRE';
            const targetElement = isBlock ? code.parentElement : code;

            const wrapper = document.createElement('div');
            wrapper.className = isBlock ? 'snippetsnap-wrapper block-code' : 'snippetsnap-wrapper inline-code';
            
            targetElement.parentNode.insertBefore(wrapper, targetElement);
            wrapper.appendChild(targetElement);

            const btn = document.createElement('button');
            btn.className = 'snippetsnap-copy-btn';
            btn.type = 'button';
            btn.innerHTML = copyIcon; // Set initial SVG
            wrapper.appendChild(btn);

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                navigator.clipboard.writeText(code.innerText.trim()).then(() => {
                    btn.innerHTML = checkIcon; // Switch to Checkmark
                    btn.classList.add('copied');

                    setTimeout(() => {
                        btn.innerHTML = copyIcon; // Revert to Copy
                        btn.classList.remove('copied');
                    }, 2000);
                });
            });
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSnippetSnap);
    } else {
        initSnippetSnap();
    }
})();