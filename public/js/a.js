
$(document).ready(function(){
    axios.get('https://avlonbot-2.railway.internal/servers')
                .then(response => {
                    $("#servers").text(response.data.servers);
                })
                .catch(error => {
                    console.error(error);
                });

            // 2. Usuários
            axios.get('https://avlonbot-2.railway.internal/users')
                .then(response => {
                    $("#users").text(response.data.users);
                })
                .catch(error => {
                    console.error(error);
                });
          // 3. Canais
          axios.get('https://avlonbot-2.railway.internal/channels')
                .then(response => {
                    $("#channels").text(response.data.channels);
                })
                .catch(error => {
                    console.error(error);
                });

 $.get("https://avlonbot-2.railway.internal/status", function(data){
        const statusIndicator = $('#status');
        const statusIndicator2 = $('#statusIndicator');
        statusIndicator.removeClass('online offline maintenance');

        if (data.status === 'online') {
            statusIndicator.addClass('online');
            statusIndicator2.addClass('status-online');
            statusIndicator.text('Online');
        } else if (data.status === 'maintenance') {
            statusIndicator.addClass('maintenance');
            statusIndicator2.addClass('status-maintenance');
            statusIndicator.text('Maintenance');
        } else {
            statusIndicator.addClass('offline');
            statusIndicator2.addClass('status-offline');
            statusIndicator.text('Offline');
        }
    });

   // 4. Uptime
   axios.get('https://avlonbot-2.railway.internal/uptime')
                .then(response => {
                    $("#uptime").text(response.data.uptime);
                })
                .catch(error => {
                    console.error(error);
                });

});

const checkButtonExists = setInterval(() => {
  const logoutButton = document.getElementById('logout-button');

  if (logoutButton) {
    clearInterval(checkButtonExists);

    logoutButton.addEventListener('click', () => {
      // Faça a requisição POST para a API de logout
      axios.post('https://avlonbot-2.railway.internal/logout', {
        method: 'POST',
      })
        .then(() => {
          // Redirecione o usuário para a página de login
          window.location.href = '/';
        })
        .catch((error) => {
          // Exiba uma mensagem de erro ao usuário
          console.error(error);
          alert('Ocorreu um erro ao tentar realizar o logout.');
        });
    });
  }
}, 100); // Verifique a cada 100ms





    document.addEventListener('DOMContentLoaded', (event) => {
        async function checkLoginStatus() {
            const response = await fetch('https://avlonbot-2.railway.internal/getProfile');
            if (response.ok) {
                const profile = await response.json();
                
                // Atualize a imagem do avatar
                const avatar = document.querySelector('#avatar');
                avatar.src = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`;
    
                // Se o usuário estiver logado, mostre o dropdown e oculte o botão de login
                document.querySelector('#profile').style.display = 'block';
                document.querySelector('#loginButton').style.display = 'none';
            }
        }
    
        checkLoginStatus();
    });
