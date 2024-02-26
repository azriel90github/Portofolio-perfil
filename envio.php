<!DOCTYPE html>
<html lang="pt-pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Envio com Sucesso</title>
    <link rel="stylesheet" href="assets/css/geral.css">
    <link rel="stylesheet" href="assets/css/media-query.css">
    <link rel="stylesheet" href="assets/css/formulário.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<style>

    .header p {
        font-family: Anta;
        display: flex;
        align-items: center;
        font-size: 30px;
        color: #0d98fc;
        padding: 5px;
        text-shadow: 1px 1px 20px #0c97fac9;
    }


     p i {
        font-size: 35px;
        padding-left: 5px;
        color: #7CD260;
        text-shadow: 1px 1px 10px #7CD260;
    }
    nav p {
        font-size: 35px;
        text-shadow: none;
        
    }
    .envio {
        height: 90vh;
        padding-top: 170px;
        padding-left: 15px;
        padding-right: 15px;
        text-align: center;
    }

    .envio i {
        color: #0c97fac9;
        text-shadow: 1px 1px 20px #0c97fac9;
        font-size: 180px;
    }

    .envio h1 {
        color: #0D98FC;
        font-weight: 300;
        padding-bottom: 10px;
    }

    .envio p {
        font-size: 22px;
        color: #9ECBD8;
        padding-bottom: 25px;
    }

    .envio button {
        border: 2px solid #0c97fac9;
        box-shadow: 1px 1px 15px #0c97fac9;
        margin-top: 15px;
        background-color: #0c97fac9;
        color: #e6e6e6;
        font-weight: 600;
        font-size: 17px;
        width: 250px;
        cursor: pointer;
        padding: 10px;
        border-radius: 11px;
    }

    .envio button a {
        text-decoration: none;
        color: #e6e6e6;
    }

    .envio button:hover {
        box-shadow: 1px 1px 30px #0c97fac9;
        transition: .4s;
    }

    .envio .port-nav {
        display: none;
    }

    @media only screen and (max-width: 600px) {
        .header a {
            display: none;
        }

        .envio .port-nav {
            display: block;
            margin: auto;
        }

    }


</style>
<body>
    
    <div class="header">
        <p>Workspace.Suélio<i class='bx bx-user' ></i></p>
        <a class="port-nav" href="index.html">Voltar</a>
    </div>
    
    <div class="envio">
        <i class='bx bxs-user'></i>
        <h1>Sua mensagem enviada com sucesso!</h1>
        <p>Entrerei em contacto em breve!</p>
        <a class="port-nav" href="index.html">Voltar</a>
    </div>
    <footer>
        <div class="content-number">   
            <h3><i class='bx bx-book-content'></i>Contactos</h3>
            <p>Telefone 1 - 948057334 <br> Telefone 2 - 955851060</p>   
            <p> Email 1 - azrielgithub@gmail.com <br> Email 2 - azrielsuelioarmando@gmail.com <br> Email 3 - azrielarmando2024@gmail.com <br> Email 4 - azrielmoreira@gmail.com</p>      
            <h3><i class='bx bxs-location-plus'></i>Endereço</h3>
            <p>Samba, Estrada Direita da Samba Trirumo<br> Luanda, Angola</p>
        </div>

        <div class="pages">
                <menu>
                    <h3><i class='bx bx-link' ></i>Páginas Extras</h3>
                    <a href="https://www.youtube.com/" target="_blank"><i class='bx bx-link-alt' ></i>YouTube</a>
                    <a href="https://openai.com/" target="_blank"><i class='bx bx-link-alt' ></i>OpenAI</a>
                    <a href="https://www.alura.com.br/" target="_blank"><i class='bx bx-link-alt' ></i>Alura</a>
                    <a href="https://roadmap.sh/" target="_blank"><i class='bx bx-link-alt' ></i>Roadmap.sh</a>
                    <a href="https://www.w3schools.com/" target="_blank"><i class='bx bx-link-alt' ></i>W3C Schools</a>
                    <a href="https://techguide.sh/" target="_blank"><i class='bx bx-link-alt' ></i>TechGuide</a>
                    <a href="https://www.youtube.com/watch?v=mr8HEsZQL9c" target="_blank"><i class='bx bx-link-alt' ></i>Music - Code</a>
                    <a href="https://github.com/free-educa/free-livros" target="_blank"><i class='bx bx-link-alt' ></i>Livros Tech</a>
                </menu>
        </div>

        <div class="social">
            <h3><i class='bx bx-link' ></i>Social</h3>
            <a href="https://www.instagram.com/_azriel90_/?hl=en" rel="external" target="_blank"><i class='bx bxl-instagram'></i></a>
            <a href="https://www.linkedin.com/in/azriel-armando-su%C3%A9lio-14a058260/" rel="external" target="_blank"><i class='bx bxl-linkedin' ></i></a>
            <a href="https://github.com/azriel90github" rel="external" target="_blank"><i class='bx bxl-github'></i></a>
            <a href="https://www.youtube.com/channel/UCOInYR7X_3GHUuEoJ3utspg" rel="external" target="_blank"><i class='bx bxl-youtube' ></i></i></a><br>
            <a href="https://wa.me/244948057334" rel="external" target="_blank"><button style="margin-bottom: 25px;">WhatsApp</button></a><br>
        </div>
        
    </footer>
    <div class="final">
        © Copyright2024. Todos os Direitos Reservados por Azriel Armando
    </div>
</body>
</html>