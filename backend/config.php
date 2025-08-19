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

// Lógica de conexão e inserção de dados
// Certifique-se de que os dados foram enviados via formulário, por exemplo.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Supondo que você tenha um formulário com campos 'nome' e 'email'
    $nome = $_POST['nome'];
    $email = $_POST['email'];

    try {
        // Conexão com o banco de dados usando PDO
        $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
        
        // Define o modo de erro do PDO para exceções
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepara a consulta SQL para inserção
        $sql = "INSERT INTO sua_tabela (nome, email) VALUES (:nome, :email)";
        $stmt = $pdo->prepare($sql);

        // Vincula os valores aos parâmetros da consulta preparada
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':email', $email);

        // Executa a consulta
        $stmt->execute();

        echo "Dados inseridos com sucesso!";

    } catch (PDOException $e) {
        // Em caso de erro, exibe a mensagem de erro
        echo "Erro ao inserir dados: " . $e->getMessage();
    }
    
    // Fecha a conexão (opcional, o PDO faz isso automaticamente)
    $pdo = null;
}
?>
