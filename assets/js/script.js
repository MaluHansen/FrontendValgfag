function selectButton(buttonId) {
    // Fjerner 'active' class fra begge knapper
    document.querySelectorAll('.buttonCatDog').forEach(button => {
        button.classList.remove('active');
    });

    // Tilføjer 'active' class til den knap der bliver trykket op
    document.getElementById(buttonId).classList.add('active');
}
