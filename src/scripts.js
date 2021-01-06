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

    function defineProject(id, img_source, description, source_code) {
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
                                            <p>Acessar</p>
                                        </a>
                                        <button onclick="getProjectDetails(${id},'${description}')">
                                            <section><img src="../images/magnifier.svg" alt="lupa de aumento"></section>
                                            <p>Mais detalhes</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        return project;
    }

    for (let i = 0; i < source_proj.length; i++) {
        out_projects += defineProject(i, source_proj[i], description_proj[i], code_proj[i]);
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

    var modal_details_title = document.getElementById("modal-details-title");
    var modal_details_text = document.getElementById("modal-details-text");
    modal_details_title.innerHTML = `Detalhes do Projeto: <br><div class="modal-title">${title_project}</div>`;
    modal_details_text.innerHTML = details_proj[id_project];
}

function closeDetails() {
    var modal_details = document.getElementById("modal-details");
    modal_details.style.display = 'none';
}


function specificForSystem() {
    console.log(window.navigator.userAgent);
}