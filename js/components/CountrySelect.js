const CountrySelect = (function () {
    function CountrySelect(el, countries) {
        this.el = el;
        this.hooks = [];
        this.countries = countries;
        this.selectedCountry = this.countries[new URLSearchParams(window.location.search).get('country')?.toUpperCase()] || null;

        this.render();
        this.addEventListener('change', event => {
            const country = event.target.value.toUpperCase();
            this.selectedCountry = this.countries[country] || null;

            const url = new URL(window.location);
            url.searchParams.set('country', country);
            window.history.replaceState({}, '', url);

            this.hooks.forEach(callback => callback(this.selectedCountry));
        });
    };

    CountrySelect.prototype.getCountry = function () {
        return this.selectedCountry;
    };

    CountrySelect.prototype.hook = function (callback) {
        this.hooks.push(callback);
    }

    CountrySelect.prototype.addEventListener = function (event, callback) {
        this.el.addEventListener(event, callback);
    };

    CountrySelect.prototype.render = function () {
        const placeholder = '<option value="">Select a country</option>';

        const options = Object.values(countries).sort((a, b) => a.name.localeCompare(b.name)).map(country => {
            return `<option value="${country.code}" ${this.selectedCountry?.code === country.code ? 'selected' : ''}>${country.flag} ${country.name}</option>`;
        });

        this.el.innerHTML = placeholder.concat(options);
    };

    return CountrySelect;
})();
