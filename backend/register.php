<?php
require_once __DIR__ . '/db.php';

$nome  = trim($_POST['nome']  ?? '');
$email = trim($_POST['email'] ?? '');
$senha = trim($_POST['senha'] ?? '');

if ($nome === '' || $email === '' || $senha === '') {
    die("Preencha todos os campos!");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Email inválido!");
}

// Verifica se já existe
$stmt = $pdo->prepare("SELECT id FROM usuarios WHERE email = ?");
$stmt->execute([$email]);
if ($stmt->fetch()) {
    die("Email já cadastrado!");
}

// Cria usuário
$hash = password_hash($senha, PASSWORD_DEFAULT);
$stmt = $pdo->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
$stmt->execute([$nome, $email, $hash]);

echo "Usuário cadastrado com sucesso!";
?>
