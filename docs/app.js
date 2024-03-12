'use strict';

class OrderItem {
  #quantity;
  #size;
  #description;

  constructor(quantity, size, description) {
    this.#quantity = quantity;
    this.#size = size;
    this.#description = description;
  }

  get quantity() {
    return this.#quantity;
  }

  get size() {
    return this.#size;
  }

  get description() {
    return this.#description;
  }

  set quantity(value) {
    this.#quantity = value;
  }

  set size(value) {
    this.#size = value;
  }

  set description(value) {
    this.#description = value;
  }

  cost() {
    const baseCosts = {
      'Short (236ml)': { coffee: 2.99, tea: 2.85 },
      'Tall (354ml)': { coffee: 3.19, tea: 3.05 },
      'Grande (473ml)': { coffee: 3.49, tea: 3.25 },
      'Venti (591ml)': { coffee: 3.99, tea: 3.5 },
    };

    const type = this.#description.includes('Tea') ? 'tea' : 'coffee';
    const costPerItem = baseCosts[this.#size][type] || 0;
    return this.#quantity * costPerItem;
  }

  tr(doc) {
    const trElement = doc.createElement('tr');

    const tdQuantity = doc.createElement('td');
    tdQuantity.textContent = this.#quantity;
    trElement.appendChild(tdQuantity);

    const tdSize = doc.createElement('td');
    tdSize.textContent = this.#size;
    trElement.appendChild(tdSize);
    const tdDescription = doc.createElement('td');
    tdDescription.textContent = this.#description;
    trElement.appendChild(tdDescription);

    const tdDelete = doc.createElement('td');
    const deleteButton = doc.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => this.delete());
    tdDelete.appendChild(deleteButton);
    trElement.appendChild(tdDelete);

    return trElement;
  }

  delete() {
    // Implement delete logic if needed
  }
}

class Order {
  #orderedItems;

  constructor() {
    this.#orderedItems = [];
  }

  add(item) {
    if (item instanceof OrderItem) {
      this.#orderedItems.push(item);
    } else {
      console.error('Invalid item type. Expected OrderItem.');
    }
  }

  delete(index) {
    if (index >= 0 && index < this.#orderedItems.length) {
      this.#orderedItems.splice(index, 1);
    } else {
      console.error('Invalid index.');
    }
  }

  tbody(doc) {
    const tbodyElement = doc.createElement('tbody');
    this.#orderedItems.forEach(item => {
      const trElement = item.tr(doc);
      tbodyElement.appendChild(trElement);
    });
    return tbodyElement;
  }

  cost() {
    let totalCost = 0;
    this.#orderedItems.forEach(item => {
      totalCost += item.cost();
    });
    return totalCost;
  }
}