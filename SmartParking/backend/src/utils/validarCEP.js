exports.validarCEP = (CEP) => {
    return String(CEP)
        .toLowerCase()
        .match(
            "[0-9]{5}-[0-9]{3}"
        );
};