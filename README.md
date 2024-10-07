# Online Gym Management System


## Introduction
Welcome to the Online Gym Management System, a user-friendly platform designed to streamline gym booking operations and enhance customer experience. This document provides an overview of the key features and functionalities of the system.

## Technologies Used

- **Front-end**: Java Server Pages (JSP), CSS, JavaScript
- **Back-end**: Spring Boot, Spring Data JPA, Spring MVC, Spring Security
- **Web Server**: Apache Tomcat
- **Database**: MySQL
- **IDE**: Eclipse IDE for Enterprise Java and Web Developers

## Admin Dashboard

### Gym Item Management
- **Add new gym items** to the system.
- **View a list** of all gym items.
- **Update existing** gym items.

### Timing Slot Management
- **Schedule and manage** gym slot timings.
- **View, update, and cancel** slot bookings.

### Customer Management
- **View customer feedback**.
- **Delete customers** from the system.

## Adding and Modifying Gym Items

- **Item Details**: Admin can enter gym item name and total seats.
- **View Item Details**: Admin can view details of gym items.
- **Edit Item Details**: Admin can modify gym item details.

## Timing Slot Management

- **Create New Slot**: Set the time and price for the slot.
- **Assign Gym Items**: Choose which gym items are available during this slot.
- **Edit Price**: Modify the price for the slot.

## Customer Dashboard

- **Registration**: New customers can register on the platform.
- **Login**: Registered users can log in to their accounts.
- **Slot Booking**: Customers can book gym slots based on their preferences.
- **View Bookings**: Customers can view all their booked slots.
- **Cancel Bookings**: Customers can cancel their existing bookings.
- **Feedback**: Provide feedback about gym services.

## Slot Booking and Cancelling for Customers

1. **Select Slots**: Customers can choose slots according to their flexible timing.
2. **Select Gym Item and Book**: Customers can choose a gym item associated with the selected slot.
3. **Booking Confirmation**: A confirmation message is displayed after a successful booking.
4. **View and Cancel Bookings**: Customers have the option to view and cancel their bookings if needed.

## Slot Booking and Cancelling for Customers by Admin

- **Select Slot**: Admin can choose time slots and slot prices that suit the customer's schedule.
- **Select Customer and Gym Items**: Admin can select customers by their username, select gym items, and make the booking.
- **Confirm Booking**: A booking success message is displayed.
- **Cancel Booking**: Admin can see all bookings made by customers and cancel bookings as needed.

## RESTful APIs

The Online Gym Management System features RESTful APIs developed using Spring Boot to support efficient data exchange between the front-end and back-end systems, including:
- **Slot Booking APIs**: To manage slot booking requests.
- **Customer Management APIs**: To handle customer registrations, bookings, and feedback.
- **Admin APIs**: To manage gym items, slots, and customer information.

## Conclusion and Key Features
The Online Gym Management System offers a platform for streamlining gym booking operations, providing a seamless experience for both admins and customers. Key features include:
- Gym item management
- Slot booking and cancellation
- Customer feedback system

This system is designed to improve efficiency, enhance user experience, and make gym management simpler for both admins and customers.
