

window.deleteLivroApi = async function (uidlivro) {
    await fetch('http://livros.letscode.dev.netuno.org:25390/services/livro/', {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            uid: uidLivro,
            aluno: {
                uid: '952bbabb-fe23-430e-83d7-902022fbaa7a'
            }
            
        }) 
        
    }).catch((error) => {
        alert('Erro geral na comunicação:')
    }

    ),
    alert('Cadastro excluído com sucesso');
}

