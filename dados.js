////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Anotações de lembrete:
// Quando declarado o let estamos declarando uma variavel chamada dados que ira receber os seguintes dados titulo 
// descrição e link para criar a nossa base de dados
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let dados = [
    // Tipos de autismo
    {
        titulo: "Autismo",
        descricao: "O autismo — ou Transtorno do Espectro do Autismo — é um transtorno do neurodesenvolvimento que muda como as pessoas veem e interagem com o mundo",
        link: "https://genialcare.com.br/blog/autismoe/",
        tags: "autismo tea neurodesenvolvimento mental neurodiversas TEA"
    },
    {
        titulo: "Nível 1 - Leve",
        descricao: "O autismo nível 1 de suporte ou Transtorno do Espectro Autista (TEA) de nível 1, se caracteriza por diferenças em comunicação social e comportamentos repetitivos, porém em um grau mais leve. Indivíduos com autismo nível 1 podem ter dificuldades em iniciar e manter conversas, entender as nuances da linguagem não verbal e apresentar interesses intensos em determinados assuntos. Apesar dessas características, muitas pessoas com autismo nível 1 levam vidas independentes e bem-sucedidas.",
        link: "https://genialcare.com.br/blog/autismo-leve/",
        tags: "leve suporte nivel Nivel"
    },
    {
        titulo: "Nível 2 - Moderado",
        descricao: "O autismo moderado ou autismo nível 2 de suporte é caracterizado por desafios mais significativos na comunicação social e em comportamentos restritos e repetitivos, quando comparado ao autismo leve (nível 1). Pessoas com autismo moderado frequentemente necessitam de suporte adicional para se comunicar de forma eficaz, interagir socialmente e adaptar-se a mudanças em sua rotina. Apesar das dificuldades, com o apoio adequado, elas podem desenvolver habilidades e alcançar um alto grau de autonomia em suas vidas.",
        link: "https://genialcare.com.br/blog/autismo-moderado/",
        tags: "moderado suporte nivel Nivel"
    },
    {
        titulo: "Nível 3 - Severo",
        descricao: "O autismo severo ou nível 3 de suporte é caracterizado por desafios significativos na comunicação social e comportamentos restritos e repetitivos que afetam profundamente a vida diária. Pessoas com autismo severo frequentemente apresentam dificuldades graves na linguagem, tanto verbal quanto não verbal e podem ter comportamentos que podem ser desafiadores para si mesmas e para os outros. Elas geralmente necessitam de suporte intensivo e contínuo para realizar atividades básicas e participar da vida social. Apesar dos desafios, com as intervenções adequadas e um ambiente inclusivo, é possível promover o desenvolvimento de habilidades e melhorar a qualidade de vida dessas pessoas.",
        link: "https://genialcare.com.br/blog/autismo-severo/",
        tags: "severo suporte nivel Nivel"
    },
    {
        titulo: "Sindrome de Asperger (Condição do espectro autista)",
        descricao: "A Síndrome de Asperger, anteriormente classificada como um transtorno invasivo do desenvolvimento faz parte do espectro autista. Pessoas com Síndrome de Asperger geralmente apresentam dificuldades na interação social e na comunicação não verbal como a linguagem corporal e o contato visual. No entanto, elas costumam ter habilidades linguísticas bem desenvolvidas e um intelecto acima da média. Interesses restritos e repetitivos são comuns e podem se manifestar em áreas como números fatos ou sistemas. A Síndrome de Asperger é caracterizada por uma inteligência preservada, mas com desafios específicos nas áreas da socialização e da flexibilidade.",
        link: "https://genialcare.com.br/blog/sindrome-de-asperger/",
        tags: "etiologia Asperger asperger Comorbidades sindrome"
    },
    {
        titulo: "Sindrome de Rett (Condição do espectro autista)",
        descricao: "A Síndrome de Rett é uma condição neurológica rara que afeta principalmente meninas. Caracterizada por um desenvolvimento normal nos primeiros meses de vida, seguido por uma perda de habilidades adquiridas a Síndrome de Rett se manifesta com dificuldades motoras como perda da coordenação e movimentos estereotipados das mãos. Além disso as pessoas com Síndrome de Rett podem apresentar dificuldades de comunicação, respiração irregular e convulsões. Embora a Síndrome de Rett tenha sido anteriormente classificada dentro do espectro autista, atualmente é considerada uma condição distinta com causas genéticas específicas.",
        link: "https://genialcare.com.br/blog/sindrome-de-rett/",
        tags: "etiologia rett Rett Comorbidades sindrome"
    },
    {
        titulo: "Síndrome do X-frágil (Etiologia dos transtornos do espectro do autismo)",
        descricao: "A síndrome do X frágil é uma anomalia genética no cromossomo X que leva a deficit intelectual e transtornos comportamentais. O diagnóstico é por análise molecular de DNA. O tratamento é de suporte.",
        link: "https://www.msdmanuals.com/pt-pt/profissional/pediatria/anomalias-genéticas-e-cromossômicas/síndrome-do-x-frágil",
        tags: "etiologia fragil Comorbidades sindrome"
    },
    {
        titulo: "Rubéola congênita (Etiologia dos transtornos do espectro do autismo)",
        descricao: "A rubeola congênita é uma infecção viral adquirida da mãe durante a gestação. Os sinais são múltiplas anomalias congênitas que podem levar a morte fetal. O diagnóstico é por sorologia e cultura viral. Não há tratamento específico. A vacinação de rotina é o meio para prevenção.",
        link: "https://www.msdmanuals.com/pt-pt/profissional/pediatria/infecções-em-recém-nascidos/rubéola-congênita",
        tags: "etiologia rubeola Rubeola Comorbidades sindrome"
    },
    {
        titulo: "Infecção congênita e perinatal por citomegalovírus (CMV) - (Etiologia dos transtornos do espectro do autismo)",
        descricao: "A infecção por citomegalovírus pode ser adquirida no período pré ou perinatal, sendo a infecção viral congênita mais comum. Sinais ao nascimento, se presentes, são retardo de crescimento intrauterino, prematuridade, microcefalia, icterícia, petéquia, hepatoesplenomegalia, calcificações periventriculares, coriorretinite, pneumonite hepatite e perda auditiva neurossensorial. Ainda no lactente, os sinais podem incluir pneumonia, hepatoesplenomegalia, hepatite, trombocitopenia, síndrome semelhante à sepse e linfocitose atípica. O melhor diagnóstico da infecção neonatal é feito pela detecção viral por meio de cultura ou PCR (polymerase chainreaction). O tratamento é principalmente de suporte. Ganciclovir parenteral ou valganciclovir oral podem prevenir a deterioração auditiva e melhorar os desfechos de desenvolvimento e é administrado para recém-nascidos com doença sintomática identificada no período neonatal.",
        link: "https://www.msdmanuals.com/pt-pt/profissional/pediatria/infecções-em-recém-nascidos/infecção-congênita-e-perinatal-por-citomegalovírus-cmv",
        tags: "etiologia congenita cmv CMV virus Vírus Comorbidades sindrome"
    },
    {
        titulo: "Fenilcetonúria (PKU)-(Etiologia dos transtornos do espectro do autismo)",
        descricao: "A fenilcetonúria é um distúrbio do metabolismo de aminoácidos que causa uma síndrome clínica de deficiência intelectual com alterações cognitivas e comportamentais provocadas pela elevação na fenilalanina sérica. A principal causa é a atividade deficiente da fenilalanina hidroxilase. O diagnóstico é feito pelos altos níveis de fenilalanina e níveis normais ou baixos de tirosina. O tratamento é feito com restrição de fenilalanina na dieta durante toda a vida. Com o tratamento, o prognóstico é excelente.",
        link: "https://www.msdmanuals.com/pt-pt/profissional/pediatria/disfunções-metabólicas-hereditárias/fenilcetonúria-pku",
        tags: "etiologia congenita pku fenil Comorbidades sindrome"
    },
    {
        titulo: "Complexo da esclerose tuberosa (CET) - (Etiologia dos transtornos do espectro do autismo)",
        descricao: "Complexo da esclerose tuberosa é uma disfunção genética de herança dominante na qual os tumores (geralmente hamartomas) afetam múltiplos órgãos. O diagnóstico requer critérios clínicos específicos e exames de imagem do órgão afetado. O tratamento é sintomático ou, se o tamanho dos tumores do sistema nervoso central está aumentando, tratamento com sirolimus ou everolimo. Deve-se monitorar rotineiramente os pacientes para verificar complicações.",
        link: "https://www.msdmanuals.com/pt-pt/profissional/pediatria/síndromes-neurocutâneas/complexo-da-esclerose-tuberosa-cet",
        tags: "etiologia congenita cet tuber CET Comorbidades sindrome"
    },
// Tratamentos
    {
        titulo: "Terapia ABA - especialista: Terapeuta comportamental",
        descricao: "Análise aplicada do comportamento, focada em modificar comportamentos e habilidades sociais.",
        link: "https://educamundo.com.br/blog/o-que-e-aba-nocoes-basicas-sobre-a-terapia-e-principais-caracteristicas-2/?gad_source=1&utm_source=google&utm_medium=ppc&utm_campaign=dynamic_ads&gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfOzh_ucd_RWfbBYNcpTdX9KV1wCYdG0hoxu4T24KppwkjnIoJZoB-BoCYKMQAvD_BwE",
        tags: "terapia ABA aba comportamental"
    },
    {
        titulo: "Fonoaudiologia - especialista: Fonoaudiólogo",
        descricao: "Tratamento da linguagem, comunicação e deglutição.",
        link: "https://neuroconecta.com.br/o-papel-do-fonoaudiologo-no-tea/",
        tags: "terapia fono Fono fala comunicacao"
    },
    {
        titulo: "Terapia Ocupacional - especialista: Terapeuta ocupacional",
        descricao: "Desenvolvimento de habilidades para a vida diária e participação em atividades.",
        link: "https://genialcare.com.br/blog/terapia-ocupacional-no-autismo/",
        tags: "terapia movimento rotina diario ocupacional"
    },
    {
        titulo: "Fisioterapia - especialista: Fisioterapeuta",
        descricao: "Melhora da coordenação motora, equilíbrio e força muscular.",
        link: "https://centraldasaude.com.br/blog/5-beneficios-da-fisioterapia-para-criancas-com-autismo/",
        tags: "terapia fisio Fisio motor forca musculo"
    },
     {
        titulo: "Psicoterapia - especialista: Psicólogo",
        descricao: "Tratamento de questões emocionais e comportamentais.",
        link: "https://desenvolviver.com/comportamento/psicoterapia-para-pessoas-com-tea-por-que-e-importante/",
        tags: "terapia emocao psico Psico comportamental"
    },
    {
        titulo: "Medicamentos uso - especialista: Psiquiatra",
        descricao: "Tratamento de sintomas como ansiedade, irritabilidade e agressividade.",
        link: "https://genialcare.com.br/blog/medicamento-e-autismo/",
        tags: "medicamento medic receita receituario psico mental"
     },
     {
        titulo: "Integração sensorial - especialista: Terapeuta ocupacional",
        descricao: "Tratamento para melhorar a resposta do indivíduo a estímulos sensoriais.",
        link: "https://genialcare.com.br/blog/integracao-sensorial-no-autismo/",
        tags: "terapia sensacao sensorial estimulo"
    },
    {
        titulo: "Musicoterapia - especialista: Musicoterapeuta",
        descricao: "Utilização da música para melhorar a comunicação, interação social e habilidades motoras.",
        link: "https://autismoerealidade.org.br/2023/10/24/entenda-o-papel-da-musicoterapia-para-autistas/",
        tags: "music musica sons barulho fala canto violao instrumentos social"
    },
    {
        titulo: "Hippoterapia - especialista: Terapeuta ocupacional e fisioterapeuta",
        descricao: "Terapia com cavalos para melhorar a coordenação, equilíbrio e autoestima.",
        link: "https://www.amanhecersaudavel.com.br/desvendando-os-encantos-da-hipoterapia-para-pessoas-autistas-uma-jornada-equina-que-pode-fazer-maravilhas/",
        tags: "terapia cavalo movimento equilibrio animais autoestima fisio hipo equo"
    },
    {
        titulo: "Educação especial - especialista: Professor especializado",
        descricao: "Atendimento educacional individualizado para atender às necessidades específicas do aluno.",
        link: "https://genialcare.com.br/blog/educacao-inclusiva/",
        tags: "escola ensino prof professor edu educacao aprender aprendizagem aluno"
    }
];
