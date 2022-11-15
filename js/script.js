

window.onload = function(){

    $form = document.getElementsByTagName("form")[0];

    $form.addEventListener("submit", function(event){
        event.preventDefault();
    });

    $form.addEventListener("mouseover", function(){
        $el = document.getElementById("enviar");
        $el.disabled = true;
        $countCheckeds = 0;
        $countVoids = 0;
        $inputsText = this.querySelectorAll("input[type=text], input[type=number]");
        $inputsCheckBox = this.querySelectorAll("input[type=checkbox]");

        for($item of $inputsText) if ($item.value == "") $countVoids++;
        for($item of $inputsCheckBox) if ($item.checked) $countCheckeds++;

        if ($countVoids <= 0 && $countCheckeds > 0)
            $el.disabled = false;
    })

    function criarMensagem(msg, cor){

            $el = document.createElement("span");
            $el.textContent = msg;
            $el.style.color = cor;
            return $el;
    }

    document.getElementById("nome").addEventListener("blur", function(){
        if (this.nextElementSibling) this.nextElementSibling.remove();
        if (this.value == "")
            this.after(criarMensagem("Por favor, informe seu nome completo.", "red" ));
    });

    document.getElementById("email").addEventListener("blur", function(){
        if (this.nextElementSibling) this.nextElementSibling.remove();
        if (this.value == "")
            this.after(criarMensagem("Por favor, informe seu e-mail.", "red"));
    });

    document.getElementById("incrementa").addEventListener("click", function(){
        var qtdFunc = document.getElementById("qtdFunc").value;
        if (!qtdFunc) qtdFunc = 0;
        qtdFunc = parseInt(qtdFunc) + 1;
        document.getElementById("qtdFunc").value = qtdFunc;
    });

    document.getElementById("decrementa").addEventListener("click", function(){
        var qtdFunc = document.getElementById("qtdFunc").value;
        if (!qtdFunc) qtdFunc = 0;
        if (qtdFunc > 0)
            qtdFunc = parseInt(qtdFunc) - 1;
        document.getElementById("qtdFunc").value = qtdFunc;
    });

    document.getElementById("enviar").addEventListener("click", function(){
        document.getElementById("mensagem_sucesso").classList.remove("d-none");
        this.disabled = true;
        $form.reset();
    });
}

