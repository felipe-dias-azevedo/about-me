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


function copyContact(id_contact) { // TEST WAS NOT SUCCESSFUL

    switch (id_contact) {
        case 0:
            var emailLink = "felipe.dias.azevedo@hotmail.com";
            break;
        case 1:
            var emailLink = "+5511950277693";
            break;
        default:
            var emailLink = "linkedin.com/in/felipe-azevedo-4b71171a8";
            break;
    }
}


function changeScreen() {
    // var bodyProp = document.getElementsByTagName("BODY")[0];
    // bodyProp.innerHTML = ""
}


function loadProjects() {
    var path_to_source_proj = "../images/projects/";
    var projects = getProjects();
    var out_projects = "";

    function defineProject(id, img_source, description, source_code, localeInfo) {
        var details = localeInfo.details;
        var access = localeInfo.access;

        if (useMobile()) {
            var elementImage = "figure"
            var elementClick = "";
            var projectClassName = "projeto-desktop";
        } else {
            var elementImage = "button"
            var elementClick = `onclick='showProject(${id})'`;
            var projectClassName = "projeto-mobile";
        }

        var project = `<div class="projeto ${projectClassName}">
                            <div class="cartao">
                                <${elementImage} ${elementClick}>
                                    <img src="${img_source}" alt="${description}">
                                </${elementImage}>
                                <div id="project${id}" class="cartao-traseira">
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

    for (let i = 0; i < projects.length; i++) {
        var path_source_proj = path_to_source_proj + projects[i].image_path;
        out_projects += defineProject(i, path_source_proj, projects[i].description, projects[i].source_code, localeInfo);
    }

    var projects = document.getElementById("main-projetos");
    projects.innerHTML = out_projects;
}


function getProjectDetails(id_project, title_project) {

    var modal_details = document.getElementById("modal-details");
    modal_details.style.display = 'flex';

    var projects = getProjects();

    var projectDetailsLocale = getNeededLocale(1).title;

    var modal_details_title = document.getElementById("modal-details-title");
    var modal_details_text = document.getElementById("modal-details-text");
    modal_details_title.innerHTML = `${projectDetailsLocale}: <br><div class="modal-title">${title_project}</div>`;
    modal_details_text.innerHTML = projects[id_project].details;
}


function showProject(id_project) {
    // document.getElementById(`project${id_project}`).style.opacity = 1;
}


function loadTechnologies() {
    var path_to_source_tech = "../images/techs/";
    var techs = getTechnologies();
    var insertTechs = "";

    function defineTech(id_tech, description, img_source, id_class) {
        var technology = `<div class="tecnologia">
                            <button id="tech${id_tech}" onclick="getTechDetails(${id_tech},'${img_source}','${description}')" class="cartao cartao-cor${id_class}">
                                <figure id="figure_tech${id_tech}">
                                    <img src="${img_source}" alt="${description}">
                                </figure>
                            </button>
                            <h3>${description}</h3>
                        </div>`;
        return technology;
    }

    for (let i = 0; i < techs.length; i++) {
        var path_source_tech = path_to_source_tech + techs[i].image_path;
        insertTechs += defineTech(i, techs[i].description, path_source_tech, parseInt(Math.random() * 4));
    }
    document.getElementById("main-tecnologias").innerHTML = insertTechs;
}


function getTechDetails(id_tech, source_tech, desc_tech) {
    var techs = getTechnologies();

    var figure_tech = document.getElementById(`figure_tech${id_tech}`);
    var is_showing_tech = document.getElementById(`tech${id_tech}`).contains(figure_tech);

    if (!is_showing_tech) {
        document.getElementById(`tech${id_tech}`).innerHTML = 
        `<figure id="figure_tech${id_tech}">
            <img src="${source_tech}" alt="${desc_tech}">
        </figure>`;
    } else {
        output_level = "";
        for (let i = 0; i < techs[id_tech].level; i++) {
            output_level += `<div class="cartao-back"></div>`;
        }
        for (let i = 0; i < 3 - techs[id_tech].level; i++) {
            output_level += `<div class="cartao-back" style="background-color: #d2d2d2;"></div>`;
        }
        level = techs[id_tech].level
        switch (level) {
            case 1:
                output_level += `<p class="cartao-back-text">Básico</p>`;
                break;
            case 2:
                output_level += `<p class="cartao-back-text">Intermediário</p>`;
                break;
            case 3:
                output_level += `<p class="cartao-back-text">Avançado</p>`;
                break;
            default:
                output_level += `<p class="cartao-back-text">OK</p>`;
                break;
        }
        document.getElementById(`tech${id_tech}`).innerHTML = output_level;
    }
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