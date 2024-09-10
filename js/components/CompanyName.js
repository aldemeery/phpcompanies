const CompanyName = (function () {
    function CompanyName(el) {
        this.el = el;
        this.hooks = [];
        this.value = new URLSearchParams(window.location.search).get('company')?.toLowerCase() || "";

        this.render();
        let timeoutId;

        this.addEventListener('input', (e) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                this.value = e.target.value;

                const url = new URL(window.location);
                url.searchParams.set('company', this.value);
                window.history.replaceState({}, '', url);

                this.hooks.forEach(callback => callback(this.value));
            }, 300);
        });
    };

    CompanyName.prototype.getValue = function () {
        return this.value;
    };

    CompanyName.prototype.hook = function (callback) {
        this.hooks.push(callback);
    }

    CompanyName.prototype.addEventListener = function (event, callback) {
        this.el.addEventListener(event, callback);
    };

    CompanyName.prototype.render = function () {
        this.el.value = this.value;
    };

    return CompanyName;
})();
