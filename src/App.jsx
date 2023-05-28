import { useState } from 'react';
import AgeCalculatorForm from './components/AgeCalculatorForm';
import AgeResult from './components/AgeResult';
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj) % 12;
    const ageDays = differenceInDays(
      today,
      new Date(today.getFullYear(), today.getMonth(), birthDateObj.getDate())
    );

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          Age Calculator
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400'>
          Track Your Life&apos;s Progress: Age in Years, Months, Days
        </p>
        <AgeCalculatorForm calculateAge={calculateAge} />
        {age && <AgeResult age={age} />}
      </div>
    </section>
  );
}

export default App;
