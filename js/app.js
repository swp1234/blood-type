/**
 * Blood Type Personality Analysis App
 * Viral personality test with AI deep analysis, compatibility chart, and SNS sharing
 */

class BloodTypeApp {
    constructor() {
        this.currentBloodType = null;
        this.selectedTab = 'personality';
        this.particleSystem = null;
        this.initializeElements();
        this.attachEventListeners();
    }

    /**
     * Blood type data with 15+ characteristics each
     */
    getBloodTypeData() {
        return {
            'A': {
                title: 'Type A - The Perfectionist',
                summary: 'Organized, reliable, and detail-oriented. You take pride in your work and maintain high standards.',
                color: '#e74c3c',
                emoji: '🔴',
                strengths: [
                    'Well-organized and disciplined',
                    'Reliable and dependable',
                    'Detail-oriented and thorough',
                    'Creative problem-solver',
                    'Loyal friend and partner',
                    'Excellent planner',
                    'Patient and considerate'
                ],
                weaknesses: [
                    'Perfectionist tendencies',
                    'Can be overly cautious',
                    'May worry excessively',
                    'Difficulty adapting to change',
                    'Prone to stress-related issues',
                    'Self-critical nature',
                    'Struggles with spontaneity'
                ],
                loveStyle: 'You seek deep, meaningful connections with a single partner. You\'re loyal, thoughtful, and show love through acts of service and dedication. You prefer gradual relationship development over rushing into things.',
                careerFit: 'Excels in roles requiring attention to detail: accounting, engineering, research, project management, quality control, and administration. Your organizational skills make you valuable in any structured environment.',
                stressRelief: 'Find peace through meditation, yoga, or organizing activities. Create a calm workspace. Practice time management to reduce anxiety. Engage in hobbies that require focus and precision.',
                famous: ['Queen Elizabeth II', 'Prince William', 'Marilyn Monroe', 'Britney Spears'],
                health: {
                    strengths: 'Strong immune system, generally healthy digestion',
                    tips: [
                        'Manage stress through relaxation techniques',
                        'Regular exercise improves both mental and physical health',
                        'Balance protein and vegetables in your diet',
                        'Avoid excessive caffeine and stimulants',
                        'Practice proper sleep hygiene'
                    ]
                }
            },
            'B': {
                title: 'Type B - The Adventurer',
                summary: 'Flexible, spontaneous, and creative. You embrace change and love exploring new possibilities.',
                color: '#e74c3c',
                emoji: '🟤',
                strengths: [
                    'Adaptable and flexible',
                    'Optimistic and positive outlook',
                    'Creative and imaginative',
                    'Natural communicator',
                    'Enjoys meeting new people',
                    'Resilient in challenges',
                    'Independent thinker'
                ],
                weaknesses: [
                    'May lack focus and direction',
                    'Can be inconsistent',
                    'Difficulty with long-term planning',
                    'Tendency to be selfish',
                    'Impulsive decision-making',
                    'May avoid responsibility',
                    'Struggles with routine'
                ],
                loveStyle: 'You value freedom and independence in relationships. You\'re passionate and energetic, but need space to pursue your interests. You prefer partners who share your sense of adventure and don\'t demand constant attention.',
                careerFit: 'Thrives in dynamic environments: sales, entrepreneurship, entertainment, freelancing, marketing, and creative fields. You excel when given autonomy and variety in your work.',
                stressRelief: 'Seek new experiences and adventures. Travel, try new hobbies, socialize with diverse groups. Physical activity like sports or dance helps release tension. Avoid monotonous routines.',
                famous: ['Brad Pitt', 'Prince Harry', 'Steven Spielberg', 'Air Nasarawa'],
                health: {
                    strengths: 'Balanced immune system, good stress recovery',
                    tips: [
                        'Physical exercise and sports are essential',
                        'Balance diet with variety in foods',
                        'Avoid stress by maintaining active lifestyle',
                        'Social interactions boost your well-being',
                        'Set healthy boundaries to prevent burnout'
                    ]
                }
            },
            'O': {
                title: 'Type O - The Leader',
                summary: 'Confident, energetic, and natural leader. You inspire others with your charisma and determination.',
                color: '#e74c3c',
                emoji: '⭕',
                strengths: [
                    'Natural leader and influencer',
                    'Confident and decisive',
                    'Strong sense of responsibility',
                    'Protective of loved ones',
                    'Ambitious and goal-oriented',
                    'Excellent at motivating others',
                    'High energy and enthusiasm'
                ],
                weaknesses: [
                    'Stubborn and inflexible',
                    'Can be overly competitive',
                    'Difficulty admitting mistakes',
                    'Impatient with slower colleagues',
                    'May dominate conversations',
                    'Risk of burnout from overwork',
                    'Can be aggressive under pressure'
                ],
                loveStyle: 'You\'re passionate and devoted partners who need someone equally strong-willed. You express love through grand gestures and direct communication. You want a partner who respects your independence and shares your ambitions.',
                careerFit: 'Perfect for leadership roles: CEO, manager, entrepreneur, military, politics, sales, and public speaking. Your natural authority and confidence make you excel in high-pressure environments.',
                stressRelief: 'Channel energy into competitive sports or challenging activities. Set clear goals and track progress. Delegate tasks to avoid overwhelm. Take breaks to prevent exhaustion. Practice empathy to balance ambition.',
                famous: ['Prince Philip', 'Arnold Schwarzenegger', 'Steve Jobs', 'Rock Hudson'],
                health: {
                    strengths: 'Strong digestive system, high energy levels',
                    tips: [
                        'Intense exercise programs suit your energy',
                        'High protein diet supports your metabolism',
                        'Manage competitive stress with adequate rest',
                        'Avoid overcommitting to prevent burnout',
                        'Regular health checkups recommended'
                    ]
                }
            },
            'AB': {
                title: 'Type AB - The Intellectual',
                summary: 'Unique, analytical, and diplomatic. You see both sides of issues and seek harmony in all relationships.',
                color: '#e74c3c',
                emoji: '🅰️',
                strengths: [
                    'Logical and analytical thinker',
                    'Good at seeing multiple perspectives',
                    'Natural diplomat and mediator',
                    'Calm under pressure',
                    'Trustworthy and reliable',
                    'Socially adaptable',
                    'Excellent listener'
                ],
                weaknesses: [
                    'Can be difficult to understand',
                    'Tendency to be overly critical',
                    'May struggle with emotional expression',
                    'Indecisive due to seeing all sides',
                    'Can seem cold or aloof',
                    'Difficulty making quick decisions',
                    'May isolate themselves emotionally'
                ],
                loveStyle: 'You approach relationships intellectually and seek mental connection first. You appreciate partners who engage you in deep conversations. You\'re loyal but reserved, showing love through thoughtful gestures and understanding.',
                careerFit: 'Excels in analytical and strategic roles: scientist, researcher, consultant, analyst, engineer, philosopher, and counselor. You thrive in roles requiring balanced judgment and calm decision-making.',
                stressRelief: 'Engage in intellectual pursuits like reading or learning. Seek peaceful environments. Balance social time with solitude. Practice expressing emotions through writing or art. Find careers that stimulate your mind.',
                famous: ['Marilyn Monroe', 'Thomas Edison', 'Jackie Chan', 'Ke$ha'],
                health: {
                    strengths: 'Adaptable immune system, moderate energy',
                    tips: [
                        'Balance intellectual work with physical activity',
                        'Varied diet with focus on balance',
                        'Mental relaxation techniques essential',
                        'Regular sleep schedule important',
                        'Build strong social connections for well-being'
                    ]
                }
            }
        };
    }

    /**
     * Compatibility matrix (1-5 stars)
     */
    getCompatibilityMatrix() {
        return {
            'A': { 'A': 5, 'B': 3, 'O': 4, 'AB': 4 },
            'B': { 'A': 3, 'B': 4, 'O': 4, 'AB': 4 },
            'O': { 'A': 4, 'B': 4, 'O': 5, 'AB': 3 },
            'AB': { 'A': 4, 'B': 4, 'O': 3, 'AB': 5 }
        };
    }

    /**
     * Global blood type distribution data
     */
    getDistributionData() {
        return {
            'A': { percentage: 34, region: 'Most common globally' },
            'B': { percentage: 26, region: 'Common in Asia' },
            'O': { percentage: 24, region: 'Universal donor' },
            'AB': { percentage: 16, region: 'Rarest type' }
        };
    }

    /**
     * Initialize DOM elements
     */
    initializeElements() {
        this.selectionScreen = document.getElementById('selection-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.backBtn = document.getElementById('back-btn');
        this.tabButtons = document.querySelectorAll('.tab-btn');
        this.tabContents = document.querySelectorAll('.tab-content');
        this.bloodTypeButtons = document.querySelectorAll('.blood-type-btn');
        this.shareSection = document.getElementById('share-section');
        this.premiumModal = document.getElementById('premium-modal');
        this.modalClose = document.querySelector('.modal-close');
        this.watchAdBtn = document.getElementById('watch-ad-btn');
        this.shareBtn = document.getElementById('share-btn');
        this.downloadBtn = document.getElementById('download-btn');
        this.particleCanvas = document.getElementById('particle-canvas');
    }

    /**
     * Attach event listeners
     */
    attachEventListeners() {
        // Blood type selection
        this.bloodTypeButtons.forEach(btn => {
            btn.addEventListener('click', () => this.selectBloodType(btn.dataset.bloodType));
        });

        // Back button
        this.backBtn.addEventListener('click', () => this.showSelectionScreen());

        // Tab switching
        this.tabButtons.forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        // Premium features
        document.querySelectorAll('.premium-btn').forEach(btn => {
            btn.addEventListener('click', () => this.showPremiumModal());
        });

        // Modal
        this.modalClose.addEventListener('click', () => this.closePremiumModal());
        this.watchAdBtn.addEventListener('click', () => this.watchAdAndUnlock());

        // Share buttons
        if (this.shareBtn) {
            this.shareBtn.addEventListener('click', () => this.shareResults());
        }
        if (this.downloadBtn) {
            this.downloadBtn.addEventListener('click', () => this.downloadResultCard());
        }

        // Language selector
        this.setupLanguageSelector();

        // Initialize particle system
        this.initParticleSystem();
    }

    /**
     * Setup language selector
     */
    setupLanguageSelector() {
        const langToggle = document.getElementById('lang-toggle');
        const langMenu = document.getElementById('lang-menu');
        const langOptions = document.querySelectorAll('.lang-option');

        langToggle.addEventListener('click', () => {
            langMenu.toggleAttribute('hidden');
        });

        langOptions.forEach(option => {
            option.addEventListener('click', async () => {
                const lang = option.dataset.lang;
                await i18n.setLanguage(lang);
                langMenu.setAttribute('hidden', '');
                // Update content if results are displayed
                if (this.currentBloodType) {
                    this.displayResults(this.currentBloodType);
                }
            });
        });

        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
                langMenu.setAttribute('hidden', '');
            }
        });
    }

    /**
     * Select blood type and display results
     */
    selectBloodType(type) {
        this.currentBloodType = type;
        this.displayResults(type);
    }

    /**
     * Display results for selected blood type
     */
    displayResults(type) {
        const data = this.getBloodTypeData()[type];
        if (!data) return;

        // Update header
        document.getElementById('result-blood-drop').textContent = type;
        document.getElementById('result-title').textContent = data.title;
        document.getElementById('result-summary').textContent = data.summary;

        // Personality tab
        this.displayPersonality(type);

        // Compatibility tab
        this.displayCompatibility(type);

        // Famous people tab
        this.displayFamousPeople(type);

        // Wellness tab
        this.displayWellness(type);

        // Distribution tab
        this.displayDistribution();

        // Show results screen
        this.selectionScreen.classList.remove('active');
        this.resultsScreen.classList.add('active');
        this.shareSection.removeAttribute('hidden');

        // Reset to first tab
        this.switchTab('personality');

        // Trigger particle effect
        this.triggerBloodDropEffect();
    }

    /**
     * Display personality information
     */
    displayPersonality(type) {
        const data = this.getBloodTypeData()[type];

        const strengthsList = document.getElementById('strengths-list');
        strengthsList.innerHTML = data.strengths
            .map(s => `<li>${s}</li>`)
            .join('');

        const weaknessesList = document.getElementById('weaknesses-list');
        weaknessesList.innerHTML = data.weaknesses
            .map(w => `<li>${w}</li>`)
            .join('');

        document.getElementById('love-style').textContent = data.loveStyle;
        document.getElementById('career-fit').textContent = data.careerFit;
        document.getElementById('stress-relief').textContent = data.stressRelief;
    }

    /**
     * Display compatibility chart
     */
    displayCompatibility(type) {
        const compatibility = this.getCompatibilityMatrix();
        const chartDiv = document.getElementById('compatibility-chart');
        const types = ['A', 'B', 'O', 'AB'];

        let html = '<div class="compatibility-header"></div>';
        types.forEach(t => {
            html += `<div class="compatibility-header">${t}</div>`;
        });

        types.forEach(currentType => {
            html += `<div class="compatibility-row">${currentType}</div>`;
            types.forEach(otherType => {
                const rating = compatibility[currentType][otherType];
                const stars = '⭐'.repeat(rating);
                html += `<div class="compatibility-cell" title="${rating}/5">
                    <span>${stars}</span>
                </div>`;
            });
        });

        chartDiv.innerHTML = html;
    }

    /**
     * Display famous people
     */
    displayFamousPeople(type) {
        const data = this.getBloodTypeData()[type];
        const famousDiv = document.getElementById('famous-people');

        famousDiv.innerHTML = data.famous
            .map(person => `
                <div class="famous-person">
                    <div class="emoji">🌟</div>
                    <div class="name">${person}</div>
                </div>
            `)
            .join('');
    }

    /**
     * Display wellness information
     */
    displayWellness(type) {
        const data = this.getBloodTypeData()[type];
        const wellnessDiv = document.getElementById('wellness-info');

        let html = `
            <div class="wellness-item">
                <h4>💪 Immune System</h4>
                <p>${data.health.strengths}</p>
            </div>
        `;

        html += data.health.tips
            .map(tip => `
                <div class="wellness-item">
                    <h4>✓ Wellness Tip</h4>
                    <p>${tip}</p>
                </div>
            `)
            .join('');

        wellnessDiv.innerHTML = html;
    }

    /**
     * Display blood type distribution
     */
    displayDistribution() {
        const distribution = this.getDistributionData();
        const containerDiv = document.getElementById('distribution-container');

        containerDiv.innerHTML = Object.entries(distribution)
            .map(([type, data]) => `
                <div class="distribution-item">
                    <div class="type">${type}</div>
                    <div class="bar">
                        <div class="fill" style="width: ${data.percentage}%"></div>
                    </div>
                    <div class="percentage">${data.percentage}%</div>
                    <p style="font-size: 12px; color: var(--color-text-secondary); margin-top: 8px;">
                        ${data.region}
                    </p>
                </div>
            `)
            .join('');
    }

    /**
     * Switch between tabs
     */
    switchTab(tabName) {
        this.selectedTab = tabName;

        // Update button states
        this.tabButtons.forEach(btn => {
            if (btn.dataset.tab === tabName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update content visibility
        this.tabContents.forEach(content => {
            if (content.id === `${tabName}-tab`) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        // Re-render ads
        if (typeof adsbygoogle !== 'undefined') {
            adsbygoogle.push({});
        }
    }

    /**
     * Show premium modal
     */
    showPremiumModal() {
        this.premiumModal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
    }

    /**
     * Close premium modal
     */
    closePremiumModal() {
        this.premiumModal.setAttribute('hidden', '');
        document.body.style.overflow = '';
    }

    /**
     * Watch ad and unlock premium content
     */
    async watchAdAndUnlock() {
        this.watchAdBtn.textContent = '⏳ Loading Ad...';
        this.watchAdBtn.disabled = true;

        // Simulate ad watching
        await new Promise(resolve => setTimeout(resolve, 2000));

        this.watchAdBtn.textContent = '🎬 Ad Playing... (28 sec)';

        await new Promise(resolve => setTimeout(resolve, 3000));

        // Show premium content
        const deepAnalysis = `
            <div class="trait-group" style="background: rgba(231, 76, 60, 0.15); border-left: 4px solid var(--color-primary);">
                <h3>🤖 AI Deep Analysis</h3>
                <p style="color: var(--color-text-primary);">
                    Based on your blood type, your subconscious behavioral patterns reveal:
                    <br/><br/>
                    <strong>Hidden Strength:</strong> Your ${this.currentBloodType} type predisposes you to unique problem-solving abilities that only become apparent under specific conditions.<br/>
                    <strong>Growth Path:</strong> Focus on leveraging your natural strengths while being aware of potential blind spots in relationships.<br/>
                    <strong>Compatibility Insight:</strong> Your best matches understand your subtle communication style and respect your personal boundaries.
                </p>
            </div>
        `;

        // Append to personality tab
        const personalityTab = document.getElementById('personality-tab');
        if (!personalityTab.querySelector('.premium-analysis')) {
            const div = document.createElement('div');
            div.className = 'premium-analysis';
            div.innerHTML = deepAnalysis;
            personalityTab.appendChild(div);
        }

        this.closePremiumModal();
        this.watchAdBtn.textContent = '✅ Premium Unlocked!';

        setTimeout(() => {
            this.watchAdBtn.textContent = '✨ AI Deep Analysis';
            this.watchAdBtn.disabled = false;
        }, 2000);
    }

    /**
     * Share results using Web Share API
     */
    async shareResults() {
        const data = this.getBloodTypeData()[this.currentBloodType];
        const shareData = {
            title: `My Blood Type: ${data.title}`,
            text: data.summary,
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('Share failed:', err);
                    this.fallbackShare();
                }
            }
        } else {
            this.fallbackShare();
        }
    }

    /**
     * Fallback share method
     */
    fallbackShare() {
        const data = this.getBloodTypeData()[this.currentBloodType];
        const text = `Check out my blood type personality analysis: ${data.title} - ${data.summary}`;
        const encodedText = encodeURIComponent(text);
        const currentUrl = encodeURIComponent(window.location.href);

        const shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${currentUrl}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }

    /**
     * Download result card as image
     */
    downloadResultCard() {
        const canvas = document.createElement('canvas');
        canvas.width = 1000;
        canvas.height = 1200;
        const ctx = canvas.getContext('2d');

        const data = this.getBloodTypeData()[this.currentBloodType];

        // Background
        ctx.fillStyle = '#0f0f23';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Header
        ctx.fillStyle = '#e74c3c';
        ctx.fillRect(0, 0, canvas.width, 200);

        // Title
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Blood Type ${this.currentBloodType}`, canvas.width / 2, 80);

        ctx.font = '32px Arial';
        ctx.fillText(data.title, canvas.width / 2, 140);

        // Content
        ctx.font = '24px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'left';

        let yPos = 250;
        const lineHeight = 40;

        ctx.fillText('Summary:', 50, yPos);
        yPos += lineHeight;

        ctx.font = '18px Arial';
        ctx.fillStyle = '#b0b0d4';
        const summary = data.summary;
        const words = summary.split(' ');
        let line = '';
        for (const word of words) {
            if (line.length + word.length > 50) {
                ctx.fillText(line, 50, yPos);
                yPos += 30;
                line = word;
            } else {
                line += (line ? ' ' : '') + word;
            }
        }
        if (line) ctx.fillText(line, 50, yPos);

        yPos += 80;

        // Download
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `blood-type-${this.currentBloodType}.png`;
        link.click();
    }

    /**
     * Initialize particle system
     */
    initParticleSystem() {
        const canvas = this.particleCanvas;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 4;
                this.vy = (Math.random() - 0.5) * 4;
                this.life = 1;
                this.decay = Math.random() * 0.02 + 0.015;
                this.size = Math.random() * 4 + 2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.vy += 0.1; // gravity
                this.life -= this.decay;
            }

            draw() {
                ctx.fillStyle = `rgba(231, 76, 60, ${this.life * 0.5})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                particles[i].draw();
                if (particles[i].life <= 0) {
                    particles.splice(i, 1);
                }
            }

            requestAnimationFrame(animate);
        };

        animate();

        this.particleSystem = { particles, canvas, ctx };
    }

    /**
     * Trigger blood drop particle effect
     */
    triggerBloodDropEffect() {
        if (!this.particleSystem) return;

        const { particles, canvas } = this.particleSystem;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        for (let i = 0; i < 50; i++) {
            const angle = (Math.PI * 2 * i) / 50;
            const distance = 100;
            const x = centerX + Math.cos(angle) * distance;
            const y = centerY + Math.sin(angle) * distance;

            const Particle = function(x, y) {
                this.x = x;
                this.y = y;
                this.vx = Math.cos(angle) * 3;
                this.vy = Math.sin(angle) * 3;
                this.life = 1;
                this.decay = 0.02;
                this.size = Math.random() * 4 + 2;

                this.update = function() {
                    this.x += this.vx;
                    this.y += this.vy;
                    this.vy += 0.1;
                    this.life -= this.decay;
                };

                this.draw = function() {
                    this.particleSystem.ctx.fillStyle = `rgba(231, 76, 60, ${this.life * 0.7})`;
                    this.particleSystem.ctx.beginPath();
                    this.particleSystem.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    this.particleSystem.ctx.fill();
                };
            };

            const p = new Particle(x, y);
            p.particleSystem = this.particleSystem;
            particles.push(p);
        }
    }

    /**
     * Show selection screen
     */
    showSelectionScreen() {
        this.resultsScreen.classList.remove('active');
        this.selectionScreen.classList.add('active');
        this.shareSection.setAttribute('hidden', '');
        this.currentBloodType = null;
        this.switchTab('personality');
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Initialize i18n
        try {
            await i18n.init();
        } catch (e) {
            console.warn('i18n init failed:', e);
        }

        // Initialize app
        const app = new BloodTypeApp();

        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            document.documentElement.setAttribute('data-theme', savedTheme);
            themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
            themeToggle.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme');
                const next = current === 'light' ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('theme', next);
                themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
            });
        }

        // Handle window resize for particle canvas
        window.addEventListener('resize', () => {
            if (app.particleSystem) {
                app.particleSystem.canvas.width = window.innerWidth;
                app.particleSystem.canvas.height = window.innerHeight;
            }
        });
    } catch(e) {
        console.error('Init error:', e);
    } finally {
        const loader = document.getElementById('app-loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 300);
        }
    }
});
