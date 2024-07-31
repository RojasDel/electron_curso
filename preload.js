
function establecerVersion(idSelector, version){
   let elemento = document.getElementById(idSelector);
   
   if (elemento){
    elemento.innerText = version;
   }
}

// El DOM del html debe estar listo, nos servira para rellenar loa elemtos del span que trae las versiones
window.addEventListener('DOMContentLoaded', () => {
    const componentes = ['Node', 'Chrome', 'Electron']
    for(const componente of componentes){
        establecerVersion(`version${componente}` , process.versions[componente.toLowerCase()]);
    }
});