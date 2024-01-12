export const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('pt-BR');
    return formattedDate; // Retorna a data formatada
}

export const formatTime = (time) => {
    if (!time) {
        return ''; // Retorna uma string vazia se o tempo for nulo ou indefinido
    }

    const [hours, minutes, seconds] = time.split(':');
    const formattedTime = `${hours}:${minutes}`;
    
    return formattedTime; // Retorna o horário formatado
}

export const formatCPF = (cpf) => {
    if (!cpf) {
        return ''; // Retorna uma string vazia se o CPF for nulo ou indefinido
    }

    // Remove qualquer caractere não numérico do CPF
    const numericCPF = cpf.replace(/\D/g, '');

    // Adiciona pontos e traço conforme o formato do CPF
    const formattedCPF = numericCPF.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
        '$1.$2.$3-$4'
    );

    return formattedCPF; // Retorna o CPF formatado
}