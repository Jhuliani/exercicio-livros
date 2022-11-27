(() => {
    for (const file of [
        'biblioteca.js',
        'style.js',
        'api.js'       
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `./common/${file}`);
        document.body.appendChild(script);
    }

    const link = document.createElement('link')
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    document.body.appendChild(link);

    window.addEventListener('load', () => {
        const main = document.createElement('main');
        document.body.appendChild(main);

        biblioteca.headConfig('Home - API Livros')

        const loadId = biblioteca.queryString("minhaVariavel");

        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpg',
                    Cadastrar: './cadastrar.html'
                })
            ])
        )
        
        const formContainer = biblioteca.createDiv('form-container');
        const h1 = biblioteca.createH1('Lista de Livros', 'data-h1', formContainer);
        main.appendChild(formContainer);    

        const inputs = {
            busca: biblioteca.input({
                name: 'busca',
                onKeyPress: () => {
                    biblioteca.notification.remove();
                }
            })
        }


        if (loadId !== undefined) {
            fetch('http://livros.letscode.dev.netuno.org:25390/services/livro/lista', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: "",
                    aluno: {
                        uid: "952bbabb-fe23-430e-83d7-902022fbaa7a"
                    }
                }
                )
            }).then((response) => {
                if (response.ok) {
                    response.json().then((data) => {

                        main.appendChild(biblioteca.listarLivrosDiv(
                            biblioteca.criaCardLivro(data)))
                        localStorage.setItem('textEstab', JSON.stringify(data));                        ;
                    });


                } else {
                    response.json().then((data) => {
                        biblioteca.notification.create({
                            text: JSON.stringify(data),
                            type: 'error'
                        });
                    });
                }
            }).catch((error) => {
                console.log('Erro geral na comunicação:', error);
            });

        } else {
            fetch('http://livros.letscode.dev.netuno.org:25390/services/livro/lista', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: "",
                    aluno: {
                        uid: "952bbabb-fe23-430e-83d7-902022fbaa7a"
                    }
                }
                )
            }).then((response) => {
                if (response.ok) {
                    response.json().then((data) => {

                        main.appendChild(biblioteca.listarLivrosDiv(
                            biblioteca.criaCardLivro(data)
                        ));
                        localStorage.setItem('textLivro', JSON.stringify(data));

                    });
                } else {
                    let stringlocalStorage = localStorage.getItem('textLivro');
                    if (stringlocalStorage) {
                        storage = JSON.parse(stringlocalStorage);
                        console.log(storage);
                        main.appendChild(biblioteca.listarLivrosDiv(
                            biblioteca.criaCardLivro(storage)
                        ));
                    }

                }
            }).catch((error) => {
                console.log('Erro geral na comunicação:', error);
            });
        }
        //=========================
        formContainer.appendChild(
            biblioteca.div([
                biblioteca.form([
                    biblioteca.field({
                        label: 'Buscar',
                        input: inputs.busca
                    }),
                    biblioteca.actions([
                        biblioteca.button({
                            text: 'Buscar',
                            type: 'primary',
                            onClick: () => {
                                const remover = document.getElementsByClassName('containerCards')[0]
                                if (remover !== undefined) {
                                    remover.remove()
                                }
                                if (inputs.busca.value !== "") {
                                    fetch('http://livros.letscode.dev.netuno.org:25390/services/livro/lista', {
                                        method: 'POST',
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            text: "",
                                            aluno: {
                                                uid: "952bbabb-fe23-430e-83d7-902022fbaa7a"
                                            }
                                                                }
                                        )
                                    }).then((response) => {
                                        if (response.ok) {
                                            response.json().then((data) => {

                                                main.appendChild(biblioteca.listarLivrosDiv(
                                                    biblioteca.criaCardLivro(data)
                                                ));
                                                localStorage.setItem('textEstab', JSON.stringify(data));

                                            });

                                        } else {
                                            console.log("storage if -> " + inputs.busca.value)
                                            let stringlocalStorage = localStorage.getItem('textLivro');
                                            if (stringlocalStorage) {
                                                storage = JSON.parse(stringlocalStorage);
                                                console.log(storage);
                                                main.appendChild(biblioteca.listarLivrosDiv(
                                                    biblioteca.criaCardLivro(storage)
                                                ));
                                            }
                                        }
                                    }).catch((error) => {
                                        console.log('Erro geral na comunicação:', error);
                                    });
                                } else {
                                    fetch('http://livros.letscode.dev.netuno.org:25390/services/livro/lista', {
                                        method: 'POST',
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            text: "",
                                            aluno: {
                                                uid: "952bbabb-fe23-430e-83d7-902022fbaa7a"
                                            }
                                        }
                                        )
                                    }).then((response) => {
                                        if (response.ok) {
                                            response.json().then((data) => {

                                                main.appendChild(biblioteca.listarLivrosDiv(
                                                    biblioteca.criaCardLivro(data)
                                                ));
                                                localStorage.setItem('textLivro', JSON.stringify(data));

                                            });

                                        } else {
                                            let stringlocalStorage = localStorage.getItem('textEstab');
                                            if (stringlocalStorage) {
                                                storage = JSON.parse(stringlocalStorage);
                                                console.log(storage);
                                                main.appendChild(biblioteca.listarLivrosDiv(
                                                    biblioteca.criaCardLivro(storage)
                                                ));
                                            }
                                        }
                                    }).catch((error) => {
                                        console.log('Erro geral na comunicação:', error);
                                    });
                                }
                            }
                        })
                    ])
                ])
            ])
        );





    });

})();