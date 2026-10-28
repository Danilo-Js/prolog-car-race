![Prolog Car Race](docs/assets/capa.svg)

# Prolog Car Race

Corrida de carros usada como ambiente de estudo de regras de decisão. A simulação envia dados de sensores ao Prolog e recebe ações para desviar de obstáculos e orientar o veículo.

**Inteligência Artificial · Ciência da Computação · UFES**

SWI-Prolog · JavaScript · HTML · CSS

[English](README.en.md) · [Meu percurso em Ciência da Computação](https://github.com/Danilo-Js/My-Computer-Science-Course)

<p align="center"><img src="demonstrationGif.gif" alt="Demonstração original de Prolog Car Race" width="780" /></p>

## O que este projeto explora

- Uso de sensores e posição relativa de obstáculos.
- Prioridade entre regras de navegação.
- Integração de uma base lógica com uma visualização interativa.

## Como explorar

| Caminho | Conteúdo |
|---|---|
| [Servidor e regras do agente](servidor.pl) | `servidor.pl` |
| [Sensores](sensor.js) | `sensor.js` |
| [Modelo do veículo](car.js) | `car.js` |
| [Simulação](main.js) | `main.js` |

## Executar ou consultar

Com SWI-Prolog instalado:

```bash
swipl -s servidor.pl
```

O servidor utiliza a porta 8080. Abra `index.html` no ambiente local e confira os endpoints no JavaScript. Evite iniciar simultaneamente outra simulação deste acervo na mesma porta.

## Conceitos e contexto

O projeto explora regras de uma simulação didática. Resultados antigos de corridas não são tratados como métricas verificadas nesta documentação.

## Autoria e procedência

Arthur Santos Almeida e Danilo José Lima de Oliveira. Trabalho de Inteligência Artificial, com orientação da disciplina por Jacson Rodrigues Correia da Silva. Adaptação da base de Radu Mariescu-Istodor, [Self-driving car — JavaScript Course](https://www.youtube.com/watch?v=NkI9ia2cLhc).

## Licença

Os termos deste acervo estão em [LICENSE](LICENSE). Os projetos e materiais vinculados conservam suas próprias condições e atribuições.

## Projetos relacionados

- [AI-Tank-Battle](https://github.com/Danilo-Js/AI-Tank-Battle)
