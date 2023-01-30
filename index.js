import inquirer from "inquirer";
const wordCount = (string) => {
    const words = string.trim().split(/\s+/g);
    console.log("total words in the para are: " + words.length);
};
const getInput = async () => {
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "para",
            message: "enter your para: ",
        },
    ]);
    await wordCount(userInput.para);
};
await getInput();
