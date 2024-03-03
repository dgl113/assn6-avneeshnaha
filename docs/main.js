'use strict';

(() => {
  window.addEventListener('load', (event) => {
    const order = new Order();

    const updateUI = () => {
      const table = document.querySelector('table');
      const oldTbody = document.querySelector('tbody');
      const newTbody = order.tbody(document);
      table.replaceChild(newTbody, oldTbody);

      newTbody.addEventListener('click', (event) => {
        if (event.target.tagName == 'BUTTON') {
          newTbody.querySelectorAll('button').forEach((value, index) => {
            if (value == event.target) {
              order.delete(index);
            }
          });
          updateUI();
        }
      });

      document.getElementById('totalCost').textContent =
        '$' + order.cost().toFixed(2);
    };

    document.getElementById('addItem').addEventListener('click', (event) => {
      order.add(
        new OrderItem(parseInt(quantity.value), size.value, description.value)
      );
      updateUI();
    });

    updateUI();
  });
})();
