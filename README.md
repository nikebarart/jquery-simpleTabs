jquery-simpleTabs
=================

Really simple tabs, no css need

USAGE Example:

    <ul class="tabs" id="tabs">
      <li class="tab-requirements active"><a href="#">Teste de requisitos</a></li>
      <li class="tab-connection"><a href="#">Teste de conex�o</a></li>
      <li class="tab-support"><a href="#">Fale com o suporte</a></li>
    </ul>
    <div id="tab-requirements">
     content1
    </div>
    <div id="tab-connection">
      content2
    </div>
    <div id="tab-support">
      content3
    </div> 

init:
    $('#tabs').simpleTabs();
