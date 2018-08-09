Vue.component('intro', {
    template: ` 
    <h2>
        <span>IF</span>(RS == True):
        <span>return</span>2018/2</h2>
    <h3>Blog criado para auxiliar nos estudos
        <br> Criado por
        <a href="https://github.com/lucaspdroz">Lucas Pacheco</a>
    </h3>
    `
})

new Vue({
    el: '#intro'
})


Vue.component('my-component', {
    template: ` 
    <ul class="list">
        <li>
            <a href="pages/C.html">Básico de Programação (Base de C, Java, ES6 e Python)</a>
        </li>
        <li>
            <a href=""></a>
        </li>
        <li>
            <a href="assets/download.html">Arquivos para Download</a>
        </li>
        <li>
            <a href=""></a>
        </li>
        <li>
            <a href="pages/Projetos/project.html">Projetos Futuros</a>
        </li>
    </ul> `
})

new Vue({
    el: '#example'
})