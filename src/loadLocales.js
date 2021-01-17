function loadLocales() {
    var fileName = location.pathname.split("/").slice(-1)[0]

    var locale = getLocales();
    var indexLocale = getLocaleIndex();

    if (fileName === "index.html") {  
        // only locales for index file
        document.title = locale[indexLocale].index.indexDocumentTitle;
        document.getElementById("indexTitle").innerHTML = locale[indexLocale].title;
        document.getElementById("indexInfo").innerHTML = locale[indexLocale].index.indexInfo;
        document.getElementById("indexSubtitle").innerHTML = locale[indexLocale].index.indexSubtitle;
    } else if (fileName === "about.html") {
        // only locales for about file
        document.title = locale[indexLocale].about.aboutDocumentTitle;
        document.getElementById("aboutTitle").innerHTML = locale[indexLocale].title;
        document.getElementById("contactTitle").innerHTML = locale[indexLocale].about.contactTitle;
        document.getElementById("telephone").innerHTML = locale[indexLocale].about.telephone;
        document.getElementById("beginContact").innerHTML = locale[indexLocale].about.beginContact;
        document.getElementById("projectsTitle").innerHTML = locale[indexLocale].about.projectsTitle
        document.getElementById("knowledgesTitle").innerHTML = locale[indexLocale].about.knowledgesTitle;
    }
}


function getLocaleIndex() {
    var browserLanguage = navigator.language || navigator.userLanguage;

    if (browserLanguage == "pt-BR") {
        var indexLocale = 0;
    } else {
        var indexLocale = 1;
    }

    return indexLocale;
}


function getLocales() {
    locale = [
        {
            "title": "Sobre o Felipe",
            "index": {
                "indexDocumentTitle": "Site Felipe",
                "indexInfo": "Saiba Mais",
                "indexSubtitle": "Um estudante de Ciência da Computação apaixonado por programação web, mobile e desktop, assim como diversos assuntos envolvendo computação."
            },
            "about": {
                "aboutDocumentTitle": "Sobre o Felipe",
                "contactTitle": "Meios de contato",
                "telephone": "Telefone",
                "beginContact": "Entrar em Contato",
                "projectsTitle": "Projetos Realizados:",
                "knowledgesTitle": "Conhecimentos:",
                "project": {
                    "projectTitle": "Detalhes do Projeto",
                    "projectDetails": "Mais detalhes",
                    "projectAccess": "Acessar"
                }
            }
        },
        {
            "title": "About Felipe",
            "index": {
                "indexDocumentTitle": "Website Felipe",
                "indexInfo": "Know More",
                "indexSubtitle": "A Computer Science Student that loves web, mobile and desktop programming, as a lot of subjects that involves Computers and Technology in General."
            },
            "about": {
                "aboutDocumentTitle": "About Felipe",
                "contactTitle": "Contact Methods",
                "telephone": "Cellphone",
                "beginContact": "Contact",
                "projectsTitle": "Projects:",
                "knowledgesTitle": "Knowledges on:",
                "project": {
                    "projectTitle": "Project Details",
                    "projectDetails": "More details",
                    "projectAccess": "Source"
                }
            }
        }
    ];

    return locale;
}