(() => {
	const faqAccordion = document.querySelector('.faq-accordion');
	if (!faqAccordion) return;
    
	const faqItems = faqAccordion.querySelectorAll('.faq-item');
    
	faqItems.forEach((item) => {
	  const header = item.querySelector('.faq-header');
	  const content = item.querySelector('.faq-content');
    
	  header.addEventListener('click', () => {
	    const isOpen = item.classList.contains('open');
    
	    // закрыть все остальные
	    faqItems.forEach(i => i.classList.remove('open'));
    
	    // открыть или закрыть текущий
	    if (!isOpen) item.classList.add('open');
	  });
	});
    })();