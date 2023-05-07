# App

Gympass style app

## RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar na plataforma;
- [ ] Deve ser possível se autenticar na plataforma;
- [ ] Deve ser possível obter os perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível obter o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível obter o usuário buscar academias próximas;
- [ ] Deve ser possível obter o usuário buscar academias pelo nome;
- [ ] Deve ser possível obter o usuário realizar check-in em uma academia;
- [ ] Deve ser possível obter validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [ ] Não deve ser possível cadastrar um usuário com e-mail já cadastrado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não funcionais)

- [ ] A senha do usuário precisa estar criptografado;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

