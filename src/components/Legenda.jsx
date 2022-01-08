import React from "react"

export default () => {
    return (
        <div className="container" id="legenda">
            <h2>Legenda</h2>
            <ul>
                <li id="contemHomologado" className="bi bi-check-circle-fill"> Envia a informação</li>
                <li id="contemQuandoEnviada" className="bi bi-dash-circle-fill" > A informação fica disponível somente
                    quando o dispositivo envia</li>
                <li id="informacaoVemDaCache" className="bi bi-exclamation-circle-fill"> A informação pode estar vindo de cache,
                    significa que ela não é 100% atualizada</li>
                <li id="informacaoBooleana" className="bi bi-slash-circle-fill"> Envia sempre uma informação com valor fixo
                    (true/false)</li>
                <li id="naoContemHomologado" className="bi bi-x-circle-fill"> Não envia a informação</li>
            </ul>
        </div>
    )
}