/*
Questão 21 - Existe alguma diferença de desempenho entre map() e 
forEach()?  
*/
//Em termos de desempenho, o map() geralmente tem um desempenho um pouco pior do que o forEach(), pois precisa criar um novo array e armazenar os resultados das chamadas de função de callback, enquanto o forEach() apenas itera sobre os elementos do array original.