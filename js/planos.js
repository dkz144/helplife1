
    // util: mask simples
    const tel = document.querySelector('#tel');
    const cpf = document.querySelector('#cpf');
    const year = document.querySelector('#year');
    year.textContent = new Date().getFullYear();

    function maskPhone(v){
      return v
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .slice(0, 15);
    }
    function maskCPF(v){
      return v
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
        .slice(0, 14);
    }
    tel.addEventListener('input', e => e.target.value = maskPhone(e.target.value));
    cpf.addEventListener('input', e => e.target.value = maskCPF(e.target.value));

    // modal
    const modal = document.getElementById('modal');
    const planSelect = document.getElementById('plano');

    document.querySelectorAll('[data-action="open-checkout"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const plan = btn.getAttribute('data-plan');
        if (plan) planSelect.value = plan;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });
    document.querySelector('[data-action="close-checkout"]').addEventListener('click', closeModal);
    modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });
    function closeModal(){ modal.style.display='none'; document.body.style.overflow = ''; }

    // FAQ accordion
    document.querySelectorAll('.faq-q').forEach(q => {
      q.addEventListener('click', () => {
        const a = q.nextElementSibling;
        const open = a.style.display === 'block';
        document.querySelectorAll('.faq-a').forEach(el => el.style.display='none');
        a.style.display = open ? 'none' : 'block';
      });
    });

    // Checkout submit (demo)
    document.getElementById('checkout-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        plano: planSelect.value,
        nome: document.getElementById('nome').value.trim(),
        cpf: document.getElementById('cpf').value.trim(),
        email: document.getElementById('email').value.trim(),
        tel: document.getElementById('tel').value.trim(),
        pagamento: document.getElementById('pagamento').value
      };
      // validação simples
      if(!data.nome || !data.cpf || !data.email || !data.tel){
        alert('Preencha todos os campos obrigatórios.');
        return;
      }
      closeModal();
      // simulação de compra
      const resumo = `Plano: ${data.plano}\nNome: ${data.nome}\nCPF: ${data.cpf}\nE-mail: ${data.email}\nTelefone: ${data.tel}\nPagamento: ${data.pagamento}`;
      alert('Pedido recebido!\n\n' + resumo + '\n\nEm instantes você receberá um e-mail com as instruções.');
    });



