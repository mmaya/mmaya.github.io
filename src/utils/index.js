/* eslint-disable */
export function formataDocumento(documento) {
    if(documento.length === 11){
        return {tipo: "CPF", valor: documento.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4")};
    }
    else{
        return {tipo: "CNPJ", valor: documento.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5")};
    }
}

export function handleApiErrors (response) { 
    if (response.message) throw new Error(response.message)
    return response
  }