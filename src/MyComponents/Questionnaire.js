import React, { useState } from 'react';
import QuestionnaireControl from './QuestionnaireControl';

let questionnairaData = require('../quiz_data.json')

const questionnaireResponse = {
  categoryPoints: {},
  selectedCriterias: {},
  total: 0,
}

const calcTotal = (pointsToAdd, category) => {
  questionnaireResponse.categoryPoints[category] = pointsToAdd;
  return Object.keys(questionnaireResponse.categoryPoints)
                .reduce((acumulator, value) => acumulator += questionnaireResponse.categoryPoints[value], 0);
};

const selectCriteria = (option, category) => {
  questionnaireResponse.selectedCriterias[category] = option;
  return questionnaireResponse.selectedCriterias;
}

export default function Questionnaire(props) {
  const [questionnaire] = useState(questionnairaData);
  const [response, updateResponse] = useState(questionnaireResponse);

  const handleCheckBoxChange = changeEvent => {
    updateResponse(
      {
        total: calcTotal(changeEvent.points, changeEvent.category),
        selectedCriterias: selectCriteria(changeEvent.selectedOption, changeEvent.category)
      });
  }

  return (
    <QuestionnaireControl
      total={response.total}
      questionnaire={questionnaire}
      categories={questionnaireResponse.categoryPoints}
      handleCheckBoxChange={handleCheckBoxChange}
      selectedCriterias={response.selectedCriterias}
    />
  );
}
