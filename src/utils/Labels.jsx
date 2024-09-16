const labels = {
  general: {
    yes: "Tak",
    no: "Nie",
    male: "Mężczyzna",
    female: "Kobieta",
    gross: "Brutto",
    net: "Netto"
  },
  form: {
    labels: {
      deathDate: "Data śmierci współmałżonka",
      birthDate: "Twoja data urodzenia",
      gender: "Twoja płeć",
      sharedProperty: "Czy była wspólność majątkowa do dnia śmierci współmałżonka?",
      yourPension: "Twoje aktualne świadczenie (brutto)",
      spousePension: "Świadczenie zmarłego współmałżonka (brutto)",
      percentageVariant: "Wariant przeliczenia",
    },
    helpers: {
      samplePension: "Emerytura, renta itp.",
      firstPartDates: "od 1.07.2025 do 31.12.2026",
      secondPartDates: "od 1.01.2027",
    },
  },
  result: {
    firstPercentageVariant: "Pierwszy wariant przeliczenia",
    secondPercentageVariant: "Drugi wariant przeliczenia",
    goBackToCalc: "Wróć do kalkulatora",
    variantCalculationLead: "w tym wariancie otrzymasz"
  },
  error: {
    fieldRequired: (fieldName) => (
      <>
        Pole <span className="font-bold">{fieldName}</span> jest polem
        wymaganym.
      </>
    ),
    allFieldsRequired: "Wszystkie pola są wymagane",
    datesMismatch: "Data śmierci współmałżonka musi być późniejsza niż Twoja data urodzenia.",
    genderAge: "Nie spełniasz wymogu wieku dla wskazanej płci.",
    sharedProperty: "Aby skorzystać z renty wdowiej, musisz mieć wspólność majątkową do dnia śmierci współmałżonka.",
  },
  button: {
    calculate: "Oblicz",
    reset: "Resetuj",
    alternateCalculations: "Zobacz wyliczenia dla wariantu alternatywnego",
    goToCalculator: "Przejdź do kalkulatora",
    readMore: "Dowiedz się więcej",
  },
};

export default labels;
