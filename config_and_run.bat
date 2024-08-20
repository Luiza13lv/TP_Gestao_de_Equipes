@echo off
echo -------- Configuring the environment --------

echo Setting environment variable API_KEY...
set "API_KEY=sua_chave_aqui"
echo API_KEY: %API_KEY%

echo Installing npm packages...
call npm install @google/generative-ai
call npm install express @google/generative-ai dotenv

echo.
echo -------- Running the Project -------- 
call start "" "http://localhost:3000"
call node server.js
