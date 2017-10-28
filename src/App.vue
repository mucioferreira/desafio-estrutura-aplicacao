<template>
	<div id="app">
        <div id="header">
            <h1>
                <a href="index.html">GRC</a>
            </h1>
        </div>

		<div id="menu">
			<div id="sidebar"><a href="#" class="visible-phone"><i class="fa fa-home"></i> Dashboard</a>
	            <ul>
	                <li class="active">
	                    <router-link class="menu-buttom" to="/">
	                        <i class="fa fa-home"></i> <span>Início</span>
	                    </router-link>
	                </li>
	                <li class="submenu">
	                    <a href="#"><i class="fa fa-user"></i> <span>Usuário</span> <i class="i fa fa-caret-down"></i></a>
	                    <ul>
	                        <li><router-link to="/usuario/novo">Novo usuário</router-link></li>
	                        <li><router-link to="/usuario/">Todos usuários</router-link></li>
	                    </ul>
	                </li>
	                <li class="submenu"> <a href="#"><i class="fa fa-server"></i> <span>Servidor</span> <i class="i fa fa-caret-down"></i></a>
	                    <ul>
                          <li><router-link to="/servidor/novo">Novo servidor</router-link></li>
                          <li><router-link to="/servidor/">Todos servidores</router-link></li>
	                    </ul>
	                </li>
	                <li class="submenu"> <a href="#"><i class="fa fa-sitemap"></i> <span>Nó da Rede</span> <i class="i fa fa-caret-down"></i></a>
	                    <ul>
	                        <li><a href="#">Novo nó na rede</a></li>
	                        <li><a href="#">Buscar nó na rede</a></li>
	                        <li><a href="#">Todos nós da rede</a></li>
	                    </ul>
	                </li>
	                <li class="submenu"> <a href="#"><i class="fa fa-users"></i> <span>Usuário da Rede</span> <i class="i fa fa-caret-down"></i></a>
	                    <ul>
	                        <li><a href="#">Novo usuário na rede</a></li>
	                        <li><a href="#">Buscar usuário na rede</a></li>
	                        <li><a href="#">Todos usuários da rede</a></li>
	                    </ul>
	                </li>
	            </ul>
	        </div>
	    </div>

        <div id="content">
            <div class="container-fluid">
				<router-view/>
            </div>
        </div>

		<div class="row-fluid">
            <div id="footer" class="span12"> Gerenciador de Rede de Computadores - 2017</div>
        </div>
    </div>
</template>


