function tryOpenApp() {
    // Obtener el código de la URL: /p/{codigo}
    const path = window.location.pathname;
    const parts = path.split('/');
    const code = parts[parts.length - 1]; // Asumiendo formato /p/CODIGO

    if (code && code !== 'p' && code !== '') {
        // Redirigir al esquema de la app
        // Formato: calendario://p/CODIGO
        // Formato: calendario://app/p/CODIGO?query=pix
        const deepLink = `calendario://app/p/${code}${window.location.search}`;
        console.log("Intentando abrir:", deepLink);

        // Intentar abrir la app
        window.location.href = deepLink;

        // Si después de 2 segundos seguimos aquí, mostrar mensaje
        setTimeout(() => {
            document.getElementById('message').innerText =
                "Si la app no se abre, asegúrate de tenerla instalada.";
        }, 2000);
    } else {
        document.getElementById('message').innerText =
            "Enlace inválido o incompleto.";
        document.getElementById('open-app-btn').style.display = 'none';
    }
}

// Intentar abrir automáticamente al cargar
window.onload = function () {
    tryOpenApp();
};
