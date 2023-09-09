import React from 'react'
import { ContactContainer, ContactForm } from './Contact.Styled';

const Contact = () => {
    return (
    <ContactContainer>
        <h2>Ponte en contacto con Nosotros!</h2>
        <p>Por favor, completa el formulario para ponerte en contacto con nosotros. Si tienes alguna pregunta o comentario, no dudes en escribirnos. ¡Estamos deseando saber de ti!</p>
        <ContactForm>
            <label for="name">Nombre:</label>
            <input
                type="text"
                id="name"
                name="name"
                maxlength="50"
                placeholder="Ingrese su Nombre"
                required
            />

            <label for="email">Correo electrónico:</label>
            <input
                type="email"
                id="email"
                name="email"
                maxlength="50"
                placeholder="Ingrese su correo electrónico"
                required
            />

            <label for="subject">Asunto:</label>
            <input
                type="text"
                id="subject"
                name="subject"
                maxlength="80"
                placeholder="Ingrese el asunto de su consulta"
                required
            />

            <label for="message">Mensaje:</label>
            <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Ingrese su consulta"
                required
            ></textarea>
        </ContactForm>
    </ContactContainer>
    )
}

export default Contact