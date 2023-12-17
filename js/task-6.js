const controls = document.querySelector('#controls');
    const createBtn = controls.querySelector('[data-create]');
    const destroyBtn = controls.querySelector('[data-destroy]');
    const boxesContainer = document.querySelector('#boxes');

    createBtn.addEventListener('click', handleCreate);
    destroyBtn.addEventListener('click', destroyBoxes);

    function handleCreate() {
      const input = controls.querySelector('input');
      const amount = parseInt(input.value);

      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
      } else {
        alert('Please enter a number between 1 and 100.');
      }
    }

    function createBoxes(amount) {
      destroyBoxes(); // Clear existing boxes

      let size = 30;

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);

        size += 10;
      }
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }