// JavaScript for Project 2

document.getElementById("runCodeButton").addEventListener("click", function () {
    // Open JDoodle's website with preloaded code
    const code = `
#include <stdio.h>

int main() {
    // Variables for user information
    char name[50];
    float balance;

    // Variables for transactions
    int choice;
    float amount;
    const float interestRate = 0.05; // 5% annual interest rate

    // User registration
    printf("Welcome to the Banking System!\\n");
    printf("Enter your name: ");
    scanf(" %[^\n]", name);
    printf("Enter your initial balance: ");
    scanf("%f", &balance);

    do {
        // Display menu
        printf("\\n--- Banking Menu ---\\n");
        printf("1. Deposit Money\\n");
        printf("2. Withdraw Money\\n");
        printf("3. Check Balance\\n");
        printf("4. Calculate Interest\\n");
        printf("5. Exit\\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter the amount to deposit: ");
                scanf("%f", &amount);
                if (amount > 0) {
                    balance += amount;
                    printf("Deposit successful! New balance: %.2f\\n", balance);
                } else {
                    printf("Invalid deposit amount.\\n");
                }
                break;

            case 2:
                printf("Enter the amount to withdraw: ");
                scanf("%f", &amount);
                if (amount > 0 && amount <= balance) {
                    balance -= amount;
                    printf("Withdrawal successful! New balance: %.2f\\n", balance);
                } else if (amount > balance) {
                    printf("Insufficient balance.\\n");
                } else {
                    printf("Invalid withdrawal amount.\\n");
                }
                break;

            case 3:
                printf("Current balance: %.2f\\n", balance);
                break;

            case 4:
                printf("Interest earned in one year: %.2f\\n", balance * 0.05);
                break;

            case 5:
                printf("Thank you for using the Banking System, %s. Goodbye!\\n", name);
                break;

            default:
                printf("Invalid choice. Please select a valid option.\\n");
                break;
        }
    } while (choice != 5);

    return 0;
}
    `;
    
    // URL to JDoodle with the code embedded
    const jdoodleUrl = `https://www.jdoodle.com/c-online-compiler?execution=cpp&input=&code=${encodeURIComponent(code)}`;
    
    // Open JDoodle in a new window with preloaded code
    window.open(jdoodleUrl, "_blank");
});

// Add event listener for "Copy Code" button
document.getElementById("copyCodeButton").addEventListener("click", function () {
    const codeBlock = document.getElementById("codeBlock").innerText;  // Get the text inside the code block

    // Use the clipboard API to copy the text
    navigator.clipboard.writeText(codeBlock).then(function () {
        alert("Code copied to clipboard!");
    }).catch(function (err) {
        console.error("Error copying text: ", err);
        alert("Failed to copy the code.");
    });
});