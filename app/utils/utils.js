import { ScrollView, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  question: { fontSize: 14 },
  answer: { fontSize: 12 },
});
export const expandFAQ = (
  <ScrollView style={{ gap: 5 }}>
    <Text style={styles.question}>Como funciona?</Text>
    <Text style={styles.answer}>
      Caso você tenha inscrição em componente curriculares você deve marcar os
      componentes curriculares que deseja trancar na tabela acima e clicar no
      botão confirmar.
    </Text>

    <Text style={styles.question}>
      Como funciona o trancamento de TODAS as disciplinas?
    </Text>
    <Text style={styles.answer}>
      Você deve marcar TODAS as disciplinas da lista e o sistema deverá avisá-lo
      que estará realizando o trancamento do semestre.
    </Text>

    <Text style={styles.question}>
      Como funciona o trancamento de semestre?
    </Text>
    <Text style={styles.answer}>
      Caso você não tenha inscrição em componente curricular você só terá a
      opção de realizar o trancamento do seu semestre, para isso basta ler o
      aviso do sistema e clicar em Salvar a sua Solicitação de Trancamento.
    </Text>

    <Text style={styles.question}>
      O que devo fazer se desistir do trancamento de alguma disciplina?
    </Text>
    <Text style={styles.answer}>
      Durante o período de trancamento ainda é possível desistir. Para isso,
      basta desmarcar o componente curricular na tabela acima e clicar no botão
      confirmar.
    </Text>

    <Text style={styles.question}>
      O que devo fazer se desistir do trancamento do Semestre?
    </Text>
    <Text style={styles.answer}>
      Durante o período de trancamento ainda é possível desistir. Para isso,
      basta ler o aviso do sistema e clicar no botão Salvar.
    </Text>

    <Text style={styles.question}>
      Como sei se o trancamento foi realizado?
    </Text>
    <Text style={styles.answer}>
      O trancamento aparecerá no seu histórico escolar um dia após o término do
      período de trancamento definido pela SUPAC.
    </Text>

    <Text style={styles.question}>
      Tentei realizar o trancamento, mas o sistema avisa que estou com Situação
      de Matrícula e por isso não posso realizar o trancamento. O que é isso?
    </Text>
    <Text style={styles.answer}>
      Por enquanto, o trancamento de matrícula para alunos com qualquer situação
      de matrícula já registrada só poderá ser realizado por meio de processo.
      Consulte no site da SUPAC (https://supac.ufba.br/ - Guia do Estudante) as
      orientações para fazer a solicitação. Exemplos de Situação de Matrícula
      são: trancamento por tempo determinado, Dilatação de Prazo, Matrícula
      Condicional, etc.
    </Text>
  </ScrollView>
);
