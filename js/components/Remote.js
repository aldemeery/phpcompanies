const Remote = (function () {
    function Remote(el) {
        this.el = el;
        this.hooks = [];
        this.checked = 'true' === (new URLSearchParams(window.location.search).get('remote')?.toLowerCase() || false);

        this.render();
        this.addEventListener('change', () => {
            this.checked = !this.checked;

            const url = new URL(window.location);
            url.searchParams.set('remote', this.checked);
            window.history.replaceState({}, '', url);

            this.hooks.forEach(callback => callback(this.checked));
        });
    };

    Remote.prototype.isChecked = function () {
        return this.checked;
    };

    Remote.prototype.hook = function (callback) {
        this.hooks.push(callback);
    }

    Remote.prototype.addEventListener = function (event, callback) {
        this.el.addEventListener(event, callback);
    };

    Remote.prototype.render = function () {
        if (this.checked) {
            this.el.setAttribute('checked', true);
        } else {
            this.el.removeAttribute('checked');
        }
    };

    return Remote;
})();
