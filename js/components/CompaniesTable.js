const CompaniesTable = (function () {
    function CompaniesTable(el, companies, filters) {
        this.el = el;
        this.companies = companies;
        this.filters = filters;

        this.render();
    };

    CompaniesTable.prototype.filter = function (filters) {
        this.filters = filters;
        const companies = this.companies;
        const chunkSize = 500;
        let index = 0;

        function filterChunk() {
            companies.slice(index, index + chunkSize).forEach(company => {
                const hidden = filters.some(filter => !filter(company));

                if (hidden) {
                    company.element.classList.add('hidden');
                } else {
                    company.element.classList.remove('hidden');
                }
            });

            index += chunkSize;

            if (index < companies.length) {
                setTimeout(filterChunk, 0);
            }
        }

        filterChunk();
    }

    CompaniesTable.prototype.render = function () {
        const el = this.el;
        const companies = this.companies;
        const filters = this.filters;
        const chunkSize = 10;
        let index = 0;

        el.innerHTML = '';

        function renderChunk() {
            companies.slice(index, index + chunkSize).map(company => {
                const hidden = filters.some(filter => !filter(company));

                // Create tr element with company data
                const tr = document.createElement('tr');
                tr.className = hidden ? 'hidden' : '';
                tr.innerHTML = `<th scope="row"><img class="logo" src="./images/${company.logo || 'default.png'}">${company.name}</th>
                    <td>${company.country.flag} ${company.country.name}</td>
                    <td>${company.remote ? '✔️' : '❌'}</td>
                    <td>
                        ${company.links.website ? `<a data-tooltip="Website" target="_blank" class="company-link" href="${company.links.website}"><i class="fa-solid fa-globe"></i></a>` : ''}
                        ${company.links.careers ? `<a data-tooltip="Careers page" target="_blank" class="company-link" href="${company.links.careers}"><i class="fa-solid fa-briefcase"></i></a>` : ''}
                        ${company.links.x ? `<a data-tooltip="x.com" target="_blank" class="company-link" href="${company.links.x}"><i class="fa-brands fa-x-twitter"></i></a>` : ''}
                        ${company.links.facebook ? `<a data-tooltip="Facebook" target="_blank" class="company-link" href="${company.links.facebook}"><i class="fa-brands fa-facebook-f"></i></a>` : ''}
                        ${company.links.linkedin ? `<a data-tooltip="LinkedIn" target="_blank" class="company-link" href="${company.links.linkedin}"><i class="fa-brands fa-linkedin-in"></i></a>` : ''}
                        ${company.links.instagram ? `<a data-tooltip="Instagram" target="_blank" class="company-link" href="${company.links.instagram}"><i class="fa-brands fa-instagram"></i></a>` : ''}
                        ${company.links.github ? `<a data-tooltip="GitHub" target="_blank" class="company-link" href="${company.links.github}"><i class="fa-brands fa-github"></i></a>` : ''}
                        ${company.links.youtube ? `<a data-tooltip="Youtube" target="_blank" class="company-link" href="${company.links.youtube}"><i class="fa-brands fa-youtube"></i></a>` : ''}
                        ${company.links.crunchbase ? `<a data-tooltip="Crunchbase" target="_blank" class="company-link" href="${company.links.crunchbase}"><i class="fa-regular fa-copyright"></i></a>` : ''}
                        ${company.links.glassdoor ? `<a data-tooltip="Glassdoor" target="_blank" class="company-link" href="${company.links.glassdoor}"><i class="fa-solid fa-door-open"></i></a>` : ''}
                    </td>`;
                company['element'] = tr;

                el.appendChild(tr);
            });

            index += chunkSize;

            if (index < companies.length) {
                setTimeout(renderChunk, 0);
            }
        }

        renderChunk();
    };

    return CompaniesTable;
})();
