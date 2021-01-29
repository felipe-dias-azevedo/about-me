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

    var range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy email command was ' + msg);
    } catch(err) {
        console.log('Oops, unable to copy');
    }
    window.getSelection().removeAllRanges();
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
        "nlw3-project.jpg",
        "ftop.png"
    ];
    var description_proj = [
        "Calculadora em Java",
        "Site-Jogo StarWars",
        "Palavras Cruzadas Web",
        "NLW #03 Happy",
        "ftop"
    ];
    var code_proj = [
        "https://github.com/felipe-dias-azevedo/calculator-java",
        "https://github.com/felipe-dias-azevedo/SiteJogo-StarWars-AUltimaEsperancaJedi",
        "https://github.com/felipe-dias-azevedo/Jogo-PalavraCruzada-COMPUTACAO",
        "https://github.com/felipe-dias-azevedo/nlw-03-happy",
        "https://github.com/felipe-dias-azevedo/ftop"
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
        "Uma plataforma para cadastro de orfanatos devido a sua criação próxima ao dia das crianças (12/10) onde altruistas possam visitar crianças orfãs a fim de tornar o dia delas melhores.<br>Aplicação desenvolvida durante a semana omnistack NextLevelWeek de terceira edição pela Rocketseat.",
        "Simples Gerenciador de recursos do Sistema Operacional/Hardware feito em Python"
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

    for (let i = 0; i < source_tech.length; i++) {
        var path_source_tech = path_to_source_tech + source_tech[i];
        insertTechs += defineTech(i, description_tech[i], path_source_tech, parseInt(Math.random() * 4));
    }
    document.getElementById("main-tecnologias").innerHTML = insertTechs;
}


function getTechDetails(id_tech, source_tech, desc_tech) {
    var level_tech = [3,3,2,2,3,3,2,1,1,1,1,1,3,3,2,3]

    var figure_tech = document.getElementById(`figure_tech${id_tech}`);
    var is_showing_tech = document.getElementById(`tech${id_tech}`).contains(figure_tech);

    if (!is_showing_tech) {
        document.getElementById(`tech${id_tech}`).innerHTML = 
        `<figure id="figure_tech${id_tech}">
            <img src="${source_tech}" alt="${desc_tech}">
        </figure>`;
    } else {
        output_level = "";
        for (let i = 0; i < level_tech[id_tech]; i++) {
            output_level += `<div class="cartao-back"></div>`;
        }
        for (let i = 0; i < 3 - level_tech[id_tech]; i++) {
            output_level += `<div class="cartao-back" style="background-color: #d2d2d2;"></div>`;
        }
        level = level_tech[id_tech]
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