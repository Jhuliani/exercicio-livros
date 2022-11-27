window.biblioteca = {
    header: (children) => {
        const header = document.createElement("header");
        for (const child of children) {
            header.appendChild(child);
        }
        return header;
    },
    elementoHeader: ({ imgheader, Cadastrar}) => {
        const divHeader = document.createElement("div");

        const divLogo = document.createElement("div");
        const divMenu = document.createElement("div");
        const link = document.createElement("a");
        const img = document.createElement("img");

        divMenu.classList.add("cardMenu");
        img.src = imgheader;

        link.appendChild(img);
        divLogo.appendChild(link);


        const Cad = document.createElement("a");
        Cad.href = Cadastrar;

        Cad.classList.add('topMenu');
        Cad.text = "Cadastrar";

        divMenu.appendChild(Cad);        
        divHeader.appendChild(divLogo);
        divHeader.appendChild(divMenu);
        return divHeader;
    },
    headConfig: (titlePage) => {
        const head = document.querySelector('head')
        const html = document.querySelector('html')
        const title = document.createElement('title')
        const charSet = document.createElement('meta')

        html.lang = "pt-br"
        title.textContent = titlePage
        charSet.setAttribute('charset', "UTF-8")

        head.appendChild(title)
        head.appendChild(charSet)
    },
    createDiv: (nameClass) => {
        const div = document.createElement("div");
        div.classList.add(nameClass);
    
        return div;
    },
    createH1: (text, id, child) =>
    {
        const h1 = document.createElement('h1');
        h1.textContent = text;
        h1.setAttribute('id', id);
        child.appendChild(h1);
        
        return h1;

    },
    input: ({type = 'text', name, onKeyPress = ()=>{}}) => {
        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('name', name);
        input.addEventListener('keypress', onKeyPress);
        return input;
    },
    createInput: (type = "text", placeholder = "", name) => {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("placeholder", placeholder);
        input.setAttribute("name", name);

        return input;
    },
    notification: {
        timer: null,
        element: null,
        create: ({text, type}) => {
            biblioteca.notification.remove();
            const element = document.createElement('div');
            element.classList.add('notification');
            element.classList.add(`notification-${type}`);
            element.textContent = text;
            biblioteca.notification.element = element;
            document.body.appendChild(element);
            biblioteca.notification.timer = setTimeout(() => {
                biblioteca.notification.remove();
            }, 5000);
        },
        remove: () => {
            if (biblioteca.notification.element) {
                clearTimeout(biblioteca.notification.timer);
                document.body.removeChild(biblioteca.notification.element);
                biblioteca.notification.element = null;
            }
        }
    
    },
    button: ({text, type = 'default', onClick = ()=>{}}) => {
        const button = document.createElement('button');
        button.classList.add(type);
        button.setAttribute('type', 'button');
        button.textContent = text;
        button.addEventListener('click', onClick);
        return button;
    },

    listarLivrosDiv: (children) => {
        const div = document.createElement('div');
        div.classList.add('containerCards')
        for (const child of children) {
            div.appendChild(child);
        }

        const divGeral = document.getElementsByClassName('divGeral')[0]
        divGeral.appendChild(div)
        return divGeral;
    },
    criaCardLivro: (data) => {
        const array = [];
        for (i in data) {
            const titulo = JSON.stringify(data[i], ['titulo']).replace(`{"titulo":"`, "").replace(`"}`, "");
            const tiragem = JSON.stringify(data[i], ['tiragem']).replace(`{"tiragem":"`, "").replace(`"}`, "")
            const autor = JSON.stringify(data[i], ['autor']).replace(`{"autor":"`, "").replace(`"}`, "")
            const descricao = JSON.stringify(data[i], ['descricao']).replace(`{"descricao":"`, "").replace(`"}`, "")
            const uid = JSON.stringify(data[i], ['uid']).replace(`{"uid":"`, "").replace(`"}`, "")


            const element = biblioteca.listarLivroElemento({
                titulo: titulo, 
                tiragem: tiragem, 
                autor: autor, 
                descricao: descricao, 
                uidLivro: uid})           
            array.push(element)

        }

        return array
    },
    listarLivroElemento: ({titulo, autor, descricao, tiragem, uidLivro}) => {
        const divListarLivro = document.createElement('div');
        divListarLivro.classList.add('cardLivroLista')

        const divTilteLivro = document.createElement('div');
        divTilteLivro.classList.add('titleLivro')

        const linkDelete = document.createElement('a');
        const linkEdit = document.createElement('a');

        const spanLivro = document.createElement('span');
        const hTitulo = document.createElement('h3');
        const pAutor = document.createElement('p');
        const pDescricao = document.createElement('p');
        const pTiragem = document.createElement('p');

        const iconDelete = document.createElement('i');
        const iconEdit = document.createElement('i');
    
        iconDelete.classList.add('material-icons')
        iconEdit.classList.add('material-icons')
            
        iconDelete.textContent = 'delete';
        iconEdit.textContent = 'edit';
            
        linkDelete.href = "#"
        linkEdit.href = "#"

    
        
        linkEdit.setAttribute("id", uidLivro)
        linkEdit.addEventListener('click', biblioteca.updateLivro);
    
        linkDelete.setAttribute("id", uidLivro)
        linkDelete.addEventListener('click', biblioteca.deleteLivro); 
    
        linkDelete.appendChild(iconDelete)
        linkEdit.appendChild(iconEdit)
        
        divTilteLivro.appendChild(hTitulo);

        spanLivro.appendChild(pAutor);
        spanLivro.appendChild(pDescricao);
        spanLivro.appendChild(pTiragem);



        hTitulo.textContent =  "Título: " + titulo;
        pAutor.textContent = "Autor: " + autor;
        pDescricao.textContent = "Descrição: " + descricao;
        pTiragem.textContent =  tiragem;

        divListarLivro.appendChild(spanLivro);
        divTilteLivro.appendChild(linkDelete);
        divTilteLivro.appendChild(linkEdit);

        divListarLivro.appendChild(divTilteLivro);
        divListarLivro.appendChild(spanLivro);
        return divListarLivro;
    },
    updateLivro: async (event) => {
        const idValue = event.path[1].id

        var passaValor= function(valor)
        {
            window.location = "./editar.html?minhaVariavel=" + valor;
        }       
        passaValor(idValue);

    },
    deleteLivro: async (event) => { 

        const idValue = event.path[1].id
        console.log(idValue);
        
        await deleteLivroaApi(idValue)

        document.location.reload(true);
    },

    form: (children) => {
        const form = document.createElement('form');
        for (const child of children) {
            form.appendChild(child);
        }
        return form;
    },
    div: (children) => {
        const div = document.createElement('div');
        div.classList.add('divGeral')
        for (const child of children) {
            div.appendChild(child);
        }
        return div;
    },
    actions: (children) => {
        const actions = document.createElement('div');
        actions.classList.add('actions')
        for (const child of children) {
            actions.appendChild(child);
        }
        return actions;
    },
    field: ({label, input}) => {
        const field = document.createElement('div');
        field.classList.add('field');
        const labelContainer = document.createElement('div');
        const labelElement = document.createElement('label');
        labelContainer.appendChild(labelElement);
        field.appendChild(labelContainer);
        labelElement.textContent = label +':';
        field.appendChild(input);
        return field;
    },

    queryString: (parameter) => {
        var loc = location.search.substring(1, location.search.length);
        var param_value = false;
        var params = loc.split("&");
        for (i = 0; i < params.length; i++) {
            param_name = params[i].substring(0, params[i].indexOf('='));
            if (param_name == parameter) {
                param_value = params[i].substring(params[i].indexOf('=') + 1)
            }
        }
        if (param_value) {
            return param_value;
        }
        else {
            return undefined;
        }
    },

    
}