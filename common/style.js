(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        *{
            border: 0;
            margin: 0;
            padding: 0;
            box-sizing:border-box;
        }

        html, body {
            font-family: Arial;
            font-size: 1.4vw;
            margin: 0;
            padding: 0;
            color: #000;
            background: #483D8B;
        }

        main {
            min-height: 80vh;
        }
     

        h1{
            position: relative;
            text-align: center;
            color: #c6c3c2;
            font-size: 1.6rem;        
        }

        label {
            color: rgb(207, 208, 209);
            font-size: 1.2rem;
            text-align: left;
            width: 100%;
        }

        button{
            margin-left: 6px;
            padding: 5px;
            background-color:  rgb(10, 29, 116);
            color:rgb(207, 208, 209);
            width: 10rem;
            height: auto;
            font-size: 1.2rem;
            font-weight:600;
            border-radius: 10px;
            border-width: 0.1rem;
        }

        .cardMenu{
            padding: 2.9rem 0 1rem 2rem;
            width: 40vw;
            font-weight: bold;
            color: #121842 ;
            font-family: 'Arial';
        }

        
        .cardMenu a {
            color: #483D8B ;
        }
      
        header {
            height: 8rem; 
            background: #c6c3c2;
            position: relative;
            top: 0
            z-index: 10;
        }

        header div {
            display: flex;
            flex-direction: row;
            justify-content: 'space-between',
            margin: 0;
            width: 100vw;
        }

        header img {
            width: 28vw;
            position: relative;
            top: 0;
            left: 0;
        }
        header a {
            font-size: 2vw;
            text-decoration: none;
            margin-right: 2rem;
        }
        
      
        .topMenu {
            margin-right: 2rem;
        }

        div.field {
            margin-bottom: 10px;
            font-weight: bold;
        }
        div.notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 200px;
            padding: 20px;
            text-align: center;
            background: #e8e8e8;
            border-radius: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        div.notification-error {
            color: #a14343;
        }
        div.notification-success {
            color: #43a143;
        }
        div.notification-info {
            color: #43a143;
        }
        div.notification-warn {
            color: #a1a143;
        }
        
        .img-container{
            position: relative;
            width: cover;
        }

        .divGeral {
            background: #483D8B;
            top: rem;
            margin: 10px 10%;
            border-radius: 15px;
        }

        form {
            padding: 20px 0;
            text-align: center;
            top: 10rem;
        }
        .form-container{
            display: flex;
            flex-direction: column;
            margin-top:80px;
        }
        input{
            padding:10px;
            border-radius: 15px;
            border-width: 0.1rem;
            border-color: #f1f0ec;
            height: 1.8rem;
            width: 50%;
            transition: 0.3s;
            color:rgb(10, 29, 116);
        
        }

        .field input:hover{
            border-color: #caae7a;
            border-width: 0.3rem;
        }
        
        .field input:focus{
            border-color: #caae7a;
            border-width: 0.3rem;
            background-color: #f5e9d2;
        }
        
        .field input::placeholder{
        color: rgb(207, 208, 209);
        font-size: 0.8rem;
        font-style: italic;
        }
        
        .titleLivro{
            display: flex;
            color: #121842;
        }

        .containerCards {
            position:relative;
            left:125px;
            padding:10px;
            background: #836FFF;
            border-radius: 15px;
            width:300px;
        }

        .cardLivroLista {
            display: flex;
            flex-direction: column;
            padding: 0 3rem;
            margin-bottom: 1.5rem;
            margin-top:1.3rem;
        }

        .cardLivroLista span{
            color: #121842;
            font-size: 1.1rem;
            text-transform: uppercase;
        }

        .material-icons {
            font-size: 1.1rem;
            margin: 0 7px;
            color: #121842;
        }
        
        `;
    document.body.appendChild(style);
})();    