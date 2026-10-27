/* ==========================================================================
   URBAN BITES CAFE & PIZZERIA - APPLICATION JAVASCRIPT
   Interactive Menu, Dynamic Cart, WhatsApp Order Engine, Real Reviews, Chatbot
   ========================================================================== */

// Master Menu Items Database with Exact Requested Prices & Items
const MENU_ITEMS = [
  // --- PIZZAS ---
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    category: 'pizzas',
    price: 165,
    image: 'images/margherita_pizza.jpg',
    rating: 4.9,
    reviewsCount: 142,
    popular: true,
    bestseller: true,
    description: 'Classic stone-baked hand-tossed crust topped with rich San Marzano tomato sauce, generous fresh mozzarella cheese, and aromatic sweet basil.',
    prepTime: '15-20 min',
    tags: ['Pure Veg', 'Bestseller', 'Italian Herb']
  },
  {
    id: 'double-cheese-pizza',
    name: 'Double Cheese Margherita',
    category: 'pizzas',
    price: 220,
    image: 'images/double_cheese_pizza.jpg',
    rating: 4.9,
    reviewsCount: 118,
    popular: true,
    bestseller: true,
    description: 'Double the mozzarella, double the satisfaction! An extra heavy layer of molten stretchy cheese over our herb-infused red sauce base.',
    prepTime: '18 min',
    tags: ['Pure Veg', 'Extra Cheese', 'Cheese Pull']
  },
  {
    id: 'prefix-pizza',
    name: 'Prefix Pizza',
    category: 'pizzas',
    price: 299,
    image: 'images/prefix_pizza.jpg',
    rating: 4.8,
    reviewsCount: 89,
    popular: true,
    bestseller: false,
    description: 'Chef special gourmet pizza loaded with crisp bell peppers, golden sweet corn, sliced black olives, red onions, and melted mozzarella blend.',
    prepTime: '20 min',
    tags: ['Pure Veg', 'Chef Special', 'Loaded Veggies']
  },
  {
    id: 'veggie-supreme-pizza',
    name: 'Veggie Supreme Feast Pizza',
    category: 'pizzas',
    price: 310,
    image: 'images/veggie_supreme_pizza.jpg',
    rating: 4.8,
    reviewsCount: 95,
    popular: true,
    bestseller: true,
    description: 'The ultimate vegetable loaded feast: button mushrooms, green capsicum, black olives, sweet corn, diced red onions, and gooey mozzarella.',
    prepTime: '20 min',
    tags: ['Pure Veg', 'Fresh Veggies', 'Farmhouse Style']
  },
  {
    id: 'crazy-4-pizza',
    name: 'Crazy 4 Pizza',
    category: 'pizzas',
    price: 599,
    image: 'images/crazy4_pizza.jpg',
    rating: 5.0,
    reviewsCount: 98,
    popular: true,
    bestseller: true,
    description: 'The ultimate party pizza divided into 4 gourmet quadrants: Paneer Tikka, Margherita Supreme, Veggie Extravaganza, and Spicy Jalapeño Corn.',
    prepTime: '25 min',
    tags: ['Pure Veg', 'Giant 4-in-1', 'Party Favorite']
  },
  {
    id: 'chatpata-paneer-pizza',
    name: 'Chatpata Paneer Pizza',
    category: 'pizzas',
    price: 320,
    image: 'images/chatpata_paneer_pizza.jpg',
    rating: 4.9,
    reviewsCount: 104,
    popular: true,
    bestseller: true,
    description: 'Tangy tandoori marinated cottage cheese cubes, charred red onions, capsicum, green chillies, and melted mozzarella on our signature base.',
    prepTime: '20 min',
    tags: ['Pure Veg', 'Desi Tandoori', 'Spicy Paneer']
  },
  {
    id: 'tandoori-paneer-pizza',
    name: 'Smoky Tandoori Paneer Tikka Pizza',
    category: 'pizzas',
    price: 340,
    image: 'images/tandoori_paneer_pizza.jpg',
    rating: 4.9,
    reviewsCount: 126,
    popular: true,
    bestseller: true,
    description: 'Clay-oven style smoky roasted paneer cubes, crisp capsicum, charred onions, fiery tandoori mayo swirl, and melted mozzarella.',
    prepTime: '20 min',
    tags: ['Pure Veg', 'Smoky Tandoori', 'Chef Pick']
  },
  {
    id: 'paneer-bhurji-pizza',
    name: 'Paneer Bhurji Pizza',
    category: 'pizzas',
    price: 300,
    image: 'images/paneer_bhurji_pizza.jpg',
    rating: 4.8,
    reviewsCount: 67,
    popular: false,
    bestseller: false,
    description: 'A street-style delight with spiced crumbled paneer bhurji, tomatoes, fresh cilantro, cumin hints, and double cheese blend.',
    prepTime: '20 min',
    tags: ['Pure Veg', 'Indian Fusion', 'Rich Paneer']
  },
  {
    id: 'balle-balle-pizza',
    name: 'Balle Balle Pizza',
    category: 'pizzas',
    price: 320,
    image: 'images/balle_balle_pizza.jpg',
    rating: 4.9,
    reviewsCount: 115,
    popular: false,
    bestseller: true,
    description: 'Punjabi fusion feast with rich makhani gravy sauce, marinated paneer, crunchy capsicum, red onions, kasuri methi, and mozzarella.',
    prepTime: '20 min',
    tags: ['Pure Veg', 'Makhani Sauce', 'Special Fusion']
  },
  {
    id: 'peri-peri-pizza',
    name: 'Fiery Peri-Peri Paneer Pizza',
    category: 'pizzas',
    price: 330,
    image: 'images/peri_peri_pizza.jpg',
    rating: 4.8,
    reviewsCount: 88,
    popular: true,
    bestseller: false,
    description: 'Dusted with authentic African bird\'s eye peri-peri spice, juicy paneer cubes, sliced red paprika, golden sweet corn, and mozzarella.',
    prepTime: '20 min',
    tags: ['Pure Veg', 'Spicy Peri Peri', 'Hot & Tangy']
  },
  {
    id: 'thin-crust-pizza',
    name: 'Italian Garden Thin Crust Pizza',
    category: 'pizzas',
    price: 275,
    image: 'images/thin_crust_pizza.jpg',
    rating: 4.7,
    reviewsCount: 62,
    popular: false,
    bestseller: false,
    description: 'Super thin cracker-crisp artisanal base with fresh cherry tomatoes, sliced jalapeños, sweet basil leaves, and creamy mozzarella.',
    prepTime: '15 min',
    tags: ['Pure Veg', 'Crispy Thin Crust', 'Light & Fresh']
  },
  {
    id: 'mexican-pizza',
    name: 'Mexican Green Wave Pizza',
    category: 'pizzas',
    price: 295,
    image: 'images/mexican_pizza.jpg',
    rating: 4.8,
    reviewsCount: 79,
    popular: true,
    bestseller: false,
    description: 'Zesty Mexican herbs, crunchy capsicum, ripe tomatoes, spicy sliced jalapeños, sweet corn, and stretchy cheese on hand-stretched dough.',
    prepTime: '18 min',
    tags: ['Pure Veg', 'Mexican Herbs', 'Zesty & Crisp']
  },
  {
    id: 'yummy-dummy-pizza',
    name: 'Yummy Dummy Pizza',
    category: 'pizzas',
    price: 330,
    image: 'images/yummy_dummy_pizza.jpg',
    rating: 4.8,
    reviewsCount: 78,
    popular: false,
    bestseller: false,
    description: 'A kid & cheese lover favorite! Extra liquid cheese burst, golden American sweet corn, diced pineapple, and crisp capsicum.',
    prepTime: '20 min',
    tags: ['Pure Veg', 'Cheese Burst', 'Sweet & Savory']
  },

  // --- QUICK BITES & SIDES ---
  {
    id: 'cheese-garlic-bread',
    name: 'Cheese Garlic Bread',
    category: 'quick-bites',
    price: 110,
    image: 'images/garlic_bread.jpg',
    rating: 4.9,
    reviewsCount: 154,
    popular: true,
    bestseller: true,
    description: 'Freshly baked baguette smothered in roasted garlic herb butter, covered with molten stretchy mozzarella cheese and oregano.',
    prepTime: '12 min',
    tags: ['Pure Veg', 'Stretchy Cheese', 'Top Pick']
  },
  {
    id: 'stuffed-garlic-bread',
    name: 'Supreme Stuffed Garlic Bread',
    category: 'quick-bites',
    price: 150,
    image: 'images/stuffed_garlic_bread.jpg',
    rating: 4.9,
    reviewsCount: 138,
    popular: true,
    bestseller: true,
    description: 'Freshly folded bread stuffed with melted liquid cheese, sweet corn, spicy jalapeños, and roasted garlic herb butter.',
    prepTime: '15 min',
    tags: ['Pure Veg', 'Stuffed Cheese', 'Bestseller']
  },
  {
    id: 'french-fries',
    name: 'Classic Salted French Fries [250 g]',
    category: 'quick-bites',
    price: 110,
    image: 'images/french_fries.jpg',
    rating: 4.8,
    reviewsCount: 130,
    popular: true,
    bestseller: false,
    description: 'Golden crispy potato fries sprinkled with Himalayan sea salt and herbs, served with our signature creamy garlic mayo dip.',
    prepTime: '10 min',
    tags: ['Pure Veg', 'Crunchy', '250 grams']
  },
  {
    id: 'periperi-fries',
    name: 'Peri-Peri Masala Fries [250 g]',
    category: 'quick-bites',
    price: 130,
    image: 'images/periperi_fries.jpg',
    rating: 4.9,
    reviewsCount: 145,
    popular: true,
    bestseller: true,
    description: 'Crunchy golden fries tossed in our fiery secret peri-peri spice dust. Served piping hot with chilled cheese dip.',
    prepTime: '10 min',
    tags: ['Pure Veg', 'Spicy Peri Peri', 'Crispy Snack']
  },
  {
    id: 'classic-burger',
    name: 'Urban Crispy Burger',
    category: 'quick-bites',
    price: 120,
    image: 'images/burger.jpg',
    rating: 4.7,
    reviewsCount: 65,
    popular: true,
    bestseller: false,
    description: 'Golden spiced potato-herb patty inside toasted sesame buns with melted cheese slice, crisp lettuce, tomatoes, and house sauce.',
    prepTime: '12 min',
    tags: ['Pure Veg', 'Crispy Patty', 'Handheld']
  },
  {
    id: 'paneer-burger',
    name: 'Grilled Paneer Tikka Burger',
    category: 'quick-bites',
    price: 145,
    image: 'images/paneer_burger.jpg',
    rating: 4.8,
    reviewsCount: 84,
    popular: true,
    bestseller: true,
    description: 'Thick marinated tandoori paneer steak grilled to perfection, layered with mint mayo, crisp onions, lettuce, and cheddar cheese.',
    prepTime: '12 min',
    tags: ['Pure Veg', 'Tandoori Paneer', 'Juicy Burger']
  },
  {
    id: 'jalapeno-poppers',
    name: 'Cheesy Jalapeño Poppers [6 Pcs]',
    category: 'quick-bites',
    price: 135,
    image: 'images/jalapeno_poppers.jpg',
    rating: 4.8,
    reviewsCount: 72,
    popular: false,
    bestseller: false,
    description: 'Golden breaded bite-sized nuggets oozing with melted cheddar cheese and spicy jalapeño bits. Served with tangy tomato salsa.',
    prepTime: '10 min',
    tags: ['Pure Veg', 'Melty Cheese', 'Crispy Poppers']
  },
  {
    id: 'veg-nuggets',
    name: 'Crispy Veggie Nuggets [8 Pcs]',
    category: 'quick-bites',
    price: 120,
    image: 'images/veg_nuggets.jpg',
    rating: 4.7,
    reviewsCount: 59,
    popular: false,
    bestseller: false,
    description: 'Golden crumb-fried vegetable bites loaded with mashed potatoes, peas, and carrots. Served with creamy garlic dip.',
    prepTime: '10 min',
    tags: ['Pure Veg', 'Crispy Bites', 'Tea Time Snack']
  },
  {
    id: 'loaded-nachos',
    name: 'Loaded Cheesy Mexican Nachos',
    category: 'quick-bites',
    price: 160,
    image: 'images/loaded_nachos.jpg',
    rating: 4.9,
    reviewsCount: 91,
    popular: true,
    bestseller: true,
    description: 'Crisp corn tortilla chips drenched in warm cheese sauce, fresh pico de gallo tomato salsa, sweet corn, and sliced jalapeños.',
    prepTime: '10 min',
    tags: ['Pure Veg', 'Warm Cheese Sauce', 'Mexican Nachos']
  },

  // --- PASTAS & INDO-CHINESE ---
  {
    id: 'red-hot-pasta',
    name: 'Red Hot Arrabbiata Pasta',
    category: 'pastas-noodles',
    price: 125,
    image: 'images/red_hot_pasta.jpg',
    rating: 4.8,
    reviewsCount: 84,
    popular: true,
    bestseller: false,
    description: 'Al dente penne pasta tossed in our spicy slow-simmered Arrabbiata red sauce with garlic, chili flakes, basil, and grated cheese.',
    prepTime: '15 min',
    tags: ['Pure Veg', 'Spicy Arrabbiata', 'Italian Classic']
  },
  {
    id: 'white-sauce-pasta',
    name: 'Creamy White Sauce Alfredo Pasta',
    category: 'pastas-noodles',
    price: 140,
    image: 'images/white_pasta.jpg',
    rating: 4.8,
    reviewsCount: 88,
    popular: true,
    bestseller: false,
    description: 'Silky smooth Alfredo style white sauce penne cooked with fresh cream, melted cheese, mushrooms, and herb seasoning.',
    prepTime: '15 min',
    tags: ['Pure Veg', 'Cheesy Alfredo', 'Mild & Creamy']
  },
  {
    id: 'pink-sauce-pasta',
    name: 'Mama Rosa Mixed Pink Sauce Pasta',
    category: 'pastas-noodles',
    price: 155,
    image: 'images/pink_sauce_pasta.jpg',
    rating: 4.9,
    reviewsCount: 103,
    popular: true,
    bestseller: true,
    description: 'The best of both worlds! Creamy white Alfredo married with tangy Italian red sauce, fresh broccoli, capsicum, and herbs.',
    prepTime: '15 min',
    tags: ['Pure Veg', 'Pink Sauce', 'Chef Special']
  },
  {
    id: 'schezwan-pasta',
    name: 'Fiery Schezwan Fusion Pasta',
    category: 'pastas-noodles',
    price: 150,
    image: 'images/schezwan_pasta.jpg',
    rating: 4.8,
    reviewsCount: 76,
    popular: false,
    bestseller: false,
    description: 'Desi-Italian fusion penne tossed in fiery authentic Sichuan pepper paste with crunchy bell peppers, onions, and cheese topping.',
    prepTime: '15 min',
    tags: ['Pure Veg', 'Schezwan Spice', 'Desi Twist']
  },
  {
    id: 'veg-noodles',
    name: 'Veg Hakka Noodles',
    category: 'pastas-noodles',
    price: 145,
    image: 'images/noodles.jpg',
    rating: 4.7,
    reviewsCount: 76,
    popular: true,
    bestseller: true,
    description: 'Wok-tossed Hakka noodles with julienned cabbage, crunchy bell peppers, carrots, spring onions, and signature Urban Bites Asian spice blend.',
    prepTime: '15 min',
    tags: ['Pure Veg', 'Wok Tossed', 'Indo-Chinese']
  },
  {
    id: 'chilli-garlic-noodles',
    name: 'Spicy Chilli Garlic Noodles',
    category: 'pastas-noodles',
    price: 155,
    image: 'images/chilli_garlic_noodles.jpg',
    rating: 4.8,
    reviewsCount: 94,
    popular: true,
    bestseller: true,
    description: 'Wok-fired noodles tossed with golden burnt garlic, crushed dry red chillies, dark soya, shredded cabbage, and scallions.',
    prepTime: '15 min',
    tags: ['Pure Veg', 'Burnt Garlic', 'Spicy Wok']
  },
  {
    id: 'manchurian-noodles',
    name: 'Hakka Noodles with Veg Manchurian Bowl',
    category: 'pastas-noodles',
    price: 175,
    image: 'images/manchurian_noodles.jpg',
    rating: 4.9,
    reviewsCount: 112,
    popular: false,
    bestseller: true,
    description: 'Hearty meal bowl of wok Hakka noodles paired with succulent vegetable Manchurian dumplings simmered in rich ginger-garlic gravy.',
    prepTime: '18 min',
    tags: ['Pure Veg', 'Complete Bowl', 'Indo-Chinese Feast']
  },

  // --- COMBOS & VALUE MEALS ---
  {
    id: 'lunch-pack',
    name: 'Lunch Pack Solo Meal',
    category: 'combos',
    price: 199,
    image: 'images/lunch_pack.jpg',
    rating: 4.9,
    reviewsCount: 112,
    popular: true,
    bestseller: true,
    description: 'Complete cafe meal combo featuring a personal mini pizza, crispy golden french fries, and a chilled beverage to power up your afternoon.',
    prepTime: '15 min',
    tags: ['Pure Veg', 'Value Meal', 'Full Combo']
  },
  {
    id: 'margherita-pizza-combo',
    name: 'Margherita Feast Combo',
    category: 'combos',
    price: 375,
    image: 'images/margherita_feast_combo.jpg',
    rating: 4.9,
    reviewsCount: 92,
    popular: true,
    bestseller: true,
    description: 'Full combo pack: 1 Regular Margherita Pizza + 1 Portion Cheese Garlic Bread + 1 Chilled Beverage of your choice.',
    prepTime: '18 min',
    tags: ['Pure Veg', 'Combo Saver', 'Best Value']
  },
  {
    id: 'burger-combo',
    name: 'Burger, Fries & Cooler Combo',
    category: 'combos',
    price: 199,
    image: 'images/burger_combo.jpg',
    rating: 4.8,
    reviewsCount: 86,
    popular: true,
    bestseller: false,
    description: '1 Urban Crispy Burger + 1 Regular Salted French Fries + 1 Chilled Lemon Iced Tea or Soft Beverage. The perfect fast snack.',
    prepTime: '12 min',
    tags: ['Pure Veg', 'Burger Combo', 'Quick Bite']
  },
  {
    id: 'pasta-combo',
    name: 'Pasta & Garlic Bread Duo',
    category: 'combos',
    price: 230,
    image: 'images/pasta_combo.jpg',
    rating: 4.9,
    reviewsCount: 77,
    popular: false,
    bestseller: true,
    description: 'Choice of Red Hot Arrabbiata or Creamy White Pasta served with 2 warm slices of Cheese Garlic Bread.',
    prepTime: '15 min',
    tags: ['Pure Veg', 'Italian Duo', 'Filling Meal']
  },
  {
    id: 'party-box',
    name: 'Urban Bites Grand Party Box',
    category: 'combos',
    price: 699,
    image: 'images/party_box.jpg',
    rating: 5.0,
    reviewsCount: 110,
    popular: false,
    bestseller: true,
    description: '1 Medium Gourmet Pizza + 1 Stuffed Garlic Bread + 1 Peri-Peri Fries + 2 Chilled Coolers. Serves 3-4 hungry foodies!',
    prepTime: '25 min',
    tags: ['Pure Veg', 'Grand Feast', 'Serves 3-4']
  },

  // --- BEVERAGES & DESSERTS ---
  {
    id: 'cold-coffee',
    name: 'Cold Coffee with Vanilla Ice Cream',
    category: 'beverages',
    price: 110,
    image: 'images/cold_coffee.jpg',
    rating: 4.9,
    reviewsCount: 160,
    popular: true,
    bestseller: true,
    description: 'Thick, frothy blended Arabica coffee topped with a creamy scoop of vanilla ice cream and chocolate drizzle.',
    prepTime: '5 min',
    tags: ['Pure Veg', 'Chilled Drink', 'Rich & Frothy']
  },
  {
    id: 'oreo-shake',
    name: 'Oreo Thick Milkshake',
    category: 'beverages',
    price: 130,
    image: 'images/oreo_shake.jpg',
    rating: 4.9,
    reviewsCount: 124,
    popular: true,
    bestseller: true,
    description: 'Thick creamy milkshake churned with rich dairy cream, crunchy chocolate Oreo biscuits, and Hershey chocolate syrup.',
    prepTime: '5 min',
    tags: ['Pure Veg', 'Thick Shake', 'Chocolate Lover']
  },
  {
    id: 'virgin-mojito',
    name: 'Refreshing Virgin Mint Mojito',
    category: 'beverages',
    price: 95,
    image: 'images/mojito.jpg',
    rating: 4.8,
    reviewsCount: 82,
    popular: true,
    bestseller: false,
    description: 'Zesty lime wedges muddled with fresh garden mint leaves, sparkling soda, and crushed ice for the ultimate cooler.',
    prepTime: '5 min',
    tags: ['Pure Veg', 'Mint & Lime', 'Refreshing']
  },
  {
    id: 'blue-lagoon',
    name: 'Blue Curacao Lagoon Cooler',
    category: 'beverages',
    price: 105,
    image: 'images/blue_lagoon.jpg',
    rating: 4.8,
    reviewsCount: 68,
    popular: false,
    bestseller: false,
    description: 'Vibrant sparkling tropical blue citrus mocktail with crushed ice, lemon zest, and fizzy soda. Highly refreshing.',
    prepTime: '5 min',
    tags: ['Pure Veg', 'Citrus Mocktail', 'Cool & Fizzy']
  },
  {
    id: 'choco-lava',
    name: 'Molten Choco Lava Cake',
    category: 'beverages',
    price: 140,
    image: 'images/choco_lava.jpg',
    rating: 5.0,
    reviewsCount: 140,
    popular: true,
    bestseller: true,
    description: 'Warm, decadent dark chocolate cake with a molten chocolate center that flows luxuriously with the first spoon.',
    prepTime: '8 min',
    tags: ['Pure Veg', 'Molten Chocolate', 'Dessert Heaven']
  },
  {
    id: 'sizzling-brownie',
    name: 'Sizzling Walnut Brownie with Ice Cream',
    category: 'beverages',
    price: 160,
    image: 'images/sizzling_brownie.jpg',
    rating: 4.9,
    reviewsCount: 96,
    popular: false,
    bestseller: true,
    description: 'Rich dark walnut brownie served sizzling on a smoking hot sizzler plate with vanilla ice cream and hot chocolate fudge.',
    prepTime: '10 min',
    tags: ['Pure Veg', 'Sizzling Dessert', 'Chef Special']
  },

  // --- ADDITIONAL SPECIALTY DISHES (50+ DISHES EXPANSION) ---
  {
    id: 'corn-cheese-pizza',
    name: 'Golden Corn & Cheese Burst Pizza',
    category: 'pizzas',
    price: 260,
    image: 'images/corn_cheese_pizza.jpg',
    rating: 4.8,
    reviewsCount: 85,
    popular: true,
    bestseller: true,
    description: 'Juicy American sweet corn smothered in molten cheese burst sauce, mozzarella, and toasted herbs on our hand-tossed crust.',
    prepTime: '18 min',
    tags: ['Pure Veg', 'Cheese Burst', 'Sweet Corn']
  },
  {
    id: 'paneer-makhani-pizza',
    name: 'Spicy Paneer Makhani Pizza',
    category: 'pizzas',
    price: 335,
    image: 'images/paneer_makhani_pizza.jpg',
    rating: 4.9,
    reviewsCount: 110,
    popular: false,
    bestseller: true,
    description: 'Rich creamy makhani gravy, chargrilled paneer cubes, julienned ginger, crisp capsicum, and melted mozzarella blend.',
    prepTime: '20 min',
    tags: ['Pure Veg', 'Makhani Gravy', 'Desi Twist']
  },
  {
    id: 'bbq-paneer-pizza',
    name: 'Smoky BBQ Paneer & Mushroom Pizza',
    category: 'pizzas',
    price: 325,
    image: 'images/bbq_paneer_pizza.jpg',
    rating: 4.8,
    reviewsCount: 74,
    popular: false,
    bestseller: false,
    description: 'Smoky barbecue glazed cottage cheese, sliced button mushrooms, caramelized red onions, and melted mozzarella.',
    prepTime: '20 min',
    tags: ['Pure Veg', 'Smoky BBQ', 'Gourmet Pizza']
  },
  {
    id: 'cheesy-fries',
    name: 'Cheesy Melt French Fries with Jalapeños',
    category: 'quick-bites',
    price: 140,
    image: 'images/cheesy_fries.jpg',
    rating: 4.9,
    reviewsCount: 122,
    popular: true,
    bestseller: true,
    description: 'Golden crunchy fries drenched in warm rich cheddar cheese sauce and topped with spicy sliced jalapeño rings.',
    prepTime: '10 min',
    tags: ['Pure Veg', 'Cheese Sauce', 'Loaded Fries']
  },
  {
    id: 'spring-rolls',
    name: 'Crispy Veggie Spring Rolls [6 Pcs]',
    category: 'quick-bites',
    price: 135,
    image: 'images/spring_rolls.jpg',
    rating: 4.8,
    reviewsCount: 88,
    popular: false,
    bestseller: false,
    description: 'Crunchy golden pastry rolls packed with julienned vegetables and Asian spices. Served with sweet chilli dipping sauce.',
    prepTime: '12 min',
    tags: ['Pure Veg', 'Crispy Rolls', 'Indo-Chinese']
  },
  {
    id: 'chilli-cheese-toast',
    name: 'Artisan Chilli Cheese Toast [4 Pcs]',
    category: 'quick-bites',
    price: 115,
    image: 'images/chilli_cheese_toast.jpg',
    rating: 4.7,
    reviewsCount: 71,
    popular: false,
    bestseller: false,
    description: 'Crisp sourdough slices loaded with finely chopped green chillies, bell peppers, melted cheddar, and oregano herbs.',
    prepTime: '10 min',
    tags: ['Pure Veg', 'Spicy Toast', 'Tea Time Snack']
  },
  {
    id: 'baked-pasta',
    name: 'Cheesy Oven-Baked Penne Pasta',
    category: 'pastas-noodles',
    price: 165,
    image: 'images/baked_pasta.jpg',
    rating: 4.9,
    reviewsCount: 95,
    popular: true,
    bestseller: true,
    description: 'Al dente penne baked under a golden blistered mozzarella cheese crust with rich Italian mixed herb sauce and sweet corn.',
    prepTime: '18 min',
    tags: ['Pure Veg', 'Oven Baked', 'Cheesy Crust']
  },
  {
    id: 'singapore-noodles',
    name: 'Singapore Style Spicy Wok Noodles',
    category: 'pastas-noodles',
    price: 160,
    image: 'images/singapore_noodles.jpg',
    rating: 4.8,
    reviewsCount: 83,
    popular: false,
    bestseller: false,
    description: 'Aromatic wok-tossed noodles with mild curry spice infusion, shredded cabbage, carrots, bell peppers, and roasted sesame.',
    prepTime: '15 min',
    tags: ['Pure Veg', 'Curry Spiced', 'Asian Special']
  },
  {
    id: 'family-feast',
    name: 'Urban Bites Grand Family Feast',
    category: 'combos',
    price: 799,
    image: 'images/family_feast.jpg',
    rating: 5.0,
    reviewsCount: 135,
    popular: true,
    bestseller: true,
    description: 'The mega feast: 2 Medium Gourmet Pizzas + 1 Creamy White Pasta + 1 Cheesy Garlic Bread + 4 Chilled Coolers. Serves 4-5!',
    prepTime: '25 min',
    tags: ['Pure Veg', 'Family Pack', 'Serves 4-5']
  },
  {
    id: 'strawberry-shake',
    name: 'Lush Strawberry Thick Milkshake',
    category: 'beverages',
    price: 125,
    image: 'images/strawberry_shake.jpg',
    rating: 4.8,
    reviewsCount: 76,
    popular: false,
    bestseller: false,
    description: 'Creamy thick shake blended with strawberry compote, dairy vanilla ice cream, and topped with rich fruit syrup.',
    prepTime: '5 min',
    tags: ['Pure Veg', 'Fruit Shake', 'Sweet & Creamy']
  },
  {
    id: 'green-apple-iced-tea',
    name: 'Crisp Green Apple Mint Iced Tea',
    category: 'beverages',
    price: 99,
    image: 'images/green_apple_iced_tea.jpg',
    rating: 4.8,
    reviewsCount: 64,
    popular: false,
    bestseller: false,
    description: 'Brewed black tea infused with tart green apple syrup, fresh garden mint, lemon slice, and crushed ice.',
    prepTime: '5 min',
    tags: ['Pure Veg', 'Iced Tea', 'Tart & Refreshing']
  }
];

// Initial Customer Reviews (stored and augmented via localStorage)
const DEFAULT_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Rahul Patel',
    rating: 5,
    date: '2 days ago',
    dish: 'Margherita Pizza & French Fries',
    comment: 'The Margherita Pizza here is simply unmatched in Himatnagar! Freshly baked, crispy thin crust with stretchy mozzarella. Loved the fast service and clean cafe vibes.'
  },
  {
    id: 'rev-2',
    name: 'Priya Sharma',
    rating: 5,
    date: '5 days ago',
    dish: 'Crazy 4 Pizza',
    comment: 'Ordered the Crazy 4 Pizza for our family party through WhatsApp order. Within 25 minutes it was delivered piping hot! All four flavors were delicious, especially the paneer.'
  },
  {
    id: 'rev-3',
    name: 'Ankit Soni',
    rating: 5,
    date: '1 week ago',
    dish: 'Cheese Garlic Bread',
    comment: 'Best cheese garlic bread in town! Perfectly buttery with loads of cheese. Highly recommend visiting the cafe on Civil Road. Polite staff and aesthetic atmosphere.'
  },
  {
    id: 'rev-4',
    name: 'Sneha Mehta',
    rating: 5,
    date: '2 weeks ago',
    dish: 'Red Hot Pasta & Cold Coffee',
    comment: 'The Red Hot Pasta has that authentic spicy Italian kick, and the Cold Coffee with vanilla ice cream is pure bliss. Definitely my new go-to cafe.'
  }
];

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
class UrbanCafeApp {
  constructor() {
    this.cart = this.loadCart();
    this.reviews = this.loadReviews();
    
    // Check if category is passed via URL query parameter (e.g., menu.html?cat=pizzas)
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    this.activeCategory = catParam || 'all';

    this.searchQuery = '';
    this.deliveryType = 'delivery'; // 'delivery', 'takeaway', 'dine-in'
    this.paymentMethod = 'whatsapp'; // default payment / order route

    this.init();
  }

  init() {
    this.renderPopularDishes();
    this.renderMenuGrid();
    this.renderBestsellerRow();
    this.renderReviews();
    this.updateCartUI();
    this.setupEventListeners();
    this.setupChatbot();
    this.setupReviewForm();

    // Activate the corresponding category tab if specified in URL
    if (this.activeCategory && this.activeCategory !== 'all') {
      const targetTab = document.querySelector(`.tab-btn[data-category="${this.activeCategory}"]`);
      if (targetTab) {
        document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
        targetTab.classList.add('active');
      }
    }
  }

  // Load / Save Cart
  loadCart() {
    try {
      const saved = localStorage.getItem('urban_bites_cart');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  }

  saveCart() {
    try {
      localStorage.setItem('urban_bites_cart', JSON.stringify(this.cart));
    } catch (e) {
      console.error(e);
    }
  }

  // Load / Save Reviews
  loadReviews() {
    try {
      const saved = localStorage.getItem('urban_bites_reviews');
      return saved ? JSON.parse(saved) : DEFAULT_REVIEWS;
    } catch (e) {
      return DEFAULT_REVIEWS;
    }
  }

  saveReviews() {
    try {
      localStorage.setItem('urban_bites_reviews', JSON.stringify(this.reviews));
    } catch (e) {
      console.error(e);
    }
  }

  // ========================================================================
  // CART OPERATIONS
  // ========================================================================
  addToCart(dishId, qty = 1) {
    const dish = MENU_ITEMS.find(item => item.id === dishId);
    if (!dish) return;

    if (this.cart[dishId]) {
      this.cart[dishId].qty += qty;
    } else {
      this.cart[dishId] = {
        id: dish.id,
        name: dish.name,
        price: dish.price,
        image: dish.image,
        qty: qty
      };
    }

    this.saveCart();
    this.updateCartUI();
    this.renderMenuGrid(); // Update card buttons
    this.renderPopularDishes();
    this.showToast(`Added "${dish.name}" to cart! 🛒`);
    this.bumpCartBadge();
  }

  updateQty(dishId, delta) {
    if (!this.cart[dishId]) return;

    this.cart[dishId].qty += delta;
    if (this.cart[dishId].qty <= 0) {
      delete this.cart[dishId];
    }

    this.saveCart();
    this.updateCartUI();
    this.renderMenuGrid();
    this.renderPopularDishes();
  }

  removeFromCart(dishId) {
    if (this.cart[dishId]) {
      const name = this.cart[dishId].name;
      delete this.cart[dishId];
      this.saveCart();
      this.updateCartUI();
      this.renderMenuGrid();
      this.renderPopularDishes();
      this.showToast(`Removed "${name}" from cart`);
    }
  }

  clearCart() {
    this.cart = {};
    this.saveCart();
    this.updateCartUI();
    this.renderMenuGrid();
    this.renderPopularDishes();
  }

  getCartCount() {
    return Object.values(this.cart).reduce((total, item) => total + item.qty, 0);
  }

  getSubtotal() {
    return Object.values(this.cart).reduce((total, item) => total + (item.price * item.qty), 0);
  }

  getDeliveryFee(subtotal) {
    if (this.deliveryType === 'takeaway' || this.deliveryType === 'dine-in') {
      return 0;
    }
    if (subtotal === 0) return 0;
    return 15; // 15 rupees delivery charges as requested
  }

  getTaxAmount(subtotal) {
    if (subtotal === 0) return 0;
    return Math.round(subtotal * 0.05); // 5% GST taxes on cafe food
  }

  bumpCartBadge() {
    const badges = document.querySelectorAll('.cart-count-badge');
    badges.forEach(badge => {
      badge.classList.add('bump');
      setTimeout(() => badge.classList.remove('bump'), 220);
    });
  }

  updateCartUI() {
    const count = this.getCartCount();
    const subtotal = this.getSubtotal();
    const deliveryFee = this.getDeliveryFee(subtotal);
    const taxAmount = this.getTaxAmount(subtotal);
    const grandTotal = subtotal + deliveryFee + taxAmount;

    // Update count badges everywhere
    const badges = document.querySelectorAll('.cart-count-badge');
    badges.forEach(b => b.textContent = count);

    // Update floating trigger
    const floatingTrigger = document.getElementById('floatingCartTrigger');
    if (floatingTrigger) {
      if (count > 0) {
        floatingTrigger.style.display = 'flex';
        const floatTotal = document.getElementById('floatingCartTotal');
        if (floatTotal) floatTotal.textContent = `₹${grandTotal}`;
      } else {
        floatingTrigger.style.display = 'none';
      }
    }

    // Render Drawer Content
    const drawerContainer = document.getElementById('cartItemsContainer');
    const drawerFooter = document.getElementById('cartDrawerFooter');

    if (drawerContainer) {
      if (count === 0) {
        drawerContainer.innerHTML = `
          <div class="cart-empty-state">
            <div class="cart-empty-icon">🍕</div>
            <h4>Your cart is empty</h4>
            <p>Looks like you haven't added anything to your cart yet. Explore our delicious menu!</p>
            <button class="btn btn-primary" onclick="app.closeCart(); app.scrollToSection('menu')">Explore Menu</button>
          </div>
        `;
        if (drawerFooter) drawerFooter.style.display = 'none';
      } else {
        if (drawerFooter) drawerFooter.style.display = 'block';
        let html = '';
        Object.values(this.cart).forEach(item => {
          html += `
            <div class="cart-item-row">
              <img src="${item.image}" alt="${item.name}" class="cart-item-img">
              <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price} x ${item.qty} = ₹${item.price * item.qty}</div>
              </div>
              <div class="cart-item-controls">
                <button class="cart-item-btn" onclick="app.updateQty('${item.id}', -1)" aria-label="Decrease quantity">−</button>
                <span class="cart-item-qty">${item.qty}</span>
                <button class="cart-item-btn" onclick="app.updateQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
                <button class="cart-item-remove" onclick="app.removeFromCart('${item.id}')" title="Remove item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                </button>
              </div>
            </div>
          `;
        });
        drawerContainer.innerHTML = html;

        // Update totals in drawer
        const subtotalEl = document.getElementById('drawerSubtotal');
        const deliveryEl = document.getElementById('drawerDelivery');
        const taxEl = document.getElementById('drawerTax');
        const totalEl = document.getElementById('drawerTotal');

        if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
        if (deliveryEl) deliveryEl.textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;
        if (taxEl) taxEl.textContent = `₹${taxAmount}`;
        if (totalEl) totalEl.textContent = `₹${grandTotal}`;
      }
    }

    // Update In-Page Order Form Cart Summary if present
    const orderFormSummary = document.getElementById('orderSummaryList');
    if (orderFormSummary) {
      if (count === 0) {
        orderFormSummary.innerHTML = `<div class="empty-hint" style="color:var(--text-muted); padding:16px 0;">No items in cart yet. Add dishes from the menu above!</div>`;
      } else {
        let orderHtml = '';
        Object.values(this.cart).forEach(item => {
          orderHtml += `
            <div class="cart-summary-line" style="font-weight:600;">
              <span>${item.name} (${item.qty}x)</span>
              <span>₹${item.price * item.qty}</span>
            </div>
          `;
        });
        orderFormSummary.innerHTML = orderHtml;
      }

      const orderSub = document.getElementById('orderPageSubtotal');
      const orderDel = document.getElementById('orderPageDelivery');
      const orderTax = document.getElementById('orderPageTax');
      const orderTot = document.getElementById('orderPageGrandTotal');

      if (orderSub) orderSub.textContent = `₹${subtotal}`;
      if (orderDel) orderDel.textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;
      if (orderTax) orderTax.textContent = `₹${taxAmount}`;
      if (orderTot) orderTot.textContent = `₹${grandTotal}`;
    }
  }

  // ========================================================================
  // RENDERING COMPONENTS
  // ========================================================================

  // Render Popular Food Items (Top picks: Margherita Pizza, Prefix, Crazy 4, Garlic Bread, Red Hot Pasta, French Fries)
  renderPopularDishes() {
    const popularContainer = document.getElementById('popularDishesGrid');
    if (!popularContainer) return;

    // Filter popular items
    const popularList = MENU_ITEMS.filter(item => item.popular);

    let html = '';
    popularList.forEach(dish => {
      const inCart = this.cart[dish.id];
      html += `
        <div class="food-card" id="dish-card-${dish.id}">
          <div class="food-card-image" onclick="app.openFoodModal('${dish.id}')">
            <img src="${dish.image}" alt="${dish.name}" loading="lazy">
            <span class="veg-indicator" title="100% Pure Vegetarian"></span>
            <span class="card-badge popular-badge">⭐ Popular Choice</span>
          </div>
          <div class="food-card-body">
            <div class="food-card-rating">
              <svg viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ${dish.rating} <span>(${dish.reviewsCount} reviews)</span>
            </div>
            <h4 class="food-card-title" onclick="app.openFoodModal('${dish.id}')">${dish.name}</h4>
            <p class="food-card-desc">${dish.description}</p>
            <div class="food-card-footer">
              <div class="dish-price"><span>₹</span>${dish.price}</div>
              ${
                inCart
                  ? `
                  <div class="card-qty-control">
                    <button class="card-qty-btn" onclick="app.updateQty('${dish.id}', -1)" aria-label="Decrease">−</button>
                    <span class="card-qty-val">${inCart.qty}</span>
                    <button class="card-qty-btn" onclick="app.updateQty('${dish.id}', 1)" aria-label="Increase">+</button>
                  </div>
                `
                  : `
                  <button class="btn-add-cart" onclick="app.addToCart('${dish.id}')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14m-7-7h14"/></svg>
                    Add to Cart
                  </button>
                `
              }
            </div>
          </div>
        </div>
      `;
    });

    popularContainer.innerHTML = html;
  }

  // Render Full Menu Grid with Search & Category Tabs
  renderMenuGrid() {
    const menuContainer = document.getElementById('menuGrid');
    if (!menuContainer) return;

    let filtered = MENU_ITEMS;

    // Filter by category
    if (this.activeCategory !== 'all') {
      if (this.activeCategory === 'combos' || this.activeCategory === 'beverages') {
        filtered = filtered.filter(item => item.category === 'combos' || item.category === 'beverages');
      } else {
        filtered = filtered.filter(item => item.category === this.activeCategory);
      }
    }

    // Filter by search query
    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(
        item => item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      menuContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background:#FFF; border-radius:18px;">
          <h4 style="font-size:1.4rem; color:var(--secondary); margin-bottom:8px;">No dishes found</h4>
          <p style="color:var(--text-muted);">Try searching with a different keyword or browse all menu items.</p>
          <button class="btn btn-primary" style="margin-top:16px;" onclick="app.clearSearch()">View All Menu</button>
        </div>
      `;
      return;
    }

    let html = '';
    filtered.forEach(dish => {
      const inCart = this.cart[dish.id];
      html += `
        <div class="food-card" id="menu-card-${dish.id}">
          <div class="food-card-image" onclick="app.openFoodModal('${dish.id}')">
            <img src="${dish.image}" alt="${dish.name}" loading="lazy">
            <span class="veg-indicator" title="100% Pure Vegetarian"></span>
            ${dish.bestseller ? `<span class="card-badge" style="background:#DE5A18;">Bestseller 🔥</span>` : ''}
          </div>
          <div class="food-card-body">
            <div class="food-card-rating">
              <svg viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ${dish.rating} <span>(${dish.reviewsCount})</span>
            </div>
            <h4 class="food-card-title" onclick="app.openFoodModal('${dish.id}')">${dish.name}</h4>
            <p class="food-card-desc">${dish.description}</p>
            <div class="food-card-footer">
              <div class="dish-price"><span>₹</span>${dish.price}</div>
              ${
                inCart
                  ? `
                  <div class="card-qty-control">
                    <button class="card-qty-btn" onclick="app.updateQty('${dish.id}', -1)" aria-label="Decrease">−</button>
                    <span class="card-qty-val">${inCart.qty}</span>
                    <button class="card-qty-btn" onclick="app.updateQty('${dish.id}', 1)" aria-label="Increase">+</button>
                  </div>
                `
                  : `
                  <button class="btn-add-cart" onclick="app.addToCart('${dish.id}')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14m-7-7h14"/></svg>
                    Add to Cart
                  </button>
                `
              }
            </div>
          </div>
        </div>
      `;
    });

    menuContainer.innerHTML = html;
  }

  // Render Bestseller mini cards in the banner
  renderBestsellerRow() {
    const container = document.getElementById('bestsellerMiniRow');
    if (!container) return;

    // Pick 4 top bestsellers
    const picks = [
      MENU_ITEMS.find(i => i.id === 'margherita-pizza'),
      MENU_ITEMS.find(i => i.id === 'crazy-4-pizza'),
      MENU_ITEMS.find(i => i.id === 'cheese-garlic-bread'),
      MENU_ITEMS.find(i => i.id === 'red-hot-pasta')
    ];

    let html = '';
    picks.forEach(item => {
      if (!item) return;
      html += `
        <div class="bestseller-mini-card" onclick="app.openFoodModal('${item.id}')">
          <img src="${item.image}" alt="${item.name}">
          <div class="mini-card-text">
            <strong>${item.name}</strong>
            <span>₹${item.price}</span>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  // Render Customer Reviews
  renderReviews() {
    const reviewsGrid = document.getElementById('customerReviewsGrid');
    const aggregateEl = document.getElementById('aggregateScore');
    const totalCountEl = document.getElementById('totalReviewCount');

    if (!reviewsGrid) return;

    // Calculate dynamic average
    const total = this.reviews.reduce((acc, r) => acc + r.rating, 0);
    const avg = (total / this.reviews.length).toFixed(1);

    if (aggregateEl) aggregateEl.textContent = avg;
    if (totalCountEl) totalCountEl.textContent = `Based on ${this.reviews.length} authentic customer ratings`;

    let html = '';
    this.reviews.forEach(rev => {
      const initial = rev.name.charAt(0).toUpperCase();
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        stars += i <= rev.rating ? '★' : '☆';
      }

      html += `
        <div class="review-card">
          <div class="review-header">
            <div class="reviewer-meta">
              <div class="reviewer-avatar">${initial}</div>
              <div>
                <div class="reviewer-name">${rev.name}</div>
                <div class="review-date">${rev.date}</div>
              </div>
            </div>
            <div class="review-stars">${stars}</div>
          </div>
          <p class="review-text">"${rev.comment}"</p>
          ${rev.dish ? `<span class="review-dish-tag">🍽️ Ordered: ${rev.dish}</span>` : ''}
        </div>
      `;
    });

    reviewsGrid.innerHTML = html;
  }

  // ========================================================================
  // MODALS & DETAILS
  // ========================================================================
  openFoodModal(dishId) {
    const dish = MENU_ITEMS.find(d => d.id === dishId);
    if (!dish) return;

    const modalBackdrop = document.getElementById('foodDetailModal');
    const modalContent = document.getElementById('foodModalBodyContent');

    if (!modalBackdrop || !modalContent) return;

    const inCart = this.cart[dish.id];
    modalContent.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}" class="food-modal-img">
      <div class="food-modal-body">
        <div class="modal-tags">
          <span class="veg-indicator" style="position:static; display:inline-flex;" title="100% Pure Veg"></span>
          <span class="card-badge" style="position:static; background:#DE5A18;">${dish.prepTime}</span>
          ${dish.tags.map(t => `<span class="card-badge" style="position:static; background:#F4EFE6; color:#5E5852;">${t}</span>`).join('')}
        </div>
        <h3 style="font-size:1.7rem; margin-bottom:8px; color:var(--secondary);">${dish.name}</h3>
        <div class="food-card-rating" style="margin-bottom:14px;">
          <svg viewBox="0 0 20 20" style="width:18px;height:18px;"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          ${dish.rating} <span>(${dish.reviewsCount} customer ratings)</span>
        </div>
        <p style="color:var(--text-muted); line-height:1.65; margin-bottom:24px;">${dish.description}</p>
        
        <div style="background:#FAF7F2; padding:16px; border-radius:14px; margin-bottom:24px; border:1px solid var(--border-light);">
          <div style="font-size:0.85rem; font-weight:700; color:var(--primary); text-transform:uppercase; margin-bottom:4px;">Urban Bites Freshness Promise</div>
          <div style="font-size:0.9rem; color:var(--text-muted);">Crafted fresh on-order with 100% natural ingredients, unbleached flour dough, and premium spices.</div>
        </div>

        <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
          <div>
            <span style="font-size:0.85rem; color:var(--text-light); display:block;">Total Price</span>
            <div class="dish-price" style="font-size:1.8rem;"><span>₹</span>${dish.price}</div>
          </div>
          <button class="btn btn-primary" onclick="app.addToCart('${dish.id}'); app.closeFoodModal();">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14m-7-7h14"/></svg>
            Add to Order
          </button>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('active');
  }

  closeFoodModal() {
    const modalBackdrop = document.getElementById('foodDetailModal');
    if (modalBackdrop) modalBackdrop.classList.remove('active');
  }

  // ========================================================================
  // REVIEWS FORM & 5-STAR WORKABLE SYSTEM
  // ========================================================================
  setupReviewForm() {
    const starsContainer = document.getElementById('reviewStarPicker');
    if (!starsContainer) return;

    let selectedRating = 5;

    const stars = starsContainer.querySelectorAll('.star');
    stars.forEach(star => {
      star.addEventListener('click', (e) => {
        selectedRating = parseInt(e.target.dataset.value);
        this.updateStarPicker(stars, selectedRating);
      });
      star.addEventListener('mouseover', (e) => {
        const hoverVal = parseInt(e.target.dataset.value);
        this.updateStarPicker(stars, hoverVal);
      });
    });

    starsContainer.addEventListener('mouseleave', () => {
      this.updateStarPicker(stars, selectedRating);
    });

    // Populate Dish Selector in review form
    const dishSelect = document.getElementById('reviewDishSelect');
    if (dishSelect) {
      let optHtml = `<option value="">Select dish (optional)</option>`;
      MENU_ITEMS.forEach(item => {
        optHtml += `<option value="${item.name}">${item.name} (₹${item.price})</option>`;
      });
      dishSelect.innerHTML = optHtml;
    }

    const reviewForm = document.getElementById('writeReviewForm');
    if (reviewForm) {
      reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('reviewAuthorName');
        const commentInput = document.getElementById('reviewCommentText');
        const dishInput = document.getElementById('reviewDishSelect');

        const name = nameInput ? nameInput.value.trim() : '';
        const comment = commentInput ? commentInput.value.trim() : '';
        const dish = dishInput ? dishInput.value : '';

        if (!name || !comment) {
          alert('Please enter your name and review message.');
          return;
        }

        const newReview = {
          id: 'rev-' + Date.now(),
          name: name,
          rating: selectedRating,
          date: 'Just now',
          dish: dish || 'Special Order',
          comment: comment
        };

        this.reviews.unshift(newReview);
        this.saveReviews();
        this.renderReviews();
        this.closeReviewModal();
        this.showToast(`Thank you ${name}! Your 5-star review has been posted! ⭐`);

        if (nameInput) nameInput.value = '';
        if (commentInput) commentInput.value = '';
      });
    }
  }

  updateStarPicker(starsList, val) {
    starsList.forEach(s => {
      const v = parseInt(s.dataset.value);
      if (v <= val) {
        s.classList.add('active');
        s.textContent = '★';
      } else {
        s.classList.remove('active');
        s.textContent = '☆';
      }
    });
  }

  openReviewModal() {
    const modal = document.getElementById('writeReviewModal');
    if (modal) modal.classList.add('active');
  }

  closeReviewModal() {
    const modal = document.getElementById('writeReviewModal');
    if (modal) modal.classList.remove('active');
  }

  // ========================================================================
  // WHATSAPP ORDER ENGINE (KEY CUSTOMER REQUIREMENT)
  // ========================================================================
  placeOrder(viaWhatsApp = true) {
    const count = this.getCartCount();
    if (count === 0) {
      this.showToast('Please add items to your cart first! 🍕');
      this.openCart();
      return;
    }

    // Read form inputs
    const nameEl = document.getElementById('customerFullName');
    const phoneEl = document.getElementById('customerPhone');
    const addressEl = document.getElementById('customerAddress');
    const notesEl = document.getElementById('customerNotes');

    const name = nameEl ? nameEl.value.trim() : '';
    const phone = phoneEl ? phoneEl.value.trim() : '';
    const address = addressEl ? addressEl.value.trim() : '';
    const notes = notesEl ? notesEl.value.trim() : '';

    if (!name) {
      alert('Please enter your Full Name.');
      if (nameEl) nameEl.focus();
      return;
    }

    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      if (phoneEl) phoneEl.focus();
      return;
    }

    if (this.deliveryType === 'delivery' && !address) {
      alert('Please provide your delivery address in Himatnagar.');
      if (addressEl) addressEl.focus();
      return;
    }

    const subtotal = this.getSubtotal();
    const delivery = this.getDeliveryFee(subtotal);
    const taxAmount = this.getTaxAmount(subtotal);
    const grandTotal = subtotal + delivery + taxAmount;
    const orderId = 'UB-' + Math.floor(100000 + Math.random() * 900000);

    if (viaWhatsApp) {
      // Format WhatsApp message with subtotal, 15 rs delivery, and taxes
      let message = `🍕 *NEW FOOD ORDER - URBAN BITES* 🍕\n`;
      message += `📋 *Order ID:* #${orderId}\n`;
      message += `----------------------------------------\n`;
      message += `👤 *Customer:* ${name}\n`;
      message += `📞 *Phone:* ${phone}\n`;
      message += `📦 *Type:* ${this.deliveryType.toUpperCase()}\n`;
      if (this.deliveryType === 'delivery') {
        message += `📍 *Delivery Address:* ${address}\n`;
      }
      if (notes) {
        message += `📝 *Notes:* ${notes}\n`;
      }
      message += `💳 *Payment:* ${this.paymentMethod.toUpperCase()}\n`;
      message += `----------------------------------------\n`;
      message += `*ORDER ITEMS:*\n`;

      Object.values(this.cart).forEach(item => {
        message += `• ${item.name} x ${item.qty} = ₹${item.price * item.qty}\n`;
      });

      message += `----------------------------------------\n`;
      message += `💰 *Subtotal:* ₹${subtotal}\n`;
      message += `🛵 *Delivery Charges:* ₹${delivery}\n`;
      message += `📑 *Taxes (5% GST):* ₹${taxAmount}\n`;
      message += `🔥 *GRAND TOTAL: ₹${grandTotal}*\n`;
      message += `----------------------------------------\n`;
      message += `📍 *Cafe Location:* Civil Road, Sahkarijin, Himatnagar\n`;
      message += `Please confirm my order and share preparation time. Thank you!`;

      // WhatsApp Cafe Phone Number (Specified in prompt: 9714100891)
      const cafePhone = '919714100891';
      const waUrl = `https://wa.me/${cafePhone}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    }

    // Show Confirmation Modal for both WhatsApp & Direct Orders
    this.showOrderConfirmationModal({
      orderId,
      name,
      phone,
      address,
      subtotal,
      delivery,
      taxAmount,
      grandTotal,
      deliveryType: this.deliveryType,
      viaWhatsApp,
      itemsCount: count
    });

    this.showToast(viaWhatsApp ? `WhatsApp order #${orderId} sent! 📲` : `Order #${orderId} confirmed successfully! 🎉`);

    // Clear cart after successful order placement
    this.clearCart();
    this.closeCart();
  }

  showOrderConfirmationModal(orderData) {
    const modal = document.getElementById('orderSuccessModal');
    const content = document.getElementById('orderSuccessDetails');

    if (!modal || !content) return;

    const isDirect = !orderData.viaWhatsApp;

    content.innerHTML = `
      <div style="text-align:center; padding:10px 0;">
        <div style="width:72px; height:72px; background:#E8F5E9; color:#2E7D32; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:2.4rem; margin-bottom:16px;">
          ✓
        </div>
        <h3 style="font-size:1.6rem; color:var(--secondary); margin-bottom:8px;">
          ${isDirect ? 'Order Confirmed Successfully!' : 'Order Transmitted via WhatsApp!'}
        </h3>
        <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:20px;">
          Thank you <strong>${orderData.name}</strong>! Your order <strong>#${orderData.orderId}</strong> has been received by our kitchen.
        </p>

        <div style="background:#FAF7F2; border-radius:14px; padding:18px; text-align:left; border:1px solid var(--border-light); margin-bottom:24px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.92rem;">
            <span style="color:var(--text-muted);">Subtotal:</span>
            <strong>₹${orderData.subtotal}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.92rem;">
            <span style="color:var(--text-muted);">Delivery Charges:</span>
            <strong>${orderData.delivery === 0 ? 'FREE' : `₹${orderData.delivery}`}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.92rem;">
            <span style="color:var(--text-muted);">Taxes (5% GST):</span>
            <strong>₹${orderData.taxAmount}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:1.05rem; padding-top:8px; border-top:1px dashed var(--border-color);">
            <strong style="color:var(--secondary);">Grand Total:</strong>
            <strong style="color:var(--primary); font-size:1.25rem;">₹${orderData.grandTotal}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-top:8px; font-size:0.92rem;">
            <span style="color:var(--text-muted);">Estimated Time:</span>
            <strong>20 - 30 Minutes</strong>
          </div>
        </div>

        <a href="https://wa.me/919714100891?text=Hello%20Urban%20Bites%20Cafe!%20Inquiring%20about%20my%20Order%20%23${orderData.orderId}" target="_blank" class="btn btn-whatsapp btn-block" style="margin-bottom:10px;">
          💬 Chat on WhatsApp (+91 9714100891)
        </a>
        <button class="btn btn-secondary btn-block" onclick="app.closeOrderConfirmationModal(); app.scrollToSection('home')">
          Back to Home Page
        </button>
      </div>
    `;

    modal.classList.add('active');
  }

  closeOrderConfirmationModal() {
    const modal = document.getElementById('orderSuccessModal');
    if (modal) modal.classList.remove('active');
  }

  // ========================================================================
  // AI CHATBOT ("BiteBot")
  // ========================================================================
  setupChatbot() {
    const launcher = document.getElementById('chatbotLauncher');
    const windowEl = document.getElementById('chatbotWindow');
    const closeBtn = document.getElementById('chatbotCloseBtn');
    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSendBtn');

    if (launcher && windowEl) {
      launcher.addEventListener('click', () => {
        windowEl.classList.toggle('open');
        if (windowEl.classList.contains('open') && input) {
          input.focus();
        }
      });
    }

    if (closeBtn && windowEl) {
      closeBtn.addEventListener('click', () => {
        windowEl.classList.remove('open');
      });
    }

    if (sendBtn && input) {
      const handleSend = () => {
        const text = input.value.trim();
        if (!text) return;
        this.addChatMessage(text, 'user');
        input.value = '';
        setTimeout(() => this.processBotReply(text), 450);
      };

      sendBtn.addEventListener('click', handleSend);
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
      });
    }
  }

  addChatMessage(text, sender = 'bot') {
    const container = document.getElementById('chatMessages');
    if (!container) return;

    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = text;
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
  }

  processBotReply(userText) {
    const text = userText.toLowerCase();
    let reply = '';

    if (text.includes('hello') || text.includes('hi') || text.includes('hey') || text.includes('namaste')) {
      reply = `Hello! Welcome to <strong>Urban Bites Cafe</strong>! 🍕 How can I help you today? You can ask about our pizzas, prices, opening timings, cafe address, or how to place an order via WhatsApp!`;
    } else if (text.includes('margherita') || text.includes('pizza') || text.includes('pizzas')) {
      reply = `Our artisan stone-baked pizzas are customer favorites! 
        <br>• <strong>Margherita Pizza:</strong> ₹165/-
        <br>• <strong>Prefix Pizza:</strong> ₹299/-
        <br>• <strong>Chatpata Paneer Pizza:</strong> ₹320/-
        <br>• <strong>Crazy 4 Pizza:</strong> ₹599/-
        <br><br><button class="quick-reply-chip" onclick="app.scrollToSection('menu'); app.setCategory('pizzas');">View All Pizzas</button>`;
    } else if (text.includes('timing') || text.includes('time') || text.includes('open') || text.includes('hours') || text.includes('close')) {
      reply = `🕒 <strong>Opening & Closing Hours:</strong><br>We are open every day (Monday to Sunday) from <strong>10:00 AM to 11:00 PM</strong>! Fresh dough baked all day long.`;
    } else if (text.includes('location') || text.includes('address') || text.includes('where') || text.includes('himatnagar') || text.includes('sahkarijin')) {
      reply = `📍 <strong>Cafe Address:</strong><br>Civil Road, Sahkarijin, Himatnagar, Gujarat.<br><a href="https://maps.google.com/?q=Civil+Road+Sahkarijin+Himatnagar" target="_blank" style="color:var(--primary); font-weight:700; text-decoration:underline;">Click here to open Google Maps</a>`;
    } else if (text.includes('phone') || text.includes('call') || text.includes('contact') || text.includes('number') || text.includes('whatsapp')) {
      reply = `📞 <strong>Direct Contact:</strong><br>Phone & WhatsApp: <strong>9714100891</strong><br>Email: <strong>irfangulamsurti@gmail.com</strong><br><br><a href="https://wa.me/919714100891" target="_blank" class="quick-reply-chip">💬 Chat on WhatsApp</a>`;
    } else if (text.includes('price') || text.includes('menu') || text.includes('rate') || text.includes('cost')) {
      reply = `Our prices are super pocket-friendly! Prices start from just ₹110 for Crispy French Fries & Garlic Bread, and Margherita Pizza is only ₹165! Everything is 100% Pure Veg.`;
    } else if (text.includes('order') || text.includes('buy') || text.includes('deliver') || text.includes('delivery')) {
      reply = `🛵 <strong>How to Order:</strong><br>1. Click "Add to Cart" on any delicious dish.<br>2. Open your Cart & fill your details.<br>3. Click <strong>"Place Order via WhatsApp"</strong> — your full order will be sent directly to <strong>9714100891</strong>! Free delivery above ₹300!`;
    } else if (text.includes('popular') || text.includes('best') || text.includes('recommend')) {
      reply = `🌟 <strong>Top Recommendations:</strong><br>1. Margherita Pizza (₹165)<br>2. Crazy 4 Pizza (₹599)<br>3. Cheese Garlic Bread (₹110)<br>4. Cold Coffee with Ice Cream (₹110)`;
    } else {
      reply = `I would love to help you with that! You can explore our menu, check our popular Margherita Pizza, or reach our cafe directly at <strong>9714100891</strong> or via WhatsApp.`;
    }

    this.addChatMessage(reply, 'bot');
  }

  askBot(prompt) {
    const input = document.getElementById('chatInput');
    if (input) input.value = prompt;
    this.addChatMessage(prompt, 'user');
    setTimeout(() => this.processBotReply(prompt), 350);
  }

  // ========================================================================
  // EVENT LISTENERS & NAVIGATION
  // ========================================================================
  setupEventListeners() {
    // Category tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.activeCategory = e.currentTarget.dataset.category;
        this.renderMenuGrid();
      });
    });

    // Menu search input
    const searchInput = document.getElementById('menuSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderMenuGrid();
      });
    }

    // Header scroll background
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.site-header');
      if (header) {
        if (window.scrollY > 30) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });

    // Order type selectors
    const typeCards = document.querySelectorAll('.order-type-card');
    typeCards.forEach(card => {
      card.addEventListener('click', () => {
        typeCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.deliveryType = card.dataset.type;
        const addressRow = document.getElementById('addressFormGroup');
        if (addressRow) {
          addressRow.style.display = this.deliveryType === 'delivery' ? 'block' : 'none';
        }
        this.updateCartUI();
      });
    });

    // Payment selectors
    const payCards = document.querySelectorAll('.payment-card');
    payCards.forEach(card => {
      card.addEventListener('click', () => {
        payCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.paymentMethod = card.dataset.pay;
      });
    });

    // Contact Form
    const contactForm = document.getElementById('contactUsForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const msg = document.getElementById('contactMsg').value.trim();

        if (!name || !phone || !msg) {
          alert('Please fill out your Name, Phone Number, and Message.');
          return;
        }

        this.showToast(`Thank you ${name}! We received your message and will contact you shortly.`);
        contactForm.reset();
      });
    }
  }

  setCategory(cat) {
    this.activeCategory = cat;
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => {
      if (t.dataset.category === cat) t.classList.add('active');
      else t.classList.remove('active');
    });
    this.renderMenuGrid();
  }

  clearSearch() {
    this.searchQuery = '';
    const searchInput = document.getElementById('menuSearchInput');
    if (searchInput) searchInput.value = '';
    this.setCategory('all');
  }

  openCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('active');
  }

  closeCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
  }

  toggleMobileNav() {
    const drawer = document.getElementById('mobileNavDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer) drawer.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');
  }

  closeMobileNav() {
    const drawer = document.getElementById('mobileNavDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
  }

  scrollToSection(id) {
    this.closeMobileNav();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (id === 'order') {
      this.scrollToSection('order-online');
    }
  }

  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>🍕</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }
}

// Global initialization
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new UrbanCafeApp();
  window.app = app;
});
