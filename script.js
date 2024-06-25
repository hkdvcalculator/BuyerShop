document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.form-group input[type="number"]');

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            this.style.width = (this.value.length + 1) * 8 + 'px';
        });
    });

    document.getElementById('calculatorForm').addEventListener('submit
