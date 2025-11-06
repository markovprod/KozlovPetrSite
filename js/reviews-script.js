(() => {
	const revTrack = document.querySelector('.reviews-track');
	const revPrevBtn = document.querySelector('.reviews-btn.prev');
	const revNextBtn = document.querySelector('.reviews-btn.next');
    
	const revCards = document.querySelectorAll('.review-card');
	const revFirstCard = revCards[0];
    
	let revPositionIndex = 0;
    
	function revGetCardWidth() {
	  const cs = getComputedStyle(revFirstCard);
	  return (
	    revFirstCard.offsetWidth +
	    parseInt(cs.marginLeft, 10) +
	    parseInt(cs.marginRight, 10)
	  );
	}
    
	function revUpdateTrackPosition() {
	  const fullWidth = revGetCardWidth();
	  revTrack.style.transform = `translateX(${-revPositionIndex * fullWidth}px)`;
	  revUpdateButtonsState();
	}
    
	function revUpdateButtonsState() {
	  const fullWidth = revGetCardWidth();
	  const visible = Math.floor(revTrack.parentElement.offsetWidth / fullWidth);
	  const maxIndex = revCards.length - visible;
    
	  const prevPath = revPrevBtn.querySelector('path');
	  const nextPath = revNextBtn.querySelector('path');
    
	  if (!prevPath || !nextPath) return;
    
	  // prev button
	  prevPath.setAttribute(
	    'fill',
	    revPositionIndex <= 0 ? '#BABABA' : '#141414'
	  );
    
	  // next button
	  nextPath.setAttribute(
	    'fill',
	    revPositionIndex >= maxIndex ? '#BABABA' : '#141414'
	  );
	}
    
	revNextBtn.addEventListener('click', () => {
	  const visible = Math.floor(
	    revTrack.parentElement.offsetWidth / revGetCardWidth()
	  );
	  if (revPositionIndex < revCards.length - visible) {
	    revPositionIndex++;
	    revUpdateTrackPosition();
	  }
	});
    
	revPrevBtn.addEventListener('click', () => {
	  if (revPositionIndex > 0) {
	    revPositionIndex--;
	    revUpdateTrackPosition();
	  }
	});
    
	window.addEventListener('resize', revUpdateTrackPosition, { passive: true });
    
	// init
	revUpdateTrackPosition();
    })();