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
    {
        name: "Prompt Therapy Solutions",
        description: "",
        country: countries.US,
        remote: true,
        logo: "prompt.png",
        links: {
            website: "https://promptemr.com",
            careers: "https://promptemr.com/company/careers/",
            x: "",
            facebook: "",
            linkedin: "",
            instagram: "",
            github: "",
            youtube: "",
            crunchbase: "https://www.crunchbase.com/organization/prompt-emr",
            glassdoor: ""
        }
    },
    {
        name: "Help Scout",
        description: "",
        country: countries.US,
        remote: true,
        logo: "help-scout.png",
        links: {
            website: "https://www.helpscout.com",
            careers: "https://www.helpscout.com/company/careers/",
            x: "",
            facebook: "",
            linkedin: "",
            instagram: "",
            github: "",
            youtube: "",
            crunchbase: "https://www.crunchbase.com/organization/help-scout",
            glassdoor: ""
        }
    },
    {
        name: "Bamboo",
        description: "",
        country: countries.US,
        remote: true,
        logo: "bamboo-01.png",
        links: {
            website: "https://getbamboo.com",
            careers: "https://getbamboo.com/careers",
            x: "https://twitter.com/bamboometrix",
            facebook: "",
            linkedin: "https://www.linkedin.com/company/bamboo-metrix",
            instagram: "",
            github: "",
            youtube: "",
            crunchbase: "https://www.crunchbase.com/organization/bamboo-b974",
            glassdoor: ""
        }
    },
    {
        name: "Mahisoft",
        description: "",
        country: countries.US,
        remote: true,
        logo: "mahisoft.png",
        links: {
            website: "https://mahisoft.com",
            careers: "https://mahisoft.com/careers",
            x: "",
            facebook: "https://www.facebook.com/mahisoftinc/",
            linkedin: "https://www.linkedin.com/company/mahisoft",
            instagram: "https://www.instagram.com/mahisoftinc",
            github: "",
            youtube: "",
            crunchbase: "https://www.crunchbase.com/organization/mahisoft",
            glassdoor: "https://www.glassdoor.com/Overview/Working-at-Mahisoft-EI_IE925705.11,19.htm"
        }
    },
    {
        name: "Moodle",
        description: "",
        country: countries.AU,
        remote: true,
        logo: "moodle.png",
        links: {
            website: "https://moodle.com",
            careers: "https://moodle.com/careers",
            x: "https://x.com/moodle",
            facebook: "https://www.facebook.com/moodle",
            linkedin: "https://www.linkedin.com/company/moodle",
            instagram: "https://www.instagram.com/moodlehq",
            github: "",
            youtube: "https://www.youtube.com/moodle",
            crunchbase: "https://www.crunchbase.com/organization/moodle",
            glassdoor: "https://www.glassdoor.com/Overview/Working-at-Moodle-EI_IE854112.11,17.htm"
        }
    },
    {
        name: "Plentific",
        description: "",
        country: countries.GB,
        remote: true,
        logo: "plentific.png",
        links: {
            website: "https://www.plentific.com",
            careers: "https://www.plentific.com/careers",
            x: "https://twitter.com/plentific",
            facebook: "",
            linkedin: "https://www.linkedin.com/company/plentific-ltd",
            instagram: "https://www.instagram.com/Plentific_us",
            github: "",
            youtube: "https://www.youtube.com/user/plentific",
            crunchbase: "https://www.crunchbase.com/organization/plentific",
            glassdoor: "https://www.glassdoor.com/Overview/Working-at-Plentific-EI_IE966007.11,20.htm"
        }
    },
    {
        name: "Divelement",
        description: "",
        country: countries.US,
        remote: true,
        logo: "divelement.png",
        links: {
            website: "https://divelement.io",
            careers: "https://divelement.io/careers",
            x: "https://x.com/divelement_io",
            facebook: "https://www.facebook.com/divelement.io",
            linkedin: "https://www.linkedin.com/company/divelement",
            instagram: "https://www.instagram.com/divelement.io",
            github: "",
            youtube: "https://www.youtube.com/@techbackstage",
            crunchbase: "https://www.crunchbase.com/organization/divelement",
            glassdoor: "https://www.glassdoor.com/Overview/Working-at-Divelement-EI_IE5708639.11,21.htm"
        }
    },
    {
        name: "Envisage International",
        description: "",
        country: countries.US,
        remote: true,
        logo: "envisage-international.png",
        links: {
            website: "https://envisageinternational.com",
            careers: "https://envisageinternational.com/about/employment",
            x: "https://x.com/envisageintl",
            facebook: "https://www.facebook.com/envisageinternational",
            linkedin: "https://www.linkedin.com/company/envisage-international-corporation/",
            instagram: "",
            github: "",
            youtube: "",
            crunchbase: "https://www.crunchbase.com/organization/envisage-international",
            glassdoor: "https://www.glassdoor.com/Overview/Working-at-Envisage-International-EI_IE2283474.11,33.htm"
        }
    }
].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
