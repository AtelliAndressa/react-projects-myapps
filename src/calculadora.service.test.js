import React from 'react';
import ReactDom from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('teste da CalculadoraService', () => {
  const [calcular] = CalculadoraService();

  //1 caso de teste é a soma. Chame a função it
  it('deve garantir que 1 + 4 = 5', () => {

    let soma = calcular(1, 4, '+');
    //utilitário de espera de retorno:
    expect(soma).toEqual(5);

  })



} )
