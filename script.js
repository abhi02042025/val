document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to sections on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add floating hearts animation
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = ['💖', '💕', '💗', '💓', '💘'][Math.floor(Math.random() * 5)];
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animation = 'floatUp 5s linear forwards';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createHeart, 3000);

    // CSS for floating hearts
    const style = document.createElement('style');
    style.textContent = `@keyframes floatUp { to { transform: translateY(-100vh); opacity: 0; } }`;
    document.head.appendChild(style);

    // Audio control
    const audio = document.getElementById('song');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const musicToggle = document.getElementById('musicToggle');
    const playIcon = '<i class="fas fa-play"></i> Play';
    const pauseIcon = '<i class="fas fa-pause"></i> Pause';

    // Autoplay music on page load
    setTimeout(() => {
        audio.play().catch(error => {
            console.log('Autoplay blocked by browser - user can click to play');
        });
    }, 500);

    // Music toggle button at top
    if (musicToggle) {
        musicToggle.addEventListener('click', function() {
            if (audio.paused) {
                audio.play().catch(error => {
                    console.log('Autoplay prevented, user interaction needed');
                });
                musicToggle.classList.add('playing');
                musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                audio.pause();
                musicToggle.classList.remove('playing');
                musicToggle.innerHTML = '<i class="fas fa-music"></i>';
            }
        });
    }

    // Play pause button in card (appears after interaction)
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function() {
            if (audio.paused) {
                audio.play().catch(error => {
                    console.log('Autoplay prevented, user interaction needed');
                });
                playPauseBtn.innerHTML = pauseIcon;
                if (musicToggle) musicToggle.classList.add('playing');
            } else {
                audio.pause();
                playPauseBtn.innerHTML = playIcon;
                if (musicToggle) musicToggle.classList.remove('playing');
            }
        });
    }

    // Update music toggle button when audio is loaded or state changes
    audio.addEventListener('play', function() {
        if (musicToggle) musicToggle.classList.add('playing');
        if (playPauseBtn) playPauseBtn.innerHTML = pauseIcon;
    });

    audio.addEventListener('pause', function() {
        if (musicToggle) musicToggle.classList.remove('playing');
        if (playPauseBtn) playPauseBtn.innerHTML = playIcon;
    });

    // Valentine's Day Proposal
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const timeBtn = document.getElementById('timeBtn');
    const proposalText = document.querySelector('.proposal-text');

    let foreverClickCount = 0;
    const requiredClicks = 7;

    if (yesBtn && noBtn) {
        // Make "No" button move when hovered
        noBtn.addEventListener('mouseover', function() {
            const maxX = window.innerWidth - noBtn.offsetWidth - 100;
            const maxY = window.innerHeight - noBtn.offsetHeight - 100;
            noBtn.style.position = 'fixed';
            noBtn.style.left = Math.random() * maxX + 'px';
            noBtn.style.top = Math.random() * maxY + 'px';
            noBtn.style.zIndex = '1000';
        });

        // Main click handler
        yesBtn.addEventListener('click', function() {
            if (!yesBtn.classList.contains('confirmed')) {
                // First click - show popup immediately
                proposalText.innerHTML = 'Yay! You said YES! 💕🎉<br><br>My dearest KAMMO, you\'ve made me the happiest person in the world! 💖<br>Your love is my everything, my sunshine, my stars, my universe. 🌟<br>I promise to love you, cherish you, and make you smile every single day. ❤️<br><br>Happy Valentine\'s Day, my love! Forever yours. 💑';
                proposalText.classList.add('final-message');
                yesBtn.classList.add('confirmed');
                yesBtn.style.display = 'none';
                noBtn.style.display = 'none';
                timeBtn.style.display = 'none';

                // Celebration hearts
                for (let i = 0; i < 30; i++) {
                    setTimeout(() => createCelebrationHeart(), i * 150);
                }

                // Show popup after short delay
                setTimeout(() => {
                    showNavigationPopup();
                }, 1500);
            }
        });
    }

    // Time button functionality
    if (timeBtn) {
        timeBtn.addEventListener('click', function() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                hour12: true,
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit'
            });
            
            // Show time in a popup or alert
            alert(`Current Time: ${timeString} 💕\n\nThe moment you said "Forever & Always!" is forever etched in time! ⏰`);
        });
    }

    // Celebration heart function
    function createCelebrationHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = ['💖', '💕', '💗', '💓', '💘'][Math.floor(Math.random() * 5)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.zIndex = '9999';
        heart.style.pointerEvents = 'none';
        heart.style.animation = 'celebrate 3s ease-out forwards';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }

    // Navigation popup function
    function showNavigationPopup() {
        const popupOverlay = document.createElement('div');
        popupOverlay.id = 'navigation-popup';
        popupOverlay.className = 'popup-overlay';
        popupOverlay.innerHTML = `
            <div class="popup-content">
                <div class="popup-header">
                    <h2>🎉 You said YES! 💕</h2>
                    <p>My dearest KAMMO, you've made me the happiest person in the world! You are truly my forever! 💑</p>
                    <p>Now discover these special surprises I created just for you:</p>
                </div>
                <div class="popup-buttons">
                    <a href="memories.html" class="popup-btn memories-btn">
                        <div class="btn-icon">📸</div>
                        <div class="btn-text">
                            <h3>Our Beautiful Memories</h3>
                            <p>Explore our cherished moments together</p>
                        </div>
                    </a>
                    <a href="loveletter.html" class="popup-btn love-letter-btn">
                        <div class="btn-icon">💌</div>
                        <div class="btn-text">
                            <h3>My Love Letter</h3>
                            <p>Read my heartfelt words written from the heart</p>
                        </div>
                    </a>
                </div>
                <div class="popup-footer">
                    <p>Your patience and love mean everything to me! I love you endlessly! 💖</p>
                    <button id="close-popup" class="close-btn">Continue Our Love Story 💕</button>
                </div>
            </div>
        `;

        document.body.appendChild(popupOverlay);

        document.getElementById('close-popup').addEventListener('click', function() {
            popupOverlay.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => {
                popupOverlay.remove();
                startRomanticJourney();
            }, 500);
        });

        setTimeout(() => {
            popupOverlay.style.animation = 'popupFadeIn 0.5s ease-out';
        }, 100);
    }

    // Start romantic journey
    function startRomanticJourney() {
        setTimeout(() => {
            const songCard = document.querySelector('.card');
            songCard.style.display = 'block';
            songCard.style.animation = 'slideUp 1s ease-out';

            audio.play().then(() => {
                playPauseBtn.innerHTML = pauseIcon;
                setTimeout(() => showGuidanceSteps(), 4000);
            }).catch(error => {
                audio.style.display = 'block';
                audio.controls = true;
                playPauseBtn.style.display = 'none';
                setTimeout(() => showGuidanceSteps(), 3000);
            });
        }, 1000);
    }

    // Guidance steps function
    function showGuidanceSteps() {
        const guidanceSection = document.createElement('section');
        guidanceSection.id = 'guidance-section';
        guidanceSection.className = 'guidance-section';
        guidanceSection.innerHTML = `
            <div class="guidance-container">
                <h2>🎵 Our song is playing... let's continue our journey! 💕</h2>
                <p class="guidance-intro">Take your time exploring these special pages I created for you:</p>
                <div class="guidance-steps">
                    <div class="step step-1">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h3>📸 Our Memories</h3>
                            <p>Click "Our Memories" in the navigation to see our beautiful photo gallery and favorite moments together.</p>
                            <a href="memories.html" class="step-link">Visit Memories →</a>
                        </div>
                    </div>
                    <div class="step step-2">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h3>💌 My Love Letter</h3>
                            <p>Click "Love Letter" to read my heartfelt letter written especially for you.</p>
                            <a href="loveletter.html" class="step-link">Read Love Letter →</a>
                        </div>
                    </div>
                    <div class="step step-3">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h3>🎵 Our Song</h3>
                            <p>Enjoy our special love song playing above while you explore. Every moment with you is magical! 💑</p>
                        </div>
                    </div>
                </div>
                <div class="guidance-footer">
                    <p>Thank you for being my Valentine. I love you more than words can express! 💖</p>
                    <p style="font-size: 0.9em; margin-top: 10px;">Created with all my love on February 3, 2026</p>
                </div>
            </div>
        `;

        const songCard = document.querySelector('.card');
        songCard.parentNode.insertBefore(guidanceSection, songCard.nextSibling);

        setTimeout(() => {
            guidanceSection.style.animation = 'fadeInUp 1s ease-out';
        }, 100);
    }

    // Add celebration CSS
    const celebrateStyle = document.createElement('style');
    celebrateStyle.textContent = `
        @keyframes celebrate {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(celebrateStyle);
});
