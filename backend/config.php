<?php
// Configurações de conexão com o MySQL
define('DB_HOST', '127.0.0.1');
define('DB_NAME', 'helplife');
define('DB_USER', 'root');
define('DB_PASS', '');

// Segurança das sessões
ini_set('session.cookie_httponly', 1);
ini_set('session.use_strict_mode', 1);
session_start();
?>
