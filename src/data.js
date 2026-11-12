/* VÍDEOS DAS AULAS
   Para cada aula, cole um link do YouTube (ex.: 'https://www.youtube.com/watch?v=XXXX').
   Se ficar vazio, o app tenta o arquivo local videos/<curso>-<n>.mp4 no mesmo repositório.
   Chave = id do curso + '-' + número da aula (começa em 1). */
const VIDEOS={
'k_boas-1':'https://youtu.be/VULx2RhULAY',  // Nossa história
'k_boas-2':'https://youtu.be/dKTnRGNjwqg',  // O Beira-Rio
'k_boas-3':'https://youtu.be/QhISJphJfAc',  // Os valores do clube
'k_fund-1':'https://youtu.be/R7O6IjH7_SM',  // Domínio
'k_fund-2':'https://youtu.be/z5bhpUaBk5g',  // Condução
'k_fund-3':'https://youtu.be/1RXBlT-tr1E',  // Passe na parede
'k_jogo-1':'', 'k_trn1-1':''
};
const TODAY='2026-11-05';
const CATS=['Sub-9','Sub-11','Sub-13','Sub-15','Sub-17'];
const FUNIL=['Sinalizado','Em acompanhamento','Na seleção do polo','Convocado à Seleção','Convidado para avaliação','Encaminhado','Mantido na rede','Arquivado'];
const SIGNALS=[
{id:'J1',g:'Jogo',t:'Protege a bola sob pressão'},
{id:'J2',g:'Jogo',t:'Olha antes de receber'},
{id:'J3',g:'Jogo',t:'Procura jogar para frente'},
{id:'J4',g:'Jogo',t:'Tenta o 1x1 no momento certo'},
{id:'J5',g:'Jogo',t:'Se posiciona para receber'},
{id:'J6',g:'Jogo',t:'Reage à perda na hora'},
{id:'A1',g:'Aprendizagem',t:'Muda depois de uma orientação'},
{id:'A2',g:'Aprendizagem',t:'Arrisca soluções novas'},
{id:'T1',g:'Atitude',t:'Pede a bola no momento difícil'},
{id:'T2',g:'Atitude',t:'Mantém o esforço no jogo difícil'},
{id:'T3',g:'Atitude',t:'Convive bem com o grupo'}];
const PAGES=[{id:'comp',t:'Competições',ico:'trophy'},{id:'sala',t:'Sala de Troféus',ico:'trophy'},{id:'fund',t:'Fundamentos',ico:'ball'},{id:'cons',t:'Conquistas',ico:'star'},{id:'marc',t:'Marcos Inter',ico:'flag'},{id:'col',t:'Colorado',ico:'shield'}];
const CARDS={
C1:{p:'comp',t:'Primeira competição',h:'Jogue uma competição',tr:'taca'},
C2:{p:'comp',t:'Festival Colorado',h:'Vá ao Festival Colorado',tr:'alta'},
C3:{p:'comp',t:'Copa de bairro',h:'Jogue uma Copa de bairro',tr:'taca'},
C4:{p:'comp',t:'Torneio de inverno',h:'Jogue o Torneio de inverno',tr:'alta'},
C5:{p:'comp',t:'Final no Beira-Rio',h:'Chegue a uma final no Beira-Rio',tr:'globo'},
H1:{p:'sala',t:'Copa do Brasil',yr:'1992',h:'Assista à aula “Nossa história”',tr:'taca',txt:'O primeiro título nacional de mata-mata do Colorado.'},
H2:{p:'sala',t:'Libertadores',yr:'2006 e 2010',h:'Assista à aula “Nossa história”',tr:'alta',txt:'Duas vezes campeão da América.'},
H3:{p:'sala',t:'Mundial de Clubes',yr:'2006',h:'Assista à aula “Nossa história”',tr:'globo',txt:'Campeão do mundo em 2006.'},
F1:{p:'fund',t:'Domínio: 10 seguidos',h:'Faça 10 domínios seguidos'},
F2:{p:'fund',t:'Condução com as duas pernas',h:'Conduza a bola com as duas pernas'},
F3:{p:'fund',t:'Passe com a perna menos forte',h:'Passe com a perna menos forte'},
F4:{p:'fund',t:'Controle orientado',h:'Controle e já saia para o lado'},
F5:{p:'fund',t:'Chute colocado',h:'Acerte o alvo em 3 de 5 chutes'},
F6:{p:'fund',t:'Passe curto em movimento',h:'Faça 10 passes em movimento'},
G1:{p:'cons',t:'Primeiro treino',h:'Vá ao primeiro treino'},
G2:{p:'cons',t:'10 treinos',h:'Complete 10 treinos'},
G3:{p:'cons',t:'Constância: 4 semanas',h:'Cumpra a meta 4 semanas'},
G4:{p:'cons',t:'Curso concluído',h:'Conclua um curso'},
G5:{p:'cons',t:'Quiz perfeito',h:'Acerte tudo num quiz'},
G6:{p:'cons',t:'Primeira missão',h:'Complete uma missão'},
M1:{p:'marc',t:'Visita ao Beira-Rio',h:'Visite o Beira-Rio'},
M2:{p:'marc',t:'Dia de jogo no estádio',h:'Assista a um jogo no estádio'},
M3:{p:'marc',t:'Aniversário do Colorado',h:'Participe da festa do clube'},
CV1:{p:'col',t:'Convocado à Seleção',h:''}};
const COMP_OPTS=['C1','C3','C4'];
const QUIZ={
q1:{t:'Quiz: quem faz o quê?',qs:[{q:'Quem defende o gol usando as mãos?',o:['Goleiro','Atacante','Lateral']},{q:'Quem ajuda a levar a bola da defesa ao ataque?',o:['O meio-campo','Só o goleiro','Ninguém']}]},
q2:{t:'Quiz: regras do jogo',qs:[{q:'Quantos jogadores de cada time começam no futebol de campo?',o:['11','9','13']},{q:'O colega caiu no chão. O que fazer?',o:['Ver se ele está bem','Rir','Seguir sem olhar']}]},
q3:{t:'Quiz: o Colorado',qs:[{q:'Qual a cor da camisa do Inter?',o:['Vermelha','Azul','Verde']},{q:'Como se chama o estádio do Inter?',o:['Beira-Rio','Arena do Rio','Estádio do Mar']}]},
q4:{t:'Leitura de jogo: olhar antes de receber',qs:[{q:'Quando é melhor olhar o campo?',o:['Antes de a bola chegar','Só depois de receber','Nunca, só a bola']},{q:'Para que serve olhar por cima do ombro?',o:['Saber onde estão o espaço e o adversário','Procurar a torcida','Ganhar tempo']}]},
q5:{t:'Leitura de jogo: espaço e apoio',qs:[{q:'O colega está marcado. O que ajuda mais?',o:['Oferecer uma linha de passe','Ficar parado','Chutar de qualquer jeito']},{q:'Espaço livre é...',o:['Onde ninguém atrapalha o próximo passe','Só o meio do campo','Onde a bola não chega']}]},
q6:{t:'Quiz: hábitos de atleta',qs:[{q:'O que mais ajuda a recuperar entre treinos?',o:['Dormir bem','Dormir pouco','Ficar acordado jogando']},{q:'Sentiu uma dor forte no treino. O que fazer?',o:['Avisar o treinador e um adulto','Esconder','Treinar mais forte']}]},
q7:{t:'Quiz: jogo coletivo',qs:[{q:'O time perdeu a bola. O que fazer?',o:['Reagir na hora para recuperar','Reclamar do colega','Esperar parado']},{q:'O que faz um time forte?',o:['Todos ajudando','Um só jogador','Ninguém conversando']}]},
q8:{t:'Quiz: fair play',qs:[{q:'O adversário fez um belo lance. O que fazer?',o:['Reconhecer e seguir','Fazer cara feia','Parar de jogar']},{q:'O árbitro marcou contra você. O que fazer?',o:['Respeitar e continuar','Gritar com ele','Sair de campo']}]}};
const COURSES=[
{id:'k_boas',aud:'atleta',t:'Boas-vindas ao Colorado',d:'História, valores e o Beira-Rio.',price:0,les:['Nossa história','O Beira-Rio','Os valores do clube']},
{id:'k_fund',aud:'atleta',t:'Fundamentos em casa',d:'Desafios com a bola para fazer em casa.',price:0,les:['Domínio','Condução','Passe na parede']},
{id:'k_jogo',aud:'atleta',t:'Jogo do Colorado: olhar antes de receber',d:'Leitura de jogo em linguagem de atleta.',price:29.9,les:['Olhar antes','Espaço e apoio','Decidir rápido']},
{id:'k_hab',aud:'atleta',t:'Hábitos de campeão',d:'Sono, rotina e escola: o que ajuda no jogo.',price:19.9,les:['Sono e descanso','Rotina e escola','Cuidar do corpo']},
{id:'k_fam1',aud:'familia',t:'Apoiar sem pressionar',d:'Como acompanhar o jogo e o treino de longe.',price:0,les:['Antes do jogo','Depois do jogo','Conversas em casa']},
{id:'k_fam2',aud:'familia',t:'Escola e rotina na base',d:'Organizar estudo, sono e treino.',price:24.9,les:['Planejar a semana','Falar com a escola','Dias de viagem']},
{id:'k_trn1',aud:'treinador',t:'Leitura de jogo: módulo básico',d:'Libera o guia de sinais (Sub-11 e Sub-13).',price:0,les:['O guia de sinais','Evidência: o que você viu','Cuidados com maturação'],unlock:true},
{id:'k_trn2',aud:'treinador',t:'Metodologia Celeiro de Ases (avançado)',d:'Metodologia do clube para a base.',price:149,les:['Princípios','Sessão-modelo','Planejamento']},
{id:'k_trn3',aud:'treinador',t:'Certificação Inter para treinadores',d:'Selo do clube para o parceiro.',price:0,les:['Prova teórica','Prática supervisionada']}];
const MATUR=[{v:'sem',t:'Sem indicação'},{v:'obs',t:'A observar'},{v:'tardia',t:'Indica maturação tardia'}];
const SKINS=['#f1c9a5','#d9a87a','#b07a4f','#7a4e2d'];
const HAIRC=['#2b2118','#5a3a22','#c9a24a'];
const HAIRS=['curto','cacheado','raspado'];

function initState(){return{
partners:[
{id:'p1',name:'Projeto Colorado',city:'Canoas',reg:'Metropolitana',mod:'Campo',faixa:'5–14',porte:120,estr:'2 campos',perfil:'Projeto',forma:'Relacionamento recorrente',comp:'Responde contatos e cumpre prazos',cap:'Recebe eventos e mantém calendário',prox:'Convite ao Festival Colorado',proxD:'2026-11-14',contato:'Rodrigo Menezes',ult:'2026-10-22',hist:[{d:'2026-10-22',tipo:'Visita',n:'Visita à escolinha e alinhamento do calendário.'},{d:'2026-09-03',tipo:'Evento',n:'Participou da Copa de bairro.'}]},
{id:'p2',name:'Escolinha do Inter · Santo Ângelo',city:'Santo Ângelo',reg:'Missões',mod:'Futsal',faixa:'6–13',porte:80,estr:'1 quadra',perfil:'Escolinha',forma:'Participação pontual',comp:'Responde com atraso',cap:'Recebe eventos pequenos',prox:'Reunião de alinhamento',proxD:'2026-11-12',contato:'Carla Antunes',ult:'2026-10-30',hist:[{d:'2026-10-30',tipo:'Contato',n:'Ligação para agendar a reunião.'}]},
{id:'p3',name:'Escolinha do Inter · Passo Fundo',city:'Passo Fundo',reg:'Norte',mod:'Ambos',faixa:'5–12',porte:60,estr:'1 campo e 1 quadra',perfil:'Escolinha',forma:'Cooperação',comp:'Responde contatos',cap:'Responsável identificado',prox:'Visita técnica',proxD:'2026-11-26',contato:'Marcos Teixeira',ult:'2026-10-10',hist:[{d:'2026-10-10',tipo:'Visita',n:'Primeira visita técnica ao projeto.'}]}],
coaches:[
{id:'tr1',name:'Rodrigo Menezes',partner:'p1',dono:true,modulo:true},
{id:'tr2',name:'Carla Antunes',partner:'p2',dono:false,modulo:true},
{id:'tr3',name:'Marcos Teixeira',partner:'p3',dono:false,modulo:false}],
athletes:[
{id:'a1',name:'Gabriel Souza',cat:'Sub-13',mod:'Campo',pos:'Meia',foot:'Direita',partner:'p1',coach:'tr1',resp:'Ana Souza',avatar:{skin:1,hair:0,hc:0},
stats:{treinos:24,eventos:5,missoes:31},week:{goal:4,done:3},done:['q1','q2','q4','d3'],
cards:[{id:'C1',d:'2026-05-14'},{id:'C3',d:'2026-09-03'},{id:'F1',d:'2026-06-20'},{id:'F2',d:'2026-07-18'},{id:'F3',d:'2026-09-12'},{id:'G1',d:'2026-03-04'},{id:'G2',d:'2026-04-30'},{id:'G3',d:'2026-10-08'},{id:'M1',d:'2026-08-02'},{id:'CV1',d:'2026-10-28'}],
altura:[{d:'2026-03-10',cm:151,by:'Rodrigo Menezes'},{d:'2026-09-15',cm:156,by:'Rodrigo Menezes'}],mat:'sem',
courses:{},consent:{termo:'v1.1',d:'2026-08-12',sinais:true,pendUpd:false},limit:60,
trilha:[{t:'Fase 1 · Primeiros passos',n:[{id:'q1',k:'quiz'},{id:'q2',k:'quiz'}]},{t:'Fase 2 · Leitura de jogo',n:[{id:'q4',k:'quiz'},{id:'d3',k:'des',card:'F3',t:'Desafio: passe com a perna menos forte'}]},{t:'Fase 3 · Jogo coletivo',n:[{id:'q5',k:'quiz'},{id:'q7',k:'quiz'},{id:'q8',k:'quiz'}]},{t:'Fase 4 · Temporada',n:[{id:'d4',k:'des',card:'F4',t:'Desafio: controle orientado'},{id:'q6',k:'quiz'}]}]},
{id:'a2',name:'Lucas Martins',cat:'Sub-11',mod:'Futsal',pos:'Ala',foot:'Esquerda',partner:'p2',coach:'tr2',resp:'Paulo Martins',avatar:{skin:0,hair:1,hc:1},
stats:{treinos:11,eventos:2,missoes:9},week:{goal:4,done:2},done:['q1','q2','d1'],
cards:[{id:'C1',d:'2026-08-22'},{id:'F1',d:'2026-09-30'},{id:'G1',d:'2026-05-10'},{id:'G2',d:'2026-10-02'}],
altura:[{d:'2026-04-02',cm:128,by:'Carla Antunes'},{d:'2026-10-05',cm:129.5,by:'Carla Antunes'}],mat:'tardia',
courses:{k_boas:{les:[]}},consent:{termo:'v1.1',d:'2026-08-20',sinais:true,pendUpd:true},limit:60,
trilha:[{t:'Primeiros passos',n:[{id:'q1',k:'quiz'},{id:'q2',k:'quiz'}]},{t:'Dominando a bola',n:[{id:'d1',k:'des',card:'F1',t:'Desafio: 10 domínios'},{id:'q3',k:'quiz'},{id:'d2',k:'des',card:'F2',t:'Desafio: duas pernas'}]},{t:'Jogo em equipe',n:[{id:'q7',k:'quiz'},{id:'q8',k:'quiz'}]}]},
{id:'a3',name:'Davi Ribeiro',cat:'Sub-9',mod:'Campo',pos:'Ainda explorando',foot:'A descobrir',partner:'p3',coach:'tr3',resp:'Juliana Ribeiro',avatar:{skin:2,hair:2,hc:2},
stats:{treinos:3,eventos:0,missoes:0},week:{goal:3,done:0},done:[],
cards:[{id:'G1',d:'2026-10-17'}],
altura:[{d:'2026-08-01',cm:121,by:'Marcos Teixeira'}],mat:'sem',
courses:{},consent:{termo:'v1.1',d:'2026-10-10',sinais:false,pendUpd:false},limit:30,
trilha:[{t:'Primeiros passos',n:[{id:'q1',k:'quiz'},{id:'q2',k:'quiz'},{id:'d1',k:'des',card:'F1',t:'Desafio: 10 domínios'}]},{t:'Conhecendo o Colorado',n:[{id:'q3',k:'quiz'},{id:'q8',k:'quiz'}]}]}],
funil:{a1:{status:'Convocado à Seleção',rev:'2027-04-28'},a2:{status:'Sinalizado',rev:'2027-04-30'}},
signals:[
{id:'s1',aid:'a1',tr:'tr1',d:'2026-09-20',obs:{J1:{ev:'Jogo vs Vila Nova, saída sob pressão no meio'},J2:{ev:'Treino-jogo, olhou antes de receber 4 vezes'},J3:{ev:'Copa de bairro, progressão pelo corredor central'},A1:{ev:'Ajustou o posicionamento após orientação no intervalo'}},conf:{J1:'2026-10-04',J2:'2026-10-04',J3:'2026-10-04',A1:'2026-10-04'}},
{id:'s2',aid:'a2',tr:'tr2',d:'2026-10-30',obs:{J1:{ev:'Jogo vs Vila Alegre, segurou a bola sob pressão'},J5:{ev:'Treino coletivo, ofereceu apoio sem a bola'},A2:{ev:'Tentou lance novo no 2x2 e repetiu no jogo'}},conf:{}}],
events:[
{id:'e1',kind:'treino',t:'Treino da turma Sub-13',d:'2026-11-06',h:'18:00',pl:'Campo da escolinha',partner:'p1'},
{id:'e2',kind:'treino',t:'Treino da turma Sub-11',d:'2026-11-06',h:'17:00',pl:'Quadra do projeto',partner:'p2'},
{id:'e3',kind:'treino',t:'Treino da turma Sub-9',d:'2026-11-07',h:'09:00',pl:'Campo da associação',partner:'p3'},
{id:'e4',kind:'macro',t:'Festival Colorado',d:'2026-11-14',h:'14:00',pl:'Centro de treinamento',cats:['Sub-9','Sub-11','Sub-13'],card:'C2',closed:false},
{id:'e5',kind:'comp',t:'Copa de bairro',d:'2026-11-21',h:'09:00',pl:'Canoas',partners:['p1','p2']},
{id:'e6',kind:'conv',t:'Rodada Colorada Sub-13',d:'2026-12-05',h:'09:00',pl:'Centro de treinamento',who:['a1'],rel:true}],
rsvp:{},pres:{},notifs:[
{id:'n1',aid:'a1',aud:'resp',text:'Comunicado do Inter: Gabriel foi convocado para a Seleção Sub-13. Veja a Agenda.',seen:false},
{id:'n2',aid:'a1',aud:'atleta',text:'Novo card no seu álbum: Convocado à Seleção.',seen:false}],
reqs:[{id:'r1',aid:'a1',kind:'compra',cid:'k_hab',status:'pend'}],audit:[{d:'2026-10-30',who:'Carla Antunes',t:'Registrou sinalização (Lucas Martins)'},{d:'2026-10-28',who:'SACI',t:'Emitiu convocação: Rodada Colorada Sub-13'},{d:'2026-10-04',who:'SACI',t:'Confirmou sinais (Gabriel Souza)'}],
extraCourses:{},counts:{archived:0},compsLog:[]};}
