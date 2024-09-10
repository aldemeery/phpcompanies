const companies = [
    {
        name: "Alooba",
        description: "",
        country: countries.AU,
        remote: true,
        logo: "alooba.png",
        links: {
            website: "https://alooba.com",
            careers: "",
            x: "",
            facebook: "",
            linkedin: "https://linkedin.com/company/alooba",
            instagram: "",
            github: "",
            youtube: "",
            crunchbase: "https://crunchbase.com/organization/alooba",
            glassdoor: "https://glassdoor.com/Overview/Working-at-Alooba-EI_IE5453519.11,17.htm"
        }
    },
    {
        name: "BindHQ",
        description: "",
        country: countries.US,
        remote: true,
        logo: "bindhq.png",
        links: {
            website: "https://bindhq.com",
            careers: "https://bindhq.com/careers",
            x: "https://x.com/bindhq",
            facebook: "",
            linkedin: "https://linkedin.com/company/bindhq",
            instagram: "",
            github: "",
            youtube: "",
            crunchbase: "https://crunchbase.com/organization/bindhq",
            glassdoor: "https://glassdoor.com/Overview/Working-at-BindHQ-EI_IE4168768.11,17.htm"
        }
    },
    {
        name: "Agency Analytics",
        description: "",
        country: countries.CA,
        remote: true,
        logo: "agency-analytics.png",
        links: {
            website: "https://agencyanalytics.com",
            careers: "https://agencyanalytics.com/company/careers",
            x: "https://x.com/agencyanalytics",
            facebook: "https://www.facebook.com/AgencyAnalytics",
            linkedin: "https://ca.linkedin.com/company/agencyanalytics",
            instagram: "https://www.instagram.com/agencyanalytics",
            github: "",
            youtube: "https://www.youtube.com/agencyanalytics",
            crunchbase: "https://www.crunchbase.com/organization/agency-analytics",
            glassdoor: "https://www.glassdoor.com/Overview/Working-at-AgencyAnalytics-EI_IE2463249.11,26.htm"
        }
    },
    {
        name: "Ofload",
        description: "",
        country: countries.AU,
        remote: true,
        logo: "ofload.png",
        links: {
            website: "https://www.ofload.com.au",
            careers: "https://apply.workable.com/ofload",
            x: "",
            facebook: "",
            linkedin: "https://www.linkedin.com/company/ofload/",
            instagram: "",
            github: "",
            youtube: "",
            crunchbase: "https://www.crunchbase.com/organization/ofload",
            glassdoor: "https://www.glassdoor.com/Overview/Working-at-Ofload-EI_IE3795737.11,17.htm"
        }
    },
].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
