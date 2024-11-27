function repartirCamellos() {
    const camellos = 35;
    const hermano1 = Math.floor(camellos * 1 / 2);
    const hermano2 = Math.floor(camellos * 1 / 3);
    const hermano3 = Math.floor(camellos * 1 / 9);
    const totalRepartidos = hermano1 + hermano2 + hermano3;
    const camellosRestantes = camellos - totalRepartidos;
  
    const resultado = `
      Primer hermano recibe: ${hermano1} camellos<br>
      Segundo hermano recibe: ${hermano2} camellos<br>
      Tercer hermano recibe: ${hermano3} camellos<br>
      Camellos restantes: ${camellosRestantes}
    `;
  
    document.getElementById('resultado').innerHTML = resultado;
  }