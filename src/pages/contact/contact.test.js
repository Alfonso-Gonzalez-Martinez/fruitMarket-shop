import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'
import contactImage from '../../assets/contact.jpg'

describe('Does the contact form render correctly', () => {
    test('Does the form image display correctly', () => {
        render(<Contact />)
        const imageContainer = screen.getByTestId("contact-container")
        expect(imageContainer).toHaveStyle(`backgroundImage: url(${contactImage}`)
    })
    test('Does the form container contain the different elements', () => {
        render(<Contact />)
        const formContainer = screen.getByTestId("form-container")
        expect(formContainer).toContainElement(screen.getByText(/Contact Us - Fresh Fruit Market/i))
        expect(formContainer).toContainElement(screen.getByTestId("form-box"))
    })
    test('Does the input name display correctly', () => {
        render(<Contact />)
        const nameInput = screen.getByLabelText("Name:")
        expect(nameInput).toBeInTheDocument()
    })
    test('Does the input email display correctly', () => {
        render(<Contact />)
        const emailInput = screen.getByLabelText("Email:")
        expect(emailInput).toBeInTheDocument()
    })
    test('Does the input message display correctly', () => {
        render(<Contact />)
        const messageInput = screen.getByLabelText("Message:")
        expect(messageInput).toBeInTheDocument()
    })
    test('Does the submit button display correctly', () => {
        render(<Contact />)
        const submitButton = screen.getByRole('button', { name: /submit/i})
        expect(submitButton).toBeInTheDocument()
    })
})

describe('Interactions with the form component', () => {
    test('Does the input name allow input', () => {
        render(<Contact />)
        const nameInput = screen.getByLabelText("Name:")
        userEvent.type(nameInput, 'John')
        expect(nameInput).toHaveValue('John')
    })
    test('Does the input email allow input', () => {
        render(<Contact />)
        const emailInput = screen.getByLabelText("Email:")
        userEvent.type(emailInput, 'john@gmail.com')
        expect(emailInput).toHaveValue('john@gmail.com')
    })
    test('Does the input message allow input', () => {
        render(<Contact />)
        const messageInput = screen.getByLabelText("Message:")
        userEvent.type(messageInput, 'Hello from John')
        expect(messageInput).toHaveValue('Hello from John')
    })
})

describe('Form submission and state resets', () => {
 
    test('Does the submit button submits the form and reset the inputs', async () => {
        render(<Contact />)

        const nameInput = screen.getByLabelText("Name:")
        const emailInput = screen.getByLabelText("Email:")
        const messageInput = screen.getByLabelText("Message:")
        const submitButton = screen.getByRole('button', { name: /submit/i})

        userEvent.type(nameInput, 'John')
        userEvent.type(emailInput, 'john@gmail.com')
        userEvent.type(messageInput, 'Hello from John')

        window.alert = jest.fn()
        await userEvent.click(submitButton)

        expect(window.alert).toHaveBeenCalledWith('Thank you John for contacting us!')

        await waitFor(() => expect(nameInput).toHaveValue(''));
        await waitFor(() => expect(emailInput).toHaveValue(''));
        await waitFor(() => expect(messageInput).toHaveValue(''));
    })
})

