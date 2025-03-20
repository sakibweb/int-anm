class INTanm {
    constructor() {
        this.animatedElements = [];
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), { threshold: 0.2 }); // Start animation when 20% of element is visible
        this.initialize();
    }

    initialize() {
        const elements = document.querySelectorAll('.int-anm');
        elements.forEach(element => {
            this.setupElement(element);
        });
    }

    setupElement(element) {
        let initialValue = this.parseValue(element.textContent);
        element.dataset.animValue = initialValue; // Store parsed initial value
        element.dataset.currentValue = initialValue; // Store current displayed value
        this.animatedElements.push(element);
        this.observer.observe(element); // Observe for viewport entry

        // MutationObserver to watch for text content changes
        const observer = new MutationObserver(mutationsList => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    this.animateNumberChange(element);
                }
            }
        });
        observer.observe(element, { subtree: true, childList: true, characterData: true });
    }

    handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.animateInitialValue(entry.target);
                observer.unobserve(entry.target); // Animate once on initial viewport entry
            }
        });
    }

    animateInitialValue(element) {
        const targetValue = parseFloat(element.dataset.animValue);
        if (isNaN(targetValue)) return; // Exit if not a valid number

        this.animateValue(element, 0, targetValue); // Animate from 0 to initial value
    }


    animateNumberChange(element) {
        const newValue = this.parseValue(element.textContent);
        const currentValue = parseFloat(element.dataset.currentValue);

        if (isNaN(newValue) || isNaN(currentValue) || newValue === currentValue) return; // No animation if parse fails or value is same

        element.dataset.animValue = newValue; // Update stored target value
        this.animateValue(element, currentValue, newValue);
    }

    animateValue(element, startValue, endValue) {
        let currentValue = startValue;
        const duration = 1000; // Animation duration in milliseconds
        const startTime = performance.now();
        const diff = Math.abs(endValue - startValue);
        //let step = 1; // old step

        // Calculate step dynamically based on diff - more rate
        let step = Math.ceil(diff / 50); // Adjust divisor (50) to control rate. Higher divisor = slower, Lower divisor = faster
        step = Math.max(1, step); // Ensure step is at least 1


        const animateStep = (timestamp) => {
            const progress = Math.min(1, (timestamp - startTime) / duration);
            let nextValue;

            if (startValue < endValue) {
                nextValue = startValue + (endValue - startValue) * progress;
            } else {
                nextValue = startValue - (startValue - endValue) * progress;
            }

            currentValue = this.stepValue(currentValue, nextValue, step, endValue);


            element.textContent = this.formatValue(element.textContent, currentValue);
            element.dataset.currentValue = currentValue; // Update current displayed value

            if (progress < 1) {
                requestAnimationFrame(animateStep);
            } else {
                element.textContent = this.formatValue(element.textContent, endValue); // Ensure final value is exact
                element.dataset.currentValue = endValue;
            }
        };

        requestAnimationFrame(animateStep);
    }

    stepValue(current, next, step, target) {
        if (Math.abs(target - current) <= step) {
            return target; // Directly set to target if close enough
        }

        if (current < target) {
            return Math.min(target, current + step);
        } else {
            return Math.max(target, current - step);
        }
    }


    parseValue(text) {
        const numberMatch = text.match(/[-+]?[\d.,]+/); // Regex to find numbers with decimals and commas
        if (numberMatch) {
            let numberStr = numberMatch[0].replace(/,/g, ''); // Remove commas for parsing
            return parseFloat(numberStr);
        }
        return NaN; // Not a Number if parsing fails
    }


    formatValue(originalText, numberValue) {
        if (isNaN(numberValue)) return originalText;

        const numberStr = numberValue.toLocaleString(undefined, { maximumFractionDigits: 2 }); // Format with commas

        let formattedText = originalText.replace(/[-+]?[\d.,]+/, numberStr); // Replace first found number

        return formattedText;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new INTanm();
});
