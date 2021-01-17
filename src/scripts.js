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


function changeScreen() {
    // var bodyProp = document.getElementsByTagName("BODY")[0];
    // bodyProp.innerHTML = ""
}


function loadProjects() {
    var source_proj = [
        "../images/projects/calculator-java.png",
        "../images/projects/website-game.png",
        "../images/projects/web-crosswords.png",
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
                                    <h2>${description}</h2>
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
        out_projects += defineProject(i, source_proj[i], description_proj[i], code_proj[i], localeInfo);
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
    var insertTechs = "";

    function defineTech() {
        var technology = `<div class="tecnologia">
                            <div class="cartao">
                                <figure>
                                    <img src="../images/techs/python-icon.png" alt="python-icon">
                                </figure>
                            </div>
                            <h3>Python</h3>
                        </div>`;
        return technology;
    }

    for (let i = 0; i < 24; i++) {
        insertTechs += defineTech();
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


function closeDetails() {
    var modal_details = document.getElementById("modal-details");
    modal_details.style.display = 'none';
}


function specificForSystem() {
    console.log(window.navigator.userAgent);
}