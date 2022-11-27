(() => {
    for (const file of [
        'common/biblioteca.js',
        'common/style.js',
        'common/api.js'
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `../../../${file}`);
        document.body.appendChild(script);
    }


    window.addEventListener('load', () => {

        const main = document.createElement('main');
        document.body.appendChild(main);

        biblioteca.headConfig('Editando ')

        const loadId = biblioteca.queryString("minhaVariavel");
        console.log(loadId);

        const formContainer = biblioteca.createDiv('form-container');
        const h1 = biblioteca.createH1('Atualizar livro', 'data-h1', formContainer);
        main.appendChild(formContainer);

        const inputs = {
            titulo: biblioteca.input({
                name: 'Título',
                onKeyPress: () => {
                    biblioteca.notification.remove();
                }
            }),
            autor: biblioteca.input({
                name: 'Autor',
                onKeyPress: () => {
                    biblioteca.notification.remove();
                }
            }),
            descricao: biblioteca.input({
                name: 'Descrição',
                onKeyPress: () => {
                    biblioteca.notification.remove();
                }
            }),
            tiragem: biblioteca.input({
                name: 'Tiragem',
                onKeyPress: () => {
                    biblioteca.notification.remove();
                }
            })
        }
        formContainer.appendChild(
            biblioteca.form([
                biblioteca.field({
                    label: 'Título',
                    input: inputs.titulo
                }),
                biblioteca.field({
                    label: 'Autor',
                    input: inputs.autor
                }),
                biblioteca.field({
                    label: 'Descrição',
                    input: inputs.descricao
                }),
                biblioteca.field({
                    label: 'Tiragem',
                    input: inputs.tiragem
                }),
                biblioteca.actions([

                    biblioteca.button({
                        text: 'Cadastrar',
                        type: 'primary',
                        onClick: () => {
                            biblioteca.notification.remove();
                            if (inputs.titulo.value == '' || inputs.autor.value == '' ||
                            inputs.descricao.value == '' || inputs.tiragem.value == '') {
                                return biblioteca.notification.create({
                                    text: 'Favor preencher todos os campos',
                                    type: 'error'
                                });
                            }
                            fetch('http://livros.letscode.dev.netuno.org:25390/services/livro', {
                                method: 'PUT',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    uid: loadId,
                                    titulo: inputs.titulo.value,
                                    autor: inputs.autor.value,
                                    descricao: inputs.descricao.value,
                                    tiragem: inputs.tiragem.value,
                                    aluno: {
                                        uid: "952bbabb-fe23-430e-83d7-902022fbaa7a"
                                    }
                                })
                            }).catch((error) => {
                                alert('Erro geral na comunicação:')
                            }
                            )
                            alert('Item editado com sucesso')
                        }
                    })
                ])
            ])
        );
    });
})();
