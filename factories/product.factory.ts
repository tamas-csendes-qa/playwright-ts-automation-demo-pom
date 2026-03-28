export type Product = {
  name: string;
};

export const ProductFactory = {
  sauceLabsBackpack(overrides?: Partial<Product>): Product {
    return { name: 'Sauce Labs Backpack', ...overrides };
  },

  sauceLabsBikeLight(overrides?: Partial<Product>): Product {
    return { name: 'Sauce Labs Bike Light', ...overrides };
  },

  sauceLabsBoltTShirt(overrides?: Partial<Product>): Product {
    return { name: 'Sauce Labs Bolt T-Shirt', ...overrides };
  },

  sauceLabsFleeceJacket(overrides?: Partial<Product>): Product {
    return { name: 'Sauce Labs Fleece Jacket', ...overrides };
  },

  sauceLabsOnesie(overrides?: Partial<Product>): Product {
    return { name: 'Sauce Labs Onesie', ...overrides };
  },
};
