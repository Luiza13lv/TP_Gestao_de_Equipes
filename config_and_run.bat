@echo off
echo -------- Configuring the environment --------

echo Setting environment variable API_KEY...
set "API_KEY=AIzaSyDa_Q5OUfsZ880ZWDoAP9XHKJy8jovfcSo"
echo API_KEY: %API_KEY%

echo Installing npm packages...
call npm install @google/generative-ai
call npm install express @google/generative-ai dotenv

echo.
echo -------- Running the Project -------- 
call node server.js
