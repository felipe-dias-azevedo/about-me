var showing = false;

function showModal() {
    var modal = document.getElementById("modal");
    if (showing) {
        // if already showing
        modal.style.display = 'none';
        showing = false;
    } else {
        // if not showing
        modal.style.display = 'flex';
        showing = true;
    }
}


function closeDetails() {
    var modal_details = document.getElementById("modal-details");
    modal_details.style.display = 'none';
}


function changeScreen() {
    // var bodyProp = document.getElementsByTagName("BODY")[0];
    // bodyProp.innerHTML = ""
}


function loadProjects() {
    var path_to_source_proj = "../images/projects/";
    var source_proj = [
        "calculator-java.png",
        "website-game.png",
        "web-crosswords.png",
    ];
    var description_proj = [
        "Calculadora em Java",
        "Site-Jogo StarWars",
        "Palavras Cruzadas Web",
    ];
    var code_proj = [
        "https://github.com/felipe-dias-azevedo/calculator-java",
        "https://github.com/felipe-dias-azevedo/SiteJogo-StarWars-AUltimaEsperancaJedi",
        "https://github.com/felipe-dias-azevedo/Jogo-PalavraCruzada-COMPUTACAO",
    ];
    var out_projects = "";

    function defineProject(id, img_source, description, source_code, localeInfo) {
        var details = localeInfo.details;
        var access = localeInfo.access;

        var project = `<div class="projeto">
                            <div class="cartao">
                                <figure>
                                    <img src="${img_source}" alt="${description}">
                                </figure>
                                <div class="cartao-traseira">
                                    <h3>${description}</h3>
                                    <div class="descricao-projeto">
                                        <a href="${source_code}" target="_blank">
                                            <section><img src="../images/web.svg" alt="web"></section>
                                            <p>${access}</p>
                                        </a>
                                        <button onclick="getProjectDetails(${id},'${description}')">
                                            <section><img src="../images/magnifier.svg" alt="lupa de aumento"></section>
                                            <p>${details}</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        return project;
    }

    var localeInfo = getNeededLocale(0);

    for (let i = 0; i < source_proj.length; i++) {
        var path_source_proj = path_to_source_proj + source_proj[i];
        out_projects += defineProject(i, path_source_proj, description_proj[i], code_proj[i], localeInfo);
    }

    var projects = document.getElementById("main-projetos");
    projects.innerHTML = out_projects;
}


function getProjectDetails(id_project, title_project) {

    var modal_details = document.getElementById("modal-details");
    modal_details.style.display = 'flex';

    var details_proj = [
        "Calculadora Simples em java",
        "Site-Jogo StarWars de texto",
        "Palavras Cruzadas Web sobre Arquitetura de Computadores",
    ];

    var projectDetailsLocale = getNeededLocale(1).title;

    var modal_details_title = document.getElementById("modal-details-title");
    var modal_details_text = document.getElementById("modal-details-text");
    modal_details_title.innerHTML = `${projectDetailsLocale}: <br><div class="modal-title">${title_project}</div>`;
    modal_details_text.innerHTML = details_proj[id_project];
}


function loadTechnologies() {
    var path_to_source_tech = "../images/techs/";
    var source_tech = [
        "python-icon.png",
        "java-icon.png",
        "typescript-icon.png",
        "javascript-icon.png",
        "html-icon.png",
        "css-icon.png",
        "nodejs-icon.png",
        "react-icon.png",
        "react-native-icon.png",
        "r-icon.png",
        "c-icon.png",
        "cpp-icon.png",
        "mysql-icon.png",
        "mssql-icon.png",
        "docker-icon.png",
        "linux-icon.png"
    ];
    var description_tech = [
        "Python",
        "Java",
        "Typescript",
        "Javascript",
        "HTML",
        "CSS",
        "Node.JS",
        "React",
        "React Native",
        "R",
        "C",
        "C++",
        "MySQL",
        "MSSQL",
        "Docker",
        "Linux"
    ];
    var insertTechs = "";

    function defineTech(description, img_source) {
        var technology = `<div class="tecnologia">
                            <div class="cartao">
                                <figure>
                                    <img src="${img_source}" alt="${description}">
                                </figure>
                            </div>
                            <h3>${description}</h3>
                        </div>`;
        return technology;
    }

    for (let i = 0; i < source_tech.length; i++) {
        var path_source_tech = path_to_source_tech + source_tech[i];
        insertTechs += defineTech(description_tech[i], path_source_tech);
    }
    document.getElementById("main-tecnologias").innerHTML = insertTechs;
}


function getNeededLocale(source) {
    var locale = getLocales();
    var indexLocale = getLocaleIndex();
    switch (source) {
        case 0:
            info = {
                "details": locale[indexLocale].about.project.projectDetails,
                "access": locale[indexLocale].about.project.projectAccess
            }
            break;
        case 1:
            info = {
                "title": locale[indexLocale].about.project.projectTitle
            }
            break;
    }
    return info;
}


function specificForSystem() {
    console.log(window.navigator.userAgent);
}