/**
 * i18n Manager - Multi-language Support
 * Supports 12 languages: ko, en, ja, zh, es, pt, id, tr, de, fr, hi, ru
 */

class I18n {
    constructor() {
        this.translations = {};
        this.supportedLanguages = ['ko', 'en', 'ja', 'zh', 'es', 'pt', 'id', 'tr', 'de', 'fr', 'hi', 'ru'];
        this.currentLang = this.detectLanguage();
        this.isLoading = false;
    }

    /**
     * Detect user's preferred language
     */
    detectLanguage() {
        // Check localStorage first
        const stored = localStorage.getItem('blood-type-lang');
        if (stored && this.supportedLanguages.includes(stored)) {
            return stored;
        }

        // Check browser language
        const browserLang = navigator.language.split('-')[0];
        if (this.supportedLanguages.includes(browserLang)) {
            return browserLang;
        }

        // Default to English
        return 'en';
    }

    /**
     * Load translation file for a language
     */
    async loadTranslations(lang) {
        if (this.translations[lang]) {
            return this.translations[lang];
        }

        try {
            const response = await fetch(`js/locales/${lang}.json`);
            if (!response.ok) throw new Error(`Failed to load ${lang}`);
            this.translations[lang] = await response.json();
            return this.translations[lang];
        } catch (err) {
            console.error(`Error loading language ${lang}:`, err);
            // Fallback to English
            if (lang !== 'en') {
                return this.loadTranslations('en');
            }
            return {};
        }
    }

    /**
     * Get translated string by key (dot notation: 'app.title')
     */
    t(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return typeof value === 'string' ? value : key;
    }

    /**
     * Initialize i18n and load translations
     */
    async init() {
        if (this.isLoading) return;
        this.isLoading = true;

        try {
            await this.loadTranslations(this.currentLang);
            this.updateUI();
        } catch (err) {
            console.error('Failed to initialize i18n:', err);
        }

        this.isLoading = false;
    }

    /**
     * Set language and update UI
     */
    async setLanguage(lang) {
        if (!this.supportedLanguages.includes(lang)) return;

        this.currentLang = lang;
        localStorage.setItem('blood-type-lang', lang);

        await this.loadTranslations(lang);
        this.updateUI();
    }

    /**
     * Update all DOM elements with data-i18n attribute
     */
    updateUI() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translated = this.t(key);

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translated;
            } else {
                element.textContent = translated;
            }
        });

        // Update document language
        document.documentElement.lang = this.currentLang;
    }

    /**
     * Get current language
     */
    getCurrentLanguage() {
        return this.currentLang;
    }

    /**
     * Get language display name
     */
    getLanguageName(lang) {
        const names = {
            'ko': '한국어',
            'en': 'English',
            'ja': '日本語',
            'zh': '中文',
            'es': 'Español',
            'pt': 'Português',
            'id': 'Bahasa Indonesia',
            'tr': 'Türkçe',
            'de': 'Deutsch',
            'fr': 'Français',
            'hi': 'हिन्दी',
            'ru': 'Русский'
        };
        return names[lang] || lang;
    }
}

// Initialize global i18n instance
const i18n = new I18n();
