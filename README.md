# UrbanTech

UrbanTech is an e-commerce website designed for selling mobile phones, tablets, laptops, headphones, and various accessories. The website is built using React and organized into components, with a focus on reusability and efficient data management.

## Features

- Browse and purchase a wide range of electronic devices and accessories.
- View detailed product information, including specifications and pricing.
- Add products to the cart and proceed to checkout seamlessly.
- Utilize reusable components for a consistent and modular design.
- Utilize React Router v6 for smooth navigation and dynamic URL handling.
- Implement `useParams` to extract parameters from the URL.
- Use context API for managing the cart state and adding items to the cart.

## Components

The project is organized into several components to ensure modularity and reusability:

- **ProductCard Component**: This reusable component is used to display product information in a card format. Data for each product is passed to this component as props.
- **ProductDetails Component**: This component renders detailed information about a specific product. It utilizes `useParams` to extract the product ID from the URL and then matches it using a switch case to retrieve the corresponding product data.
- **Cart Component**: Display the items added to the cart, total price, and provide options for checkout.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router v6**: A routing library for React applications, used for navigation and URL handling.
- **Context API**: A feature in React for managing state across the application.
- **HTML/CSS**: Standard markup and styling languages for web development.
