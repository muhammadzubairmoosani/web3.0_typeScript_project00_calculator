import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.blue.bold(
    "\n => WEB_3.0 METAVERSE - TYPESCRIPT PROJECT_0 CALCULATOR! \n"
  )
);

const askQuestion = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message: "Which operation you want to perform? \n",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
    {
      type: "number",
      name: "num1",
      message: "Enter number 1:",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter number 2:",
    },
  ]);

  if (answer.operator === "Addition") {
    console.log(
      chalk.green.bold(
        `${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`
      )
    );
  } else if (answer.operator === "Subtraction") {
    console.log(
      chalk.green.bold(
        `${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`
      )
    );
  } else if (answer.operator === "Multiplication") {
    console.log(
      chalk.green.bold(
        `${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`
      )
    );
  } else {
    console.log(
      chalk.green.bold(
        `${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`
      )
    );
  }
};

askQuestion();
