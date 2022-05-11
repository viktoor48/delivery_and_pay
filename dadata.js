document.addEventListener('DOMContentLoaded', () => {
    $("#address").suggestions({
        token: "da440bd7a5f4141ee733e68d26b17537dbeb6117",
        type: "ADDRESS",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
});