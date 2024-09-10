document.addEventListener('DOMContentLoaded', function () {
    window.countryComponent = new CountrySelect(document.querySelector('[data-component="country-select"]'), countries);
    window.remoteComponent = new Remote(document.querySelector('[data-component="remote"]'));
    window.companyNameComponent = new CompanyName(document.querySelector('[data-component="company-name"]'));
    window.companiesTableComponent = new CompaniesTable(document.querySelector('[data-component="companies-table"]'), companies, filters());

    window.countryComponent.hook((country) => {
        window.companiesTableComponent.filter(filters());
    });

    window.remoteComponent.hook((remote) => {
        window.companiesTableComponent.filter(filters());
    });

    window.companyNameComponent.hook((companyName) => {
        window.companiesTableComponent.filter(filters());
    });
});


function filters() {
    return [
        (company) => {
            return window.countryComponent.getCountry() ? company.country.code === window.countryComponent.getCountry().code : true;
        },
        (company) => {
            return window.remoteComponent.isChecked() ? company.remote : true;
        },
        (company) => {
            return window.companyNameComponent.getValue() ? company.name.toLowerCase().startsWith(window.companyNameComponent.getValue().toLowerCase()) : true;
        }
    ];
}
