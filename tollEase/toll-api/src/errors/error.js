function joi(message) {
    return {
        type: "joiError",
        message
    }
}

function notFound(resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} não foi encontrado!`
    }
}

function badRequest ( resource = "Item" ) {
    return {
        type: "badRequest",
        message:`${resource} valor inválido`
    }
}

function internalServerError ( resource = "Item" ) {
    return {
        type: "internalServerError",
        message: "Too many results"
    }
}
export const errors = { joi, notFound, badRequest, internalServerError };